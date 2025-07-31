"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

export interface Package {
  title: string;
  duration: string;
  price: string;
  image: string;
}

interface BookConsultationProps {
  onAddToCart: (pkg: Package) => void;
  onCartOpen: () => void;
}

const packages: Package[] = [
  {
    title: "New Building Construction",
    duration: "1 hr",
    price: "Rs. 1500 INR",
    image: "/building.jpg",
  },
  {
    title: "Renovation",
    duration: "1 hr",
    price: "Rs. 1500 INR",
    image: "/renovation.jpg",
  },
  {
    title: "Interior Design Consultation",
    duration: "1 hr",
    price: "Rs. 1500 INR",
    image: "/interior-design.jpg",
  },
];

// Animation variants remain same
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

export function BookConsultation({
  onAddToCart,
  onCartOpen,
}: BookConsultationProps) {
  return (
    <section id="consultation" className="relative py-16 bg-background">
      <div className="container mx-auto max-w-7xl px-4 relative">
        {/* Title */}
        <motion.h2
          className="mb-12 text-left text-2xl lg:text-3xl font-bold uppercase tracking-widest text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Book a <br className="lg:hidden" />
          Consultation
        </motion.h2>

        {/* Cart button */}
        <button
          onClick={onCartOpen}
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
              {/* Image above */}
              <div className="relative w-full h-48 mb-4 rounded-t-lg overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="/placeholder.png" // Optional low quality placeholder
                />
              </div>

              {/* Left aligned text */}
              <div className="p-6 w-full">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {pkg.title}
                </h3>
                <div className="flex text-muted-foreground text-sm mb-6 space-x-2">
                  <span>{pkg.duration}</span>
                  <span aria-hidden="true">|</span>
                  <span>{pkg.price}</span>
                </div>

                <Button
                  type="button"
                  className="
    w-full flex items-center justify-between
    bg-accent text-accent-foreground font-semibold
    rounded-md h-12 px-6 py-3 mt-2 shadow-md
    transition
     hover:shadow-lg
    focus-visible:ring-4 focus-visible:ring-accent/30
    active:scale-[0.97] 
    disabled:opacity-60
  "
                  style={{ letterSpacing: "0.03em" }}
                  variant="default"
                  onClick={() => onAddToCart(pkg)}
                >
                  <span>Book Now</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
