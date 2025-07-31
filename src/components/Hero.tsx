"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

export function Hero() {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isUserDropdownOpen &&
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  return (
    <section id="home" className="relative h-[100vh] w-full">
      {/* Background Image */}
      <Image
        src="/hero_bg.jpg"
        alt="A beautifully designed modern interior space"
        width={2000}
        height={2000}
        className="object-cover w-full h-full"
      />

      {/* Card Overlay on the right side */}
      <div className="absolute  top-1/3  lg:top-1/2 lg:right-0 h-full transform -translate-y-1/2 lg:w-1/3 lg:bg-background p-8 flex flex-col justify-center text-foreground">
        <h1 className="text-4xl font-extrabold mt-[-3rem] mb-4">Welcome</h1>
        <h2 className="text-2xl font-semibold mb-4 uppercase tracking-wider">
          YOUR TRUSTED BUILDING PARTNER
        </h2>
        <p className="mb-6 text-base leading-relaxed">
          Building your future with our experience, one brick at a time.
        </p>
        {/* Assuming you want this to navigate to contact section */}
        <Link href="#contact" passHref>
          <Button
            variant="default"
            className="bg-white w-full text-black lg:bg-black lg:text-white hover:bg-accent hover:text-black"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
