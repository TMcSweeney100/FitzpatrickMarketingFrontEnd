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
                <Card className="h-full">
                    <CardHeader>
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <CardTitle className="text-xl">{title}</CardTitle>
                                    {outcome ? (
                                    <CardDescription className="mt-1">{outcome}</CardDescription>
                                    ) : null}
                            </div>
                            {Icon ? (
                                <div className="rounded-md bg-muted p-2">
                                    <Icon className="h-5 w-5" />
                                </div>
                                    ) : null}
                                    </div>
                        {tag ? (
                            <div className="pt-2">
                            <Badge variant="secondary">{tag}</Badge>
                            </div>
                            ) : null}
                    </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-2">
                        {bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{b}</span>
                            </li>
                        ))}
                    </ul>
                   </CardContent>
                    <CardFooter>
                        <Button asChild>
                        <a href={ctaHref}>{ctaLabel}</a>
                        </Button>
                    </CardFooter>
               </Card>
            );
            }