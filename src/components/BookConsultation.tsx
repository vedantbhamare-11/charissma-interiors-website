"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion, Variants } from "framer-motion";
import React from "react";

export interface Package {
  title: string;
  duration: string;
  price: string;
}

interface BookConsultationProps {
  onAddToCart: (pkg: Package) => void;
  onCartOpen: () => void;
}

const packages: Package[] = [
  {
    title: "New building construction",
    duration: "1 hr",
    price: "Rs. 1500 INR",
  },
  {
    title: "Renovation",
    duration: "1 hr",
    price: "Rs. 1500 INR",
  },
  {
    title: "Interior Design consultation",
    duration: "1 hr",
    price: "Rs. 1500 INR",
  },
];

// Container variants for staggering
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card variants for fade + slide up animation
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

export function BookConsultation({ onAddToCart, onCartOpen }: BookConsultationProps) {
  return (
    <section id="consultation" className="relative py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 relative">
        {/* Section Title */}
        <motion.h2
          className="mb-12 text-left text-2xl font-bold tracking-tight text-foreground uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Book a Consultation
        </motion.h2>

        {/* Shopping Cart button at top right */}
        <button
          onClick={onCartOpen}
          aria-label="Open cart"
          title="Open cart"
          className="absolute top-0 right-4 z-50 p-2 rounded-full text-foreground hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <ShoppingCart className="h-7 w-7" />
        </button>

        {/* Packages Grid with staggered animation */}
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
              className="flex flex-col items-center rounded-xl bg-card border border-border p-8 shadow-sm transition-shadow hover:shadow-md"
              variants={cardVariants}
            >
              <h3 className="mb-6 text-lg font-semibold text-foreground text-center min-h-[56px] flex items-center justify-center">
                {pkg.title}
              </h3>
              <div className="mb-8 flex items-center gap-2 text-muted-foreground text-sm">
                <span>{pkg.duration}</span>
                <span aria-hidden="true" className="px-2">
                  |
                </span>
                <span>{pkg.price}</span>
              </div>
              <Button
                className="w-full bg-accent shadow-md hover:bg-accent/50"
                variant="secondary"
                onClick={() => onAddToCart(pkg)}
              >
                Book
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
