import { Bird } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-12 text-center md:grid-cols-3 md:text-left">
          
          {/* Column 1: Enquiries */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              For Enquiries, Call
            </h4>
            <div className="mt-4 space-y-1">
              <a href="tel:+919840299616" className="block text-lg font-medium text-foreground transition-colors hover:text-accent-foreground">
                +91 98402 99616
              </a>
              <a href="tel:+919840299717" className="block text-lg font-medium text-foreground transition-colors hover:text-accent-foreground">
                +91 98402 99717
              </a>
            </div>
          </div>

          {/* Column 2: Logo */}
          <div className="flex justify-center">
            <Bird className="h-20 w-20 text-foreground" strokeWidth={1} />
          </div>

          {/* Column 3: Address */}
          <div className="md:text-right">
            <p className="font-medium leading-relaxed text-foreground">
              Level 2, Ace Tower 73/75 RK Salai,<br/>
              Mylapore, Chennai 600004
            </p>
            <Link href="mailto:sales@skyline.ventures">
              <span className="mt-4 inline-block text-foreground transition-colors hover:text-accent-foreground">
                sales@skyline.ventures
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Sub-Footer with Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto max-w-7xl px-4 py-5">
          <p className="text-left text-xs text-muted-foreground">
            Copyright © {new Date().getFullYear()} SKYLINE CONSTRUCTION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
