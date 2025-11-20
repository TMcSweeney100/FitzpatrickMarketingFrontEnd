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

const hoverHighlights = [
  {
    title: "Affordable retainers",
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
    heading: "Affordable marketing with heart",
    body: [
      "We focused on AFFORDABLE solutions for small local businesses, connecting them with their customers through social media, ad campaigns, and clear strategy.",
      "The aim was to craft systems they could eventually sustain on their own, making them more digitally literate and confident in every tool we introduced.",
    ],
  },
  {
    heading: "Born from clients' frustrations",
    body: [
      "As promises turned into results, we heard the same story: previous partners offered little care, attention, or measurable wins.",
      "Fitzpatrick Marketing grew out of that gap. Today, with a compact team of specialists, we keep delivering for businesses big and small—staying true to the mission of providing AFFORDABLE marketing tailored to YOU.",
    ],
  },
];

const clientStories = [
  {
    client: "Pizza Planet 2",
    title: "Website refresh",
    tags: ["Web", "Brand"],
    summary:
      "Rebuilt their ordering experience with a sharp brand system and conversion-focused landing flows.",
    quote:
      "Working with Fitzpatrick Marketing gave us the consistency and professional touch we had been missing. Everything was handled with direction and purpose, and the results went beyond what we expected.",
    person: "Shah Safi",
    role: "Manager",
  },
  {
    client: "Daffy Car Sales",
    title: "Social media revamp",
    tags: ["Social Media", "Ads"],
    summary:
      "Designed a cohesive content engine plus paid amplification to keep the dealership top of feed.",
    quote:
      "We had tried posting in-house but lacked structure. Fitzpatrick Marketing brought design, strategy, and professionalism that made a huge difference. Campaigns exceeded promises and strengthened our presence.",
    person: "Michael Daffy",
    role: "Owner",
  },
  {
    client: "Basecamp Adventure Park",
    title: "New website and launch",
    tags: ["Brand", "Web"],
    summary:
      "Captured the park story through new visuals, site architecture, and seasonal activation campaigns.",
    quote:
      "Consistency was our biggest challenge. Fitzpatrick Marketing provided direction, creative design, and a reliable schedule that told our story. They delivered on every detail and added more value along the way.",
    person: "Wayne Slattery",
    role: "Owner",
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
          Affordable, strategic marketing for brands that expect progress every week.
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
                <span className="font-semibold text-foreground">AFFORDABLE tailored marketing solutions</span> to
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
    AFFORDABLE services, tailored to your business needs.
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
          Clients & testimonials
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

