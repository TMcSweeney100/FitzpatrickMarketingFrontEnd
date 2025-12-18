import { useState } from "react";
import Header from "./components/header/Header.jsx";
import ContactForm from "./components/contact/contactForm.jsx";
import Footer from "./components/contact/footer.jsx";
import CaseCard from "@/components/proof/CaseCard";
import Services from "./components/what/Services.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./App.css";

import daffyLogo from "./logos/daffy.png"
import baseLogo from "./logos/basecamp.png"

const hoverHighlights = [
  {
    title: "Cost effective retainers",
    description:
      "Transparent scope, no bloated fees, and quick momentum in the first 30 days.",
  },
  {
    title: "Tailored playbooks",
    description:
      "Every deliverable is customised to your brand tone, goals, and audience behaviour.",
  },
  {
    title: "Strategic reporting",
    description:
      "We connect creative output with numbers that matter so you always know next steps.",
  },
];

const campaignSteps = [
  {
    title: "Discovery & Planning",
    description:
      "We align on your goal, audience, timing, and the win condition for the campaign window.",
  },
  {
    title: "Strategy & Setup",
    description:
      "You receive a clear roadmap covering channels, creative direction, deliverables, and approvals.",
  },
  {
    title: "Execution",
    description:
      "Content, paid media, engagement, and optimisation handled daily by our team during the run.",
  },
  {
    title: "Reporting & Review",
    description:
      "Receive a concise performance recap with insights, learnings, and next-step recommendations.",
  },
];

const campaignPackages = [
  {
    tag: "Kickstart",
    title: "1-Month Kickstart Campaign",
    summary: "Audit + strategy + first month of content",
    detail: "Perfect for new or rebranding businesses that need momentum fast.",
    duration: "4 weeks",
  },
  {
    tag: "Growth",
    title: "3-Month Growth Campaign",
    summary: "Full funnel: social, ads, email, and SEO push",
    detail: "Includes monthly performance reviews and optimisations.",
    duration: "12 weeks",
  },
  {
    tag: "Launch",
    title: "Custom Launch Campaign",
    summary: "Tailored build for store, event, or product launches",
    detail: "Creative direction, ad management, and reporting baked in.",
    duration: "Flexible",
  },
];

const storySlides = [
  {
    heading: "Why start another agency?",
    body: [
      "When I started this business the goal was simple: help owners get real results from marketing without the bloated retainers. There are countless agencies willing to take your budget, but very few that meet you where you are.",
      "I wanted to build something that felt practical, human, and within reach for businesses that knew marketing mattered but did not know where to start.",
    ],
  },
  {
    heading: "Cost effective marketing with heart",
    body: [
      "We focused on Cost effective solutions for small local businesses, connecting them with their customers through social media, ad campaigns, and clear strategy.",
      "The aim was to craft systems they could eventually sustain on their own, making them more digitally literate and confident in every tool we introduced.",
    ],
  },
  {
    heading: "Born from clients' frustrations",
    body: [
      "As promises turned into results, we heard the same story: previous partners offered little care, attention, or measurable wins.",
      "Fitzpatrick Marketing grew out of that gap. Today, with a compact team of specialists, we keep delivering for businesses big and small—staying true to the mission of providing Cost effective marketing tailored to YOU.",
    ],
  },
];

const clientStories = [
  {
    client: "Basecamp Adventure Park",
    title: "Case Study 1",
    logo: baseLogo,
    tags: ["Outdoor experiences", "Web + Social", "Training"],
    summary:
      "Outdoor paintball arena in Shanagolden. A structured digital reset across web, UX, content, and training lifted bookings by ~50% with 1200% ROAS in six weeks.",
    quote:
      "The new website and a more put together approach to our socials made a real difference to our bookings. The training meant even more, our team can continue to develop it in-house long-term, I couldn't recommend Fitpatrick Marketing enough.",
    person: "Eoin Tucker",
    role: "Operations Manager",
    sections: [
      {
        heading: "Business Background",
        paragraphs: [
          "Basecamp Adventure Park is an outdoor paintball arena business based in Shanagolden, Co. Limerick. It serves families, schools, and general group bookings of many types.",
          "The business operates all year round and has 20+ years serving customers from all over Limerick, Cork, North Kerry, Tipperary and beyond. It is one of Limericks few experiential based",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "The business had experienced a prolonged period of limited and unstructured digital activity during a phase of significant internal change and brand development. The existing website no longer reflected the current offering, social media activity lacked strategic direction, and marketing spend was being applied to organic and paid activity without a defined plan or measurable objectives. As a result, digital channels were underperforming in supporting bookings and informing customer base.",
        ],
      },
      {
        heading: "The Strategy",
        paragraphs: [
          "We delivered a structured, project-based digital reset focused on establishing strong digital foundations, improving user experience, and enabling more effective use of organic and paid social media.",
          "The strategy prioritised:",
        ],
        bullets: [
          "Website and UX redevelopment aligned with the customer booking journey",
          "Mobile-first optimisation",
          "Structured content planning",
          "Creation of reusable creative assets",
          "Knowledge transfer to the in-house team",
        ],
      },
      {
        heading: "Services Provided",
        bullets: [
          "Website redesign and content update",
          "UX and mobile experience optimisation",
          "Google Business Profile setup and optimisation",
          "Social media content calendar development",
          "On-site content shoots and creative asset development",
          "Paid social media campaign structure and setup",
          "Social media and paid advertising training for in-house staff",
          "UX coaching focused on enquiry and booking pathways",
        ],
      },
      {
        heading: "The Results (6-week period)",
        bullets: [
          "Approx. 50% increase in bookings compared to the previous six-week period",
          "Significant uplift in online engagement across social media channels",
          "Measurable growth in social media followers and reach",
          "Paid ad campaigns delivering 1200% ROAS.",
          "Improved user experience, particularly on mobile devices",
          "Clear, repeatable content and advertising framework established for future seasons",
        ],
      },
    ],
  },
  {
    client: "Daffy's Bar",
    title: "Case Study 2",
    logo: daffyLogo,
    tags: ["Hospitality", "Social strategy", "Community"],
    summary:
      "Local bar in Croom rebuilt its digital presence, consolidated accounts, launched TikTok, and grew 300+ organic followers per platform in six weeks with staff training.",
    quote:
      "He helped us rebuild our Facebook and other accounts fast. The plan and training helped us take over with confidence when it all finished, and the community response was very positive the difference in the bar and customers is like night and day.",
    person: "Michael Daffy",
    role: "Owner",
    sections: [
      {
        heading: "Background on the Business",
        paragraphs: [
          "Daffy's Bar is a local hospitality business operating in Croom, Co. Limerick. Hospitality as a highly competitive, footfall-driven market - social media plays a key role in awareness, promotions, and customer engagement.",
          "Having taken over form previous ownership who neglected the establishment and damaged its local reputation works were being undertaken to improve the interior and expand with a new beer garden.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "The business was experiencing challenges across its digital presence, including multiple unmanaged social media accounts, brand inconsistency, and reputational impact following changes to the premises. At the same time, the bar needed to effectively promote its newly refurbished interior and exterior to both existing and new customers.",
          "There was a clear requirement for strategic intervention rather than ad-hoc posting.",
        ],
      },
      {
        heading: "The Strategy",
        paragraphs: [
          "Fitzpatrick Marketing engaged at a strategic level to stabilise and rebuild the bar's digital presence. The approach focused on consolidation, consistency, and community engagement, with an emphasis on organic growth and internal capability building.",
          "The strategy included:",
        ],
        bullets: [
          "Consolidation and recovery of existing social media accounts",
          "Expansion of digital touchpoints through the introduction of TikTok",
          "Development of a structured content calendar",
          "A community-first content and engagement approach",
          "Training of in-house staff to ensure sustainability",
        ],
      },
      {
        heading: "Services Provided",
        bullets: [
          "Social media audit and account consolidation (Meta platforms)",
          "TikTok account setup and content guidance",
          "Social media content calendar development",
          "Organic content planning and execution support",
          "One-to-one social media training for in-house staff",
          "Community engagement strategy guidance",
        ],
      },
      {
        heading: "The Results (6-week period)",
        bullets: [
          "Successful recovery and consolidation of all primary social media accounts",
          "Establishment of active Facebook, Instagram, and TikTok channels",
          "Organic audience growth of 300+ relevant followers per platform from a standing start with no paid budget.",
          "Increased engagement on community- and event-led content",
          "Improved brand consistency and positive audience response following refurbishment",
          "In-house team fully enabled to manage ongoing social media activity independently",
          "Content pillars established in clear reporting and guidance document.",
        ],
      },
    ],
  },
  {
    client: "West Lake Aqua Park",
    title: "Case Study 3",
    tags: ["Seasonal", "Omni-channel", "Paid media"],
    summary:
      "Seasonal outdoor waterpark in Killaloe. Omni-channel seasonal campaign planning, creative coordination, and paid strategy delivered ~47% sales lift year-over-year.",
    quote:
      "Working with Finn this year made a huge difference to the season. Campaigns were joined up, creatives were fresh, and reactivity to our needs were really felt. It was a hands on approach and what we have learned for next season will be invaluable.:",
    person: "Wayne Slattery",
    role: "Owner",
    sections: [
      {
        heading: "Background on the Business",
        paragraphs: [
          "West Lake Aqua Park is a seasonal outdoor waterpark catering to families, groups, and tourists in Killaloe, Co. Clare. It has been operating since 2019 and is located on Lough Derg just outside Killaloe Co. Clare.",
          "It plays a vital role for the local community in attracting people to the town each Summer. The park also provides employment through staffing of a team of lifeguards and land staff each season.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "The business faced a challenging season due to a weather dependency from narrow digital positioning in previous years, despite the use of a large third-party agency and in-house content resources. Marketing activity lacked an integrated, multi-channel approach and was not fully aligned with the commercial realities of a short, high-risk trading season.",
          "There was a clear need for more agile, coordinated, and outcome-focused marketing delivery.",
        ],
      },
      {
        heading: "The Strategy",
        paragraphs: [
          "Fitzpatrick Marketing was engaged in a hands-on consulting capacity to provide strategic oversight and coordination of marketing activity across the season.",
          "The strategy focused on:",
        ],
        bullets: [
          "Establishing a structured content and campaign calendar",
          "Developing an omni-channel marketing approach",
          "Coordinating creative development and campaign execution",
          "Adapting activity in response to weather and performance data",
        ],
        note: "Key seasonal campaigns included early-season activity, mid-season optimisation, and a final \"end-of-season\" promotional push.",
      },
      {
        heading: "Services Provided",
        bullets: [
          "Strategic marketing consultancy (seasonal engagement)",
          "Social media content calendar development",
          "On-site content development and creative direction",
          "Meta (Facebook & Instagram) advertising strategy and management",
          "Google Ads strategy and management",
          "Coordination of radio and print advertising activity",
          "Campaign planning and cross-channel delivery coordination",
          "Performance monitoring and optimisation guidance",
        ],
      },
      {
        heading: "The Results (Seasonal Outcome)",
        bullets: [
          "Approx. 47% increase in overall sales compared to the previous season",
          "Improved performance efficiency across paid digital channels",
          "Increase in return on ad spend (ROAS) across Meta and Google campaigns",
          "Stronger brand visibility across digital and traditional channels",
          "More consistent and coordinated marketing execution throughout the season",
          "Clear reporting and road map for future seasons.",
          "Creative structure and content pillars established.",
        ],
        note: "(While Performance outcomes were in some way influenced by external factors including weather conditions and seasonal demand, we put the park in a position to maximise sales this though our efforts)",
      },
    ],
  },
];

function App() {
 return (
<>
<Header />
<main>
<section className="border-b bg-muted/20">
  <div className="container mx-auto max-w-6xl px-4 py-12 grid gap-6 lg:grid-cols-[1fr,1.1fr]">
    <Card className="border border-border/70 shadow-md shadow-primary/10">
      <CardHeader className="space-y-4">
        <Badge
          variant="secondary"
          className="w-fit rounded-full px-4 py-1 text-[0.7rem] uppercase tracking-widest"
        >
          Mission
        </Badge>
        <CardTitle className="text-3xl leading-tight md:text-4xl">
          Cost effective, strategic marketing for brands that expect progress every week.
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          Built for owners who want clarity, collaboration, and measurable lift.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
       
        <div className="flex flex-wrap gap-3">
          {hoverHighlights.map((item) => (
            <HoverCard key={item.title} openDelay={80}>
              <HoverCardTrigger asChild>
                <Badge
                  variant="outline"
                  className="cursor-pointer rounded-full border-border/70 px-4 py-2 text-sm font-medium"
                >
                  {item.title}
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent align="start" className="w-72">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-2 text-sm">{item.description}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </CardContent>
    </Card>
    <Card className="relative border border-primary/30 bg-gradient-to-br from-background via-background to-primary/10 shadow-lg shadow-primary/15">
      <CardHeader>
        <Badge
          variant="outline"
          className="w-fit rounded-full border-primary/30 px-4 py-1 text-primary"
        >
          Our promise
        </Badge>
        <CardTitle className="text-2xl">Strategic, modern, and sustainable.</CardTitle>
        <CardDescription>
          Explore the details when you are ready - collapse or expand any section.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="mission">
          <AccordionItem value="mission">
            <AccordionTrigger>Mission statement</AccordionTrigger>
            <AccordionContent>
              <p>
                At Fitzpatrick Marketing our goal is to provide{" "}
                <span className="font-semibold text-foreground">Cost effective tailored marketing solutions</span> to
                businesses big and small. We develop and elevate your brand while driving sales through a
                strategic approach that stands out from the rest.
              </p>
              <p className="mt-4">
                Our expertise ensures you benefit from the most up to date practices in digital marketing.
                Just as importantly, we understand marketing strategy at its core, delivering long-term,
                sustainable success for <span className="font-semibold text-foreground">your business</span>.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="approach">
            <AccordionTrigger>How we execute</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-2 pl-5">
                <li>Discovery sprint to define goals, channels, and KPIs.</li>
                <li>Content, ads, and web working as a single system.</li>
                <li>Weekly checkpoints with action items you can see.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="promise">
            <AccordionTrigger>Partnership commitments</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-2 pl-5">
                <li>Radical transparency on budget, performance, and timelines.</li>
                <li>Responsive communication - usually within the same business day.</li>
                <li>Always-on optimisation so progress does not stall between meetings.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  </div>
</section>

<section id="services" className="container mx-auto max-w-6xl px-4 py-16">
  <h2>Services</h2>
  <p className="mt-3">
    Cost effective services, tailored to your business needs.
  </p>
  <div className="mt-8">
    <Services />
  </div>
</section>

<section id="campaigns" className="bg-muted/10">
  <div className="container mx-auto max-w-6xl px-4 py-16 space-y-10">
    <div className="space-y-4">
      <Badge
        variant="secondary"
        className="w-fit rounded-full px-4 py-1 text-[0.7rem] uppercase tracking-widest"
      >
        Campaigns
      </Badge>
      <h2>
        Focused marketing pushes with a clear beginning, middle, and end.
      </h2>
      <p className="md:max-w-3xl">
        Campaign packages are designed for launches, openings, and key seasons. Each runs for a defined 4-12
        week window covering strategy, content, ads, and reporting so you get a burst of visibility and sales
        momentum without committing to a long-term retainer.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
      <Card className="h-full border border-border/70 shadow-md shadow-primary/5">
        <CardHeader className="space-y-2">
          <CardTitle>Your campaign, handled end-to-end.</CardTitle>
          <CardDescription>
            Whatever the objective, we keep every moving part aligned and on schedule.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <p>
            Expect a dedicated team syncing daily on creative, publishing, ads, and engagement while you focus on
            running the business. Every deliverable, approval, and performance snapshot is centralised so it feels
            effortless on your side.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="mt-0.5 text-base">-</span>
              <span>Strategy-first planning session to nail the win condition.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-base">-</span>
              <span>Content, ads, and social touchpoints coordinated across platforms.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-base">-</span>
              <span>Performance insights and recommendations at wrap-up.</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border border-primary/30 bg-background shadow-lg shadow-primary/10">
        <CardHeader>
          <CardTitle>How it works</CardTitle>
          <CardDescription>Four phases you can follow at a glance.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="step-0">
            {campaignSteps.map((step, index) => (
              <AccordionItem key={step.title} value={`step-${index}`}>
                <AccordionTrigger>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Step {index + 1}
                    </span>
                    <span>{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{step.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <h3>Campaign packages</h3>
          <p>
            Pick a preset or brief us on a custom sprint - either way you get a focused marketing push tailored to
            your timeline.
          </p>
        </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {campaignPackages.map((pkg) => (
          <Card
            key={pkg.title}
            className="flex h-full flex-col border border-border/80 bg-card/90 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-widest">
                  {pkg.tag}
                </Badge>
                <CardTitle className="text-xl">{pkg.title}</CardTitle>
              </div>
              <CardDescription>{pkg.summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 text-sm text-muted-foreground">
              <p>{pkg.detail}</p>
              <Badge variant="outline" className="w-fit rounded-full border-primary/40 text-xs">
                {pkg.duration}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>

<section id="about" className="container mx-auto max-w-6xl px-4 py-16">
  <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
    <div className="space-y-5">
      <Badge
        variant="secondary"
        className="w-fit rounded-full px-4 py-1 text-[0.7rem] uppercase tracking-widest"
      >
        About us
      </Badge>
      <h2>
        Our story is rooted in making modern marketing feel within reach.
      </h2>
      <p>
        Fitzpatrick Marketing was born from a desire to give business owners the kind of partnership we
        wished existed for ourselves: practical, transparent, and obsessed with outcomes. Hover through the
        chapters to see how we got here.
      </p>
    </div>

    <Card className="border border-border/60 shadow-md shadow-primary/10">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Our story
          </p>
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs uppercase tracking-widest">
            Fitzpatrick Marketing
          </Badge>
        </div>
        <CardTitle className="text-2xl">Click through the chapters.</CardTitle>
        <CardDescription>
          Use the carousel to read the moments that shaped the agency.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel className="relative">
          <CarouselContent>
            {storySlides.map((story) => (
              <CarouselItem key={story.heading}>
                <div className="space-y-4">
                  <h3>{story.heading}</h3>
                  {story.body.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-20 left-10 right-10 flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </CardContent>
      <CardFooter className="border-t border-border/60 py-6">
        <div className="flex w-full items-center justify-center gap-2">
          {storySlides.map((story, idx) => (
            <span key={story.heading} className="h-2 w-8 rounded-full bg-muted" />
          ))}
        </div>
      </CardFooter>
    </Card>
  </div>
</section>

    <section id="clients" className="container mx-auto max-w-6xl px-4 py-16 space-y-8">
      <div className="space-y-4">
        <Badge
          variant="secondary"
          className="w-fit rounded-full px-4 py-1 text-[0.7rem] uppercase tracking-widest"
        >
          Case Studies
        </Badge>
        <h2>
          Stories from the brands we champion.
        </h2>
        <p className="md:max-w-3xl">
          Each engagement starts with a clear goal and ends with measurable results. Click any client to read their
          testimonial and see how we collaborated.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clientStories.map((story) => (
          <CaseCard key={story.client} {...story} />
        ))}
      </div>
    </section>

    <section id="contact" className="container mx-auto max-w-6xl px-4 py-16">
      <ContactForm />
    </section>
  </main>
  <Footer />
</>
);
}

export default App;
