import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 text-foreground">
      <section className="container mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr,1fr,auto]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Fitzpatrick Marketing
            </p>
            <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
              Affordable, modern marketing built around your goals.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              From social to search, we plug into your business and keep the
              momentum going. Ready when you are? Email{" "}
              <a
                className="font-medium text-foreground underline underline-offset-4"
                href="mailto:fitzpatrick_marketing@outlook.com"
              >
                fitzpatrick_marketing@outlook.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <h4 className="text-base font-semibold tracking-tight text-foreground">
              Visit or call
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <a
                href="mailto:fitzpatrick_marketing@outlook.com"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                fitzpatrick_marketing@outlook.com
              </a>
              <a
                href="tel:+353832038680"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +353 83 203 8680
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>Limerick, Ireland</span>
              </span>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <h4 className="text-base font-semibold tracking-tight text-foreground">
              Stay connected
            </h4>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a
                aria-label="Facebook"
                href="#"
                className="rounded-full border border-border p-2 transition hover:bg-background hover:text-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="rounded-full border border-border p-2 transition hover:bg-background hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="rounded-full border border-border p-2 transition hover:bg-background hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                aria-label="GitHub"
                href="#"
                className="rounded-full border border-border p-2 transition hover:bg-background hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            (c) {year} Fitzpatrick Marketing. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-foreground" href="#services">
              Services
            </a>
            <a className="hover:text-foreground" href="#clients">
              Clients
            </a>
            <a className="hover:text-foreground" href="#contact">
              Contact
            </a>
            <a className="hover:text-foreground" href="#privacy">
              Privacy
            </a>
            <a className="hover:text-foreground" href="#terms">
              Terms
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
