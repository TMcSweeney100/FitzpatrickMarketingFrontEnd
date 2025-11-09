import React from "react";
import { Toaster as SonnerToaster } from "sonner";

export function Toaster(props) {
  return (
    <SonnerToaster
      theme="system"
      toastOptions={{
        classNames: {
          toast:
            "group pointer-events-auto flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-background/95 p-4 text-sm shadow-lg ring-1 ring-black/5 backdrop-blur",
          title: "text-sm font-semibold text-foreground",
          description: "text-sm text-muted-foreground",
          icon: "text-primary",
          actionButton:
            "inline-flex h-8 items-center rounded-md border border-input bg-transparent px-3 text-xs font-medium transition-colors hover:bg-muted",
          cancelButton:
            "inline-flex h-8 items-center rounded-md border border-input bg-muted px-3 text-xs font-medium transition-colors hover:bg-muted/80",
        },
      }}
      {...props}
    />
  );
}
