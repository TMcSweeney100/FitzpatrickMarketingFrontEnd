import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";



function CaseCard({ title, client, tags = [], metrics = [] }) {
  return (
    <>
    
     <Card className="overflow-hidden">
      <AspectRatio ratio={16/9} className="bg-muted" />
      <CardHeader>
        <CardTitle className="text-base">{client} — {title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
        </div>
        <Separator />
        <div className="flex flex-wrap gap-2 text-xs">
          {metrics.map((m) => <Badge key={m}>{m}</Badge>)}
        </div>
        <div className="pt-2">
          <Button size="sm" variant="outline">View case</Button>
        </div>
      </CardContent>
    </Card>
    
    </>
      

  )
}

export default CaseCard

