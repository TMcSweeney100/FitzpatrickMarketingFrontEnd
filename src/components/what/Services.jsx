import React from "react";
import ServiceCard from "./ServiceCard";
import { Megaphone, MonitorSmartphone, Layers } from "lucide-react";


export default function Services() {
const items = [
                {
                icon: MonitorSmartphone,
                title: "Websites that convert",
                outcome: "Clarity, speed, mobile-first",
                bullets: ["Clear structure and copy", "Fast loads, SEO basics", "Analytics + goals wired"],
                tag: "Web",
                },
                {
                icon: Megaphone,
                title: "Lead gen campaigns",
                outcome: "Lower CPL, more qualified leads",
                bullets: ["Offer + landing optimization", "Ad creative + testing", "Tracking + reporting"],
                tag: "Ads",
                },
                {
                icon: Layers,
                title: "Brand & messaging",
                outcome: "Positioning that resonates",
                bullets: ["Message hierarchy", "Visual polish", "Practical brand kit"],
                tag: "Brand",
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