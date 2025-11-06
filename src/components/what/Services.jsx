import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Share2,
  Camera,
  Target,
  Search,
  Mail,
  LineChart,
  MonitorSmartphone,
} from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: Share2,
      title: "Social Media Management",
      outcome:
        "Build a consistent, creative brand presence that connects every week.",
      bullets: [
        "Content strategy and campaign planning",
        "Creative design for posts, reels, and stories",
        "Scheduling, engagement, and performance reporting",
      ],
      tag: "Social",
    },
    {
      icon: Camera,
      title: "Content Creation",
      outcome:
        "High-quality visuals and storytelling that attract and retain customers.",
      bullets: [
        "On-site sessions to capture your brand",
        "Photography, video, and short-form reels",
        "Story-driven content tailored to your audience",
      ],
      tag: "Content",
    },
    {
      icon: Target,
      title: "Meta Ads",
      outcome: "Add-on support that amplifies your organic social reach.",
      bullets: [
        "Local audience discovery and targeting",
        "Campaigns for awareness, leads, and sales",
        "Performance tracking with clear reporting",
      ],
      tag: "Ads",
    },
    {
      icon: Search,
      title: "Google Ads",
      outcome:
        "Data-driven search and display campaigns that convert clicks into leads.",
      bullets: [
        "Search and display ad management",
        "Local business targeting and optimisation",
        "Conversion tracking with regular insights",
      ],
      tag: "Ads",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      outcome:
        "Keep customers engaged with personalised campaigns that deliver results.",
      bullets: [
        "Campaign setup and automation journeys",
        "Customer segmentation and list growth",
        "Performance tracking with action steps",
      ],
      tag: "Email",
    },
    {
      icon: LineChart,
      title: "SEO",
      outcome:
        "Improve visibility, traffic, and credibility with search optimisation.",
      bullets: [
        "Keyword research and on-page optimisation",
        "Google Business Profile enhancements",
        "Monthly reporting with growth recommendations",
      ],
      tag: "SEO",
    },
    {
      icon: MonitorSmartphone,
      title: "Web Design",
      outcome:
        "Modern, conversion-focused websites designed to grow your business.",
      bullets: [
        "Custom websites tailored to your brand",
        "Campaign landing pages that convert",
        "Integrated tracking with Pixel and GA4",
      ],
      tag: "Web",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((it, idx) => (
        <ServiceCard key={idx} {...it} />
      ))}
    </div>
  );
}
