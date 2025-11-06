import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  Clock,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const initialFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  budget: "",
  message: "",
};

const budgetOptions = [
  { value: "under-1k", label: "Under EUR 1k / project" },
  { value: "1k-3k", label: "EUR 1k - 3k / project" },
  { value: "3k-5k", label: "EUR 3k - 5k / project" },
  { value: "5k-plus", label: "EUR 5k+ / project" },
  { value: "retainer", label: "Monthly retainer (custom)" },
];

function ContactForm() {
  const { toast } = useToast();
  const [formValues, setFormValues] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toast({
      title: "Thank you for reaching out!",
      description: "We will reply within 24 hours with the next steps.",
    });

    setFormValues(initialFormState);
  };

  return (
    <>
      <Separator className="my-16" />
      <section className="container mx-auto max-w-5xl px-4 pb-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_1fr]">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Let's make it happen
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Share what success looks like and we will build the plan.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Fill out the form with the essentials and we will come back to
                you within 24 hours. Prefer email? Reach us anytime at{" "}
                <a
                  className="font-medium text-foreground underline underline-offset-4"
                  href="mailto:fitzpatrick_marketing@outlook.com"
                >
                  fitzpatrick_marketing@outlook.com
                </a>
                .
              </p>
            </div>

            <div className="space-y-6 rounded-3xl border border-border/60 bg-muted/20 p-6 shadow-sm backdrop-blur-sm sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                What happens next
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Rapid first response</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      You will receive a confirmation and tailored follow-up
                      within one business day.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <CalendarCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Discovery & alignment</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      We schedule a 20 minute session to clarify goals, budget,
                      and timelines so we can shape the right mix.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Your action plan</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Expect a concise roadmap outlining deliverables, expected
                      impact, and the fastest way to get started.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="rounded-2xl border border-primary/20 bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground shadow-inner">
                <p className="font-medium text-foreground">Need a direct line?</p>
                <div className="mt-3 space-y-2">
                  <a
                    className="flex items-center gap-2 hover:text-foreground"
                    href="mailto:fitzpatrick_marketing@outlook.com"
                  >
                    <Mail className="h-4 w-4" />
                    fitzpatrick_marketing@outlook.com
                  </a>
                  <a
                    className="flex items-center gap-2 hover:text-foreground"
                    href="tel:+353832038680"
                  >
                    <Phone className="h-4 w-4" />
                    +353 83 203 8680
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="border border-border/70 shadow-lg shadow-primary/5">
            <CardHeader className="space-y-1">
              <CardTitle>Tell us about your project</CardTitle>
              <CardDescription>
                We use this information to map the right team and next steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formValues.company}
                      onChange={handleChange}
                      placeholder="Fitzpatrick Marketing"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder="+353 83 203 8680"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="website">Website or social links</Label>
                  <Input
                    id="website"
                    name="website"
                    value={formValues.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com, @yourhandle"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget range</Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formValues.budget}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>
                      Select your range
                    </option>
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message / goals</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Tell us where you need the biggest lift and any deadlines we should know about."
                    rows={5}
                    required
                  />
                </div>

                <CardFooter className="flex flex-col items-start gap-3 px-0">
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground shadow hover:bg-primary/90"
                  >
                    Submit your enquiry
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By submitting this form you agree to be contacted regarding
                    your enquiry. We will never share your details.
                  </p>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
