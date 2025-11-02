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
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Proof</h2>

      {/* Portfolio (cases) */}
      <div className="grid gap-6 md:grid-cols-3">
        <CaseCard client="Acme"  title="Website refresh"  tags={["Web","Brand"]}    metrics={["CVR +15%","CPL −22%"]} />
        <CaseCard client="Delta" title="Lead gen revamp" tags={["Lead Gen"]}       metrics={["ROAS 3.2×","Leads +72"]} />
        <CaseCard client="Zeta"  title="New brand + site" tags={["Brand","Web"]}   metrics={["Bounce −18%"]} />
      </div>

      <div className="my-10" />

      {/* Testimonials */}
      <div className="grid gap-6 md:grid-cols-3">
        <Testimonial name="Jane O."  role="CMO @ Acme"     quote="Leads up 38% in 6 weeks." />
        <Testimonial name="Brian K." role="Founder @ Delta" quote="Clear plan, fast execution." />
        <Testimonial name="Sarah M." role="Marketing @ Zeta" quote="CPA down 22%." />
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

