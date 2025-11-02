import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Testimonial({ name, role, quote, avatar }) {
  return (
    <Card>
      <CardContent className="p-5 mt-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name?.[0] ?? "?"}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <div className="font-medium">{name}</div>
            <div className="text-muted-foreground">{role}</div>
          </div>
        </div>
        <Separator className="my-4" />
        <p className="text-sm leading-6">“{quote}”</p>
      </CardContent>
    </Card>
  );
}
