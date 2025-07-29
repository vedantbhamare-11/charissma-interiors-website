import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skyline | Interior Design & Construction",
  description: "Crafting extraordinary homes with bespoke designs since 2003.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add the `scroll-smooth` class here
    <html lang="en" className="scroll-smooth"> 
      <body className={cn("bg-background text-foreground antialiased", montserrat.className)}>
        {children}
      </body>
    </html>
  );
}
