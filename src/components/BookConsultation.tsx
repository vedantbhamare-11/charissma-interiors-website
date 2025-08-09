"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShoppingCart,
  Calendar as CalendarIcon,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export interface Package {
  title: string;
  image: string;
}

// interface BookConsultationProps {
//   onAddToCart: (pkg: Package & { name: string; phone: string; date: string }) => void;
//   onCartOpen: () => void;
// }

const packages: Package[] = [
  {
    title: "New Building Construction",
    image: "/building.jpg",
  },
  {
    title: "Renovation",
    image: "/renovation.jpg",
  },
  {
    title: "Interior Design Consultation",
    image: "/interior-design.jpg",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function BookConsultation() {
  //export function BookConsultation({ onAddToCart, onCartOpen }: BookConsultationProps) {
  const [open, setOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleBookNowClick = (pkg: Package) => {
    setSelectedPackage(pkg);
    setOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPackage && name && phone && date) {
      // onAddToCart({
      //   ...selectedPackage,
      //   name,
      //   phone,
      //   date: date.toISOString(),
      // });
      setOpen(false);
      setName("");
      setPhone("");
      setDate(undefined);
      alert("Consultation booked successfully!");
    } else {
      // Optional: show validation error or feedback
    }
  };

  return (
    <section id="consultation" className="relative py-16 bg-background">
      <div className="container mx-auto max-w-7xl px-4 relative">
        <motion.h2
          className="mb-12 text-left text-2xl lg:text-3xl font-bold uppercase tracking-widest text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Book a <br className="lg:hidden" />
          Consultation
        </motion.h2>

        <button
          // onClick={onCartOpen}
          aria-label="Open cart"
          title="Open cart"
          className="absolute top-0 right-4 z-50 p-2 rounded-full text-foreground hover:text-accent-foreground focus:ring-2 focus:ring-accent focus:outline-none"
        >
          <ShoppingCart className="h-7 w-7" />
        </button>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.title}
              variants={cardVariants}
              className="flex flex-col items-start rounded-xl bg-card border border-border shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                />
              </div>
              <div className="p-6 w-full">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {pkg.title}
                </h3>
                <div className="flex text-muted-foreground text-sm mb-6 space-x-2"></div>
                <Button
                  type="button"
                  className="w-full flex items-center justify-between bg-accent text-accent-foreground font-semibold rounded-md h-12 px-6 py-3 mt-2 shadow-md transition hover:shadow-lg focus-visible:ring-4 focus-visible:ring-accent/30 active:scale-[0.97] disabled:opacity-60"
                  style={{ letterSpacing: "0.03em" }}
                  variant="default"
                  onClick={() => handleBookNowClick(pkg)}
                >
                  <span>Book Now</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dialog modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Book Consultation</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="date">Date</Label>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal mt-1"
                    type="button"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      setPopoverOpen(false); // close popover on date select
                    }}
                  />
                </PopoverContent>
              </Popover>
              {!date && (
                <p className="text-sm text-red-600 mt-1">
                  Please select a date.
                </p>
              )}
            </div>

            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-black/80 text-white hover:bg-black"
              >
                Confirm Booking
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
