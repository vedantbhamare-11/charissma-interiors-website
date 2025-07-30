import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charissma Constructions | Turnkey Interiors & Premium Construction in Chennai",
  description:
    "Charissma Constructions is Chennai’s trusted name for turnkey construction, architecture, and bespoke interior design. Since 2003, we’ve delivered exceptional residential and commercial spaces with transparency, innovation, and a tradition of trust.",
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
