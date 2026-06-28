import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "SeekProp",
  description: "Discover Your Next Property with Confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", manrope.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
