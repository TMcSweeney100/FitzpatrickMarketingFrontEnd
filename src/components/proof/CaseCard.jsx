import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star } from "lucide-react";

function CaseCard({ title, client, tags = [], summary, logo, quote, person, role, sections = [] }) {
  const logoLabel = client?.charAt(0) ?? "?";
  const stars = Array.from({ length: 5 });

  return (
    <Card className="flex h-full flex-col border border-border/70 shadow-sm transition hover:border-primary/40">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-muted text-base font-semibold text-muted-foreground">
            {logo ? (
              <img
                src={logo}
                alt={`${client} logo`}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            ) : (
              <span>{logoLabel}</span>
            )}
          </div>
          <div>
            <CardTitle className="text-lg">{client}</CardTitle>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-amber-500">
          {stars.map((_, idx) => (
            <Star key={idx} className="h-4 w-4 fill-current" strokeWidth={1.25} />
          ))}
        </div>
        {tags.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardHeader>
      <CardContent className="flex-1 text-sm text-muted-foreground">{summary}</CardContent>
      {quote ? (
        <CardFooter className="border-t border-border/70 bg-muted/30">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full border border-primary/40 bg-primary/90 text-primary-foreground shadow-sm transition hover:bg-primary">
                View case study
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[85vh] space-y-6 overflow-hidden border-2 border-primary/70 bg-card/95 p-8 shadow-2xl shadow-primary/30 sm:rounded-2xl">
              <DialogHeader className="space-y-1">
                <DialogTitle className="text-2xl">{client}</DialogTitle>
                {title ? <DialogDescription className="text-base text-muted-foreground">{title}</DialogDescription> : null}
                {person || role ? (
                  <DialogDescription className="text-base text-muted-foreground">
                    {[person, role].filter(Boolean).join(" | ")}
                  </DialogDescription>
                ) : null}
              </DialogHeader>
              <div className="max-h-[60vh] space-y-4 overflow-y-auto pr-1 text-base leading-relaxed text-foreground">
                {sections.length ? (
                  <div className="space-y-4">
                    {sections.map((section) => (
                      <div
                        key={section.heading}
                        className="space-y-2 rounded-xl border border-border/60 bg-muted/15 p-4"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                          {section.heading}
                        </p>
                        {section.paragraphs?.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                        {section.bullets?.length ? (
                          <ul className="list-disc space-y-1 pl-5">
                            {section.bullets.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                        {section.note ? <p className="text-sm text-muted-foreground">{section.note}</p> : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{quote || summary}</p>
                )}

                {quote ? (
                  <div className="rounded-2xl border border-primary/60 bg-primary/5 p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">From the client</p>
                    <p className="mt-3 text-lg leading-relaxed">{quote}</p>
                  </div>
                ) : null}
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      ) : null}
    </Card>
  );
}

export default CaseCard;
