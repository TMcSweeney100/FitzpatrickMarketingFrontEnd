import React from "react";
import ServiceCard from "./ServiceCard";
import { Megaphone, MonitorSmartphone, Layers } from "lucide-react";


export default function Services() {
const items = [
                {
                icon: MonitorSmartphone,
                title: "Email Marketing",
                outcome: "Clarity, speed, mobile-first",
                bullets: ["Clear structure and copy", "Fast loads, SEO basics", "Analytics + goals wired"],
                tag: "Email",
                },
                {
                icon: Megaphone,
                title: "Google and Meta Ads",
                outcome: "Always on acuisiton that pays for itself",
                bullets: ["Creative + custom built for each platform", "Clear Reporting On Spend Vs Revenue"],
                tag: "Ads",
                },
                {
                icon: Layers,
                title: "Social Managment",
                outcome: "Your Socials Handled End To End",
                bullets: ["Community Engagement + DM triage", "Monthly Reports with Actionable Next Steps", "Practical brand kit"],
                tag: "Social Media",
                },  
                ];                                                                                  

    return (
        <div className="grid gap-6 md:grid-cols-3">
            {items.map((it, idx) => (
            <ServiceCard key={idx} {...it} />
               ))}
        </div>
        );
        }