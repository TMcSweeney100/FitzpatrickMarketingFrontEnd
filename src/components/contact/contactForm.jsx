    import React from 'react'
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'
    import { Input } from '../ui/input'
    import { Textarea } from '../ui/textarea'
    import { Button } from '../ui/button'
    import { Label } from '../ui/label'
    import { Separator } from '../ui/separator'

    function ContactForm() {
    return (
        <>
    <Separator/>
   <section className="container mx-auto max-w-5xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* Left column */}
        <div className="space-y-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Contact Us
          </h2>
          <p className="text-muted-foreground leading-7">
            Send Us An Enquiry And We Will Get Straight Back To You
          </p>

          <ul className=" ml-4 list-disc space-y-3">
      <li>Prefer email? hello@friendco.marketing</li>
      <li>We reply within 24–48 hours.</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>

        </div>

        {/* Right column */}
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Tell Us What You Need</CardTitle>
            <CardDescription>
              Enter your details below and we’ll get back to you
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="youremail@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us your enquiry here"
                    className="w-full"
                  />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button variant="outline" type="submit" className="w-full">
              Submit your Enquiry
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
                                    </>
    )
    }

    export default ContactForm