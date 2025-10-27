import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const playfair = Playfair_Display({
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  weight: ["500", "700"],
  variable: "--font-nunito",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naseer's Portfolio",
  description: "Browse around to get to know Naseer a little better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${nunito.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
