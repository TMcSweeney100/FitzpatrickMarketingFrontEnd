import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const onSubscribe = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    console.log("Subscribe:", email);
    // TODO: POST to your Spring Boot endpoint when ready
  };

  return (
    <footer className="border-t bg-background text-foreground">
      <section className="container mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          {/* Brand */}
          <div className="max-w-md">
            <div className="text-2xl font-bold tracking-tight">Fitzpatrick<span className="text-muted-foreground"> Marketing</span></div>
            <p className="text-sm mt-2 text-muted-foreground">
              Simple, effective marketing for SMEs. Clear offers, clean design, measurable results.
            </p>
          </div>

            <div className="space-y-2 text-sm md:text-right md:items-end">
              <a href="mailto:hello@friendco.marketing" className="flex items-center gap-2 hover:underline">
                <Mail className="h-4 w-4" /> fitzpatrick_marketing@outlook.com
              </a>
              <a href="tel:+3530000000" className="flex items-center gap-2 hover:underline">
                <Phone className="h-4 w-4" color="blue" /> (083) 203 8680
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4" color="red" /> Limerick, Ireland
              </p>
            </div>

        </div>

        <Separator className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
          <p >© {new Date().getFullYear()} Fitzpatrick Marketing. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:underline" href="#privacy">Privacy</a>
            <a className="hover:underline" href="#terms">Terms</a>
            <div className="ml-2 flex items-center gap-2">
              <a aria-label="Facebook" href="#" className="rounded p-1 hover:bg-muted">
                <Facebook className="h-5 w-5" />
              </a>
              <a aria-label="Instagram" href="#" className="rounded p-1 hover:bg-muted">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="rounded p-1 hover:bg-muted">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="GitHub" href="#" className="rounded p-1 hover:bg-muted">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
