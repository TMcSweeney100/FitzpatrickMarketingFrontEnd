import React from "react";
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";


export default function ServiceCard({
  icon: Icon,
  title,
  outcome,
  bullets = [],
  tag,
  ctaHref = "#contact",
  ctaLabel = "Start a project",
}) {
  return (
    <Card className="flex h-full flex-col border border-transparent bg-gradient-to-br from-primary/10 via-background to-background shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <CardHeader className="space-y-4 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {outcome ? (
              <CardDescription className="mt-1 leading-relaxed">
                {outcome}
              </CardDescription>
            ) : null}
          </div>
          {Icon ? (
            <div className="rounded-xl bg-primary/10 p-2 text-primary">
              <Icon className="h-5 w-5" />
            </div>
          ) : null}
        </div>
        {tag ? (
          <div>
            <Badge
              variant="secondary"
              className="rounded-full bg-muted text-xs font-medium uppercase tracking-wide"
            >
              {tag}
            </Badge>
          </div>
        ) : null}
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <ul className="space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {b}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="secondary" className="w-full">
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
