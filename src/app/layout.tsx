import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const pulseSans = Manrope({
  subsets: ["latin"],
  variable: "--font-pulse-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulse & Tin — Premium Pulses, Effortless Cooking",
  description:
    "Experience the Apple-like launch page for Pulse & Tin. Discover how effortless cooking with premium tinned pulses can be.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pulseSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
