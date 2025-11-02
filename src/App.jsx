import { useState } from 'react'

import Header from "./components/header/Header.jsx";
import ContactForm from "./components/contact/contactForm.jsx";
import Footer from "./components/contact/footer.jsx";
import CaseCard from "@/components/proof/CaseCard";
import Services from './components/what/Services.jsx';
import Testimonial from "@/components/proof/Testimonial";
import "./App.css";

function App() {
return (
<>
<Header />
<main>
<section id="what" className="container mx-auto max-w-6xl px-4 py-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">What we do</h2>
<Services/>
</section>

    <section id="proof" className="container mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Portfolio</h2>

      {/* Portfolio (cases) */}
      <div className="grid gap-6 md:grid-cols-3">
        <CaseCard client="Acme"  title="Website refresh"  tags={["Web","Brand"]}    metrics={["CVR +15%","CPL −22%"]} />
        <CaseCard client="Delta" title="Lead gen revamp" tags={["Lead Gen"]}       metrics={["ROAS 3.2×","Leads +72"]} />
        <CaseCard client="Zeta"  title="New brand + site" tags={["Brand","Web"]}   metrics={["Bounce −18%"]} />
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
</>
);
}

export default App;

