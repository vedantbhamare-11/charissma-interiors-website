// ./app/page.tsx
"use client";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { QuoteSection } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";
import { BookConsultation, Package } from "@/components/BookConsultation";
import { useState } from "react";
// import { CartDrawer } from "@/components/CartDrawer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Header } from "@/components/Header";

export default function HomePage() {
  // const [cartItems, setCartItems] = useState<Package[]>([]);
  // const [isCartOpen, setCartOpen] = useState(false);

  // const handleAddToCart = (pkg: Package) => {
  //   // Optionally prevent duplicates here
  //   setCartItems((prev) => [...prev, pkg]);
  //   setCartOpen(true);
  // };

  // const handleRemoveItem = (title: string) => {
  //   setCartItems((prev) => prev.filter((item) => item.title !== title));
  // };

  return (
    <>
      <Header />
      <main>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection>
          <AboutUs />
        </AnimatedSection>

        <AnimatedSection>
          <FeaturedProjects />
        </AnimatedSection>

        <AnimatedSection>
          <BookConsultation
            // onAddToCart={handleAddToCart}
            // onCartOpen={() => setCartOpen(true)}
          />{" "}
        </AnimatedSection>

        <AnimatedSection>
          <QuoteSection />
        </AnimatedSection>
      </main>
      {/* <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      /> */}
    </>
  );
}
