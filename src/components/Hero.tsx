"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";

export function Hero() {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);

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
    <section
      id="home"
      className="container max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
    >
      {/* Text content left */}
      <div className="flex flex-col items-start space-y-4 lg:ml-16">
        <h1 className="font-extrabold px-5 py-2 border border-black rounded-full text-foreground">
          Welcome
        </h1>
        <h2 className="text-3xl font-extrabold tracking-wide text-black">
          Your Trusted Building Partner.
        </h2>
        <div className="w-full max-w-xs md:max-w-sm">
          <Link href="#contact" passHref>
            <Button className="w-fit py-3 px-6 text-white bg-black hover:bg-accent hover:text-black">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Image right */}
      <div className="w-full h-[40vh] lg:h-[50vh] relative rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/hero_bg.jpg"
          alt="A beautifully designed modern interior space"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
