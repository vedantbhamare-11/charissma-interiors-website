// ./components/Footer.tsx
"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BusinessHours } from "./BusinessHours";
import { FaqAccordion } from "./FaqAccordion";
import emailjs from "@emailjs/browser";

export function QuoteSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  // Set your ENV vars in .env.local as shown below
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name ?? null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setSuccess(true);
      formRef.current.reset();
      setFileName(null);
    } catch (error) {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mb-16 relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-center text-center">
          <div className="w-24 flex-shrink-0 border-t-2 border-border" />
          <h2 className="mx-6 text-2xl lg:text-3xl font-bold uppercase tracking-widest text-foreground">
            Contact Us
          </h2>
          <div className="w-24 flex-shrink-0 border-t-2 border-border" />
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-8 grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* --- Left: Minimal Form --- */}
        <form
          ref={formRef}
          className="flex flex-col bg-background rounded-xl p-6 gap-8 justify-center"
          onSubmit={handleSubmit}
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              Get a Free Quote!
            </h3>
            <hr className="border-t-2 border-accent w-16 mb-8 rounded-full" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm text-muted-foreground"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              autoComplete="name"
              required
              className="rounded border-none shadow bg-white h-12 placeholder:text-mute"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm text-muted-foreground"
            >
              Email<span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              name="email"
              placeholder="T0iYH@example.com"
              type="email"
              autoComplete="email"
              required
              className="rounded border-none shadow bg-white h-12 placeholder:text-mute"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm text-muted-foreground"
            >
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              autoComplete="tel"
              className="rounded border-none shadow bg-white h-12 placeholder:text-mute"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="address"
              className="block text-sm text-muted-foreground"
            >
              Address (Street, City, Zip Code)
            </label>
            <Input
              id="address"
              name="address"
              placeholder="123 Main St, Anytown, USA"
              autoComplete="street-address"
              className="rounded border-none shadow bg-white h-12 placeholder:text-mute"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm text-muted-foreground"
            >
              Details (What are you looking for?)
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Let us know the details and we'll contact you with a quote."
              className="rounded border-none shadow bg-white h-12 placeholder:text-mute"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-muted-foreground leading-none cursor-pointer">
              <Input
                id="file"
                name="file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="underline cursor-pointer">Attach Files</span>
              {fileName && (
                <span className="ml-2 text-xs text-muted-foreground">
                  ({fileName})
                </span>
              )}
            </label>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="mt-2 w-full bg-white rounded shadow-sm hover:bg-white transition-shadow hover:shadow-md"
          >
            {loading ? "Sending..." : "SEND"}
          </Button>
          {success && (
            <p className="text-green-600 mt-2">Email sent successfully!</p>
          )}
          {success === false && (
            <p className="text-red-600 mt-2">
              Failed to send! Please try again or contact us directly.
            </p>
          )}
        </form>

        {/* --- Right: Info Panel with Accent --- */}
        <aside className="relative flex flex-col gap-10 md:pl-12">
          <div
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"
            aria-hidden="true"
          />
          <div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">
              Better yet, see us in person!
            </h4>
            <p className="text-base text-muted-foreground mb-6">
              We stay in constant communication with our clients until the job
              is done.
              <br />
              To get a free quote, or if you have questions or special requests,
              just drop us a line.
            </p>
            <div className="mb-6 mt-6 space-y-1">
              <h5 className="font-bold text-foreground">
                Charissma Constructions &amp; Interiors
              </h5>
              <address className="not-italic text-base text-foreground leading-relaxed">
                No.25, Dr Nair Rd, T. Nagar, Chennai, Tamil Nadu, India
              </address>
              <a
                href="tel:+918925219614"
                className="block text-primary-foreground underline hover:text-accent-foreground text-sm font-medium"
              >
                +91-8925219614
              </a>
              <a
                href="mailto:info@charissmaconstructions.com"
                className="block text-primary-foreground underline hover:text-accent-foreground text-sm font-medium"
              >
                info@charissmaconstructions.com
              </a>
            </div>
          </div>
          <div>
            <BusinessHours />
            <FaqAccordion />
          </div>
        </aside>
      </div>
    </section>
  );
}
