import React from "react";
import { Menu, Space } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/images/mainLogoV3.png";



function Header() {
  return (
    <>
    
   <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur shadow-sm">

        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

          <div className="flex items-center gap-2 text-base font-bold tracking-tight ">
            <div className="rounded-xl">

              <img className="h-15 w-14  object-fill "
                src={logo}
                />
            </div>
              <span> Fitzpatrick <span className="text-muted-foreground">Marketing</span></span>
          </div>
           

        {/* Desktop nav     */}

            <nav className="hidden md:flex items-center gap-6">
  <a href="#what"    className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap">What we do</a>
  <a href="#proof"   className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap">Results</a>
  <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground whitespace-nowrap">Contact</a>

  <Separator orientation="vertical" className="h-5" />
  <Button size="sm" variant="default"asChild className=" transition-transform hover:translate-y-[-1px] ">
  <a href="#contact">Get Free Value Proposition</a>
</Button>
 
</nav>



            {/* Mobile View */}

            <div className="md:hidden">
                <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="mt-6 space-y-4">
                <a href="#what" className="block text-sm">What we do</a>
                <a href="#proof" className="block text-sm">Proof</a>
                <a href="#contact" className="block text-sm">Contact</a>
                <Separator className="my-4" />
                <Button asChild className="w-full">
                  <a href="#contact">Get a Quote</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
            </div>
        </div>
    </header>
    
    </>
      
    
  )
}





export default Header;