// ./components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "Services", href: "#designs" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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
        src="/hero-bg.jpg"
        alt="A beautifully designed modern interior space"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40" />
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        <div className="mb-16">
          <Image
            src="/logo.png"
            alt="A beautifully designed modern interior space"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>

        <nav className="flex flex-col lg:flex-row items-center space-x-2 px-6 py-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative group px-5 py-2 text-base font-semibold uppercase tracking-wider text-foreground"
            >
              {item.label}
              <span
                className="absolute bottom-1 left-0 block h-[1px] w-full 
                origin-left scale-x-0 transform bg-foreground 
                transition-transform duration-300 ease-out 
                group-hover:scale-x-100"
              ></span>
            </Link>
          ))}
        </nav>
      </div>
      {/* Top Right Icons container */}
      <div className="absolute top-6 right-6 z-30 flex items-center space-x-6">
        {/* User Icon + Dropdown */}
        {/* <div className="relative" ref={userDropdownRef}>
          <button
            onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
            aria-haspopup="true"
            aria-expanded={isUserDropdownOpen}
            aria-controls="user-menu"
            className="text-foreground hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded"
            title="User menu"
          >
            <User className="h-6 w-6" />
          </button>

          {isUserDropdownOpen && (
            <div
              id="user-menu"
              role="menu"
              aria-label="User menu"
              className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-card shadow-lg py-2 text-foreground"
            >
              <Link
                href="/create-account"
                role="menuitem"
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                onClick={() => setUserDropdownOpen(false)}
              >
                Create Account
              </Link>
              <Link
                href="/sign-in"
                role="menuitem"
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                onClick={() => setUserDropdownOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/bookings"
                role="menuitem"
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                onClick={() => setUserDropdownOpen(false)}
              >
                Bookings
              </Link>
              <Link
                href="/my-account"
                role="menuitem"
                className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                onClick={() => setUserDropdownOpen(false)}
              >
                My Account
              </Link>
            </div>
          )}
        </div> */}
      </div>
      {/* Cart Drawer */}
    </section>
  );
}
