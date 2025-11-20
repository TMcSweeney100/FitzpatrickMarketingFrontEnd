import { Resend } from "resend";

const REQUIRED_ENV_VARS = [
  "RESEND_API_KEY",
  "COMPANY_EMAIL",
  "FROM_INTERNAL",
  "FROM_PUBLIC_ACK",
  "TURNSTILE_SECRET",
];

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const parseRequestBody = async (req) => {
  if (req.body) {
    if (typeof req.body === "object") {
      return req.body;
    }

    if (typeof req.body === "string") {
      return JSON.parse(req.body);
    }
  }

  return new Promise((resolve, reject) => {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      if (!data) {
        resolve({});
        return;
      }

      try {
        const parsed = JSON.parse(data);
        resolve(parsed);
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", (error) => {
      reject(error);
    });
  });
};

const ensureEnvVars = () => {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    const error = new Error(`Missing environment variables: ${missing.join(", ")}`);
    error.code = "MISSING_ENV";
    throw error;
  }
};

const validateInput = (body) => {
  const {
    name,
    company,
    email,
    phone = "",
    website = "",
    budget,
    message,
    website2 = "",
    captchaToken,
  } = body || {};

  if (
    !name ||
    !company ||
    !email ||
    !budget ||
    typeof message !== "string" ||
    !message ||
    !captchaToken
  ) {
    return { valid: false, error: "invalid_input" };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: "invalid_input" };
  }

  if (typeof message === "string" && message.length > 1000) {
    return { valid: false, error: "message_too_long" };
  }

  return {
    valid: true,
    data: {
      name,
      company,
      email,
      phone,
      website,
      budget,
      message,
      website2,
      captchaToken,
    },
  };
};

const isHoneypotTripped = (website2) => {
  if (typeof website2 !== "string") {
    return Boolean(website2);
  }

  return website2.trim().length > 0;
};

const getRemoteIp = (req) => {
  const header = req.headers["x-forwarded-for"];
  if (!header) {
    return "";
  }

  if (Array.isArray(header)) {
    return header[0];
  }

  return header.split(",")[0].trim();
};

const verifyTurnstile = async ({ token, remoteIp }) => {
  const params = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET || "",
    response: token,
  });

  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    },
  );

  const result = await response.json();

  if (!result.success) {
    throw new Error("captcha_failed");
  }
};

const buildInternalEmail = (payload, remoteIp) => {
  const lines = [
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "N/A"}`,
    `Website: ${payload.website || "N/A"}`,
    `Budget: ${payload.budget}`,
    `Message: ${payload.message}`,
    `IP: ${remoteIp || "Unavailable"}`,
  ];

  return lines.join("\n");
};

const buildAckEmail = (name) => {
  return [
    `Hi ${name},`,
    "",
    "Thanks for getting in touch with Fitzpatrick Marketing.",
    "We have received your enquiry and will follow up within one business day.",
    "",
    "Talk soon,",
    "Fitzpatrick Marketing",
  ].join("\n");
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  try {
    ensureEnvVars();
  } catch (error) {
    console.error("Missing environment variables", error);
    res.status(500).json({ error: "server_error" });
    return;
  }

  let body = {};

  try {
    body = await parseRequestBody(req);
  } catch (error) {
    console.error("Failed to parse JSON body", error);
    res.status(400).json({ error: "invalid_input" });
    return;
  }

  const validation = validateInput(body);

  if (!validation.valid) {
    res.status(400).json({
      error: validation.error,
    });
    return;
  }

  const { data } = validation;

  if (isHoneypotTripped(data.website2)) {
    res.status(200).json({ ok: true });
    return;
  }

  const remoteIp = getRemoteIp(req);

  try {
    await verifyTurnstile({ token: data.captchaToken, remoteIp });
  } catch (error) {
    if (error.message === "captcha_failed") {
      res.status(400).json({ error: "captcha_failed" });
      return;
    }

    console.error("Turnstile verification failed", error);
    res.status(500).json({ error: "server_error" });
    return;
  }

  try {
    await resend.emails.send({
      from: process.env.FROM_INTERNAL,
      to: process.env.COMPANY_EMAIL,
      reply_to: data.email,
      subject: `New quote enquiry from ${data.name}`,
      text: buildInternalEmail(data, remoteIp),
    });

    await resend.emails.send({
      from: process.env.FROM_PUBLIC_ACK,
      to: data.email,
      subject: "We received your enquiry",
      text: buildAckEmail(data.name),
    });
  } catch (error) {
    console.error("Failed to send enquiry emails", error);
    res.status(500).json({ error: "server_error" });
    return;
  }

  res.status(200).json({ ok: true });
}
