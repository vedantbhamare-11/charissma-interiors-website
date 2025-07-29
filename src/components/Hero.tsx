import Image from "next/image";
import Link from "next/link";
import { Bird } from "lucide-react"; // Using the Bird icon as a placeholder for your logo

// Define your navigation items here for easy management
const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#designs" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
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
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        <div className="mb-20">
          <Bird className="h-28 w-28 text-foreground" strokeWidth={0.8} />
        </div>

        <nav className="flex flex-col lg:flex-row items-center space-x-2 px-6 py-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // 1. Link is now a 'relative group' to position the underline
              className="relative group px-5 py-2 text-base font-semibold uppercase tracking-wider text-foreground"
            >
              {item.label}
              {/* 2. This span is the animated underline */}
              <span className="absolute bottom-1 left-0 block h-[1px] w-full 
                               origin-left scale-x-0 transform bg-foreground 
                               transition-transform duration-300 ease-out 
                               group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
