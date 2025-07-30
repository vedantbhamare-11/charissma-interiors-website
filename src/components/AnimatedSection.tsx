"use client";

import { motion, Variants } from "framer-motion";

const animationVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animationVariants}
      className="w-full"
    >
      {children}
    </motion.section>
  );
}
