"use client";

import { motion, Variants, cubicBezier } from "framer-motion";
import Image from "next/image";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.42, 0, 0.58, 1),
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const serviceList = [
  {
    icon: (
      <Image
        src="/construction.png"
        alt="A minimalist and elegant interior design sketch"
        width={80}
        height={80}
        className="h-24 w-24"
      />
    ),
    title: "Construction",
    description: "State-of-the-art technology at every stage of development.",
  },
  {
    icon: (
      <Image
        src="/architecture.png"
        alt="A minimalist and elegant interior design sketch"
        width={80}
        height={80}
        className="h-24 w-24"
      />
    ),
    title: "Architecture",
    description: "Intentional and timeless design choices at every level.",
  },
  {
    icon: (
      <Image
        src="/interior-design.png"
        alt="A minimalist and elegant interior design sketch"
        width={80}
        height={80}
        className="h-24 w-24"
      />
    ),
    title: "Interior Design",
    description: "Bespoke creations and personalized spaces tailored to your tastes.",
  },
];

export function Services() {
  return (
    <section id="designs" className="bg-background py-16 sm:py-36">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            A tradition of trust and transparency.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 text-center md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {serviceList.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="flex flex-col items-center rounded-xl bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              {service.icon}
              <h3 className="mt-6 text-foreground font-semibold uppercase tracking-wider">
                {service.title}
              </h3>
              <p className="text-muted-foreground max-w-xs mt-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
