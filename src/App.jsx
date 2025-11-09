import Header from "./components/header/Header.jsx";
import ContactForm from "./components/contact/contactForm.jsx";
import Footer from "./components/contact/footer.jsx";
import CaseCard from "@/components/proof/CaseCard";
import Services from "./components/what/Services.jsx";
import Testimonial from "@/components/proof/Testimonial";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { Toaster } from "@/components/ui/sonner";
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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Hover to look closer
        </p>
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
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
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
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Services</h2>
<p className="mt-3 text-base text-muted-foreground">
AFFORDABLE services, tailored to your business needs.
</p>
<div className="mt-8">
<Services/>
</div>
</section>

    <section id="proof" className="container mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Portfolio</h2>

      {/* Portfolio (cases) */}
      <div className="grid gap-6 md:grid-cols-3">
        <CaseCard client="Pizza Planet 2"  title="Website refresh"  tags={["Web","Brand"]}    metrics={["CVR +15%","CPL −22%"]} />
        <CaseCard client="Daffy Car Sales" title="Social Media Revamp" tags={["Social Media"]}       metrics={["ROAS 3.2×","Leads +72"]} />
        <CaseCard client="Basecamp Adventure Park"  title="New Website" tags={["Brand","Web"]}   metrics={["Bounce −18%"]} />
      </div>

      <div className="my-10" />

      {/* Testimonials */}
      <div className="grid gap-6 md:grid-cols-3">
        <Testimonial name="Shah Safi"  role="Manager"     quote="Working with Fitzpatrick Marketing gave us the consistency and professional touch we’d been missing. From content design to scheduling, everything was handled with direction and purpose. Our social media now reflects our brand, and the results have gone beyond what we expected from the original free value proposition." />
        <Testimonial name="Michael Daffy" role="Owner" quote="We had tried posting and managing  in-house but lacked a clear strategy. Fitzpatrick Marketing brought design capability, structure, and a level of professionalism that made a huge difference. The campaigns delivered not only met the promises in the value proposition but exceeded them, giving our dealership a much stronger presence online and helping kickstart our sales." />
        <Testimonial name="Wayne Slattery" role="Owner" quote="Consistency was our biggest challenge - we knew the park had potential but struggled to showcase it properly. Fitzpatrick Marketing provided direction, creative design, and a reliable posting schedule that told our story. They delivered on every detail of the value proposition and added even more value along the way. The difference has been massive, as well as the ease of working with them." />
      </div>
    </section>

    <section id="contact" className="container mx-auto max-w-6xl px-4 py-16">
      <ContactForm />
    </section>
  </main>
  <Footer />
  <Toaster position="top-center" />
</>
);
}

export default App;

