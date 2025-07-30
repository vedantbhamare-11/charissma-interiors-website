import Link from "next/link";
import { Bird } from "lucide-react"; // Placeholder for the logo icon
import Image from "next/image";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur ">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center  space-x-2">
         <Image src={"/logo.png"} alt="Logo" width={100} height={100} className="w-40 h-20" />
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
