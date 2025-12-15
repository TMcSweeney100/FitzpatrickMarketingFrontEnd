import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function CaseCard({ title, client, tags = [], summary, logo, quote, person, role }) {
  const logoLabel = client?.charAt(0) ?? "?";

  return (
    <Card className="flex h-full flex-col border border-border/70 shadow-sm transition hover:border-primary/40">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-base font-semibold text-muted-foreground overflow-hidden">
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
                View testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl space-y-6 border-2 border-primary/70 bg-card/95 p-8 shadow-2xl shadow-primary/30 sm:rounded-2xl">
              <DialogHeader className="space-y-1">
                <DialogTitle className="text-2xl">{client}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">{title}</DialogDescription>
                 <DialogDescription className="text-base text-muted-foreground">{person} {role}</DialogDescription>
              </DialogHeader>
              <div className="rounded-2xl border border-border/70 bg-muted/20 p-6 text-base leading-relaxed text-foreground">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Testimonial</p>
                <p className="text-lg leading-relaxed">{quote}</p>
              </div>
              
            </DialogContent>
          </Dialog>
        </CardFooter>
      ) : null}
    </Card>
  );
}

export default CaseCard;
