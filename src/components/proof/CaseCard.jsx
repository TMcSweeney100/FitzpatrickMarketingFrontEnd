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

function CaseCard({ title, client, tags = [], summary, logo, quote, person, role }) {
  const logoLabel = logo ?? client?.charAt(0) ?? "?";

  return (
    <Card className="flex h-full flex-col border border-border/70 shadow-sm hover:border-primary/40 transition">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-base font-semibold text-muted-foreground">
            {logoLabel}
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
      <CardContent className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {summary}
      </CardContent>
      {quote ? (
        <CardFooter className="border-t border-border/70 bg-muted/30">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full" variant="default">
                View testimonial
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl space-y-4">
              <DialogHeader>
                <DialogTitle>{client}</DialogTitle>
                <DialogDescription>{title}</DialogDescription>
              </DialogHeader>
              <p className="text-base leading-relaxed text-foreground">{quote}</p>
              <div className="text-sm font-medium text-muted-foreground">
                {person}
                {role ? ` · ${role}` : null}
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      ) : null}
    </Card>
  );
}

export default CaseCard;
