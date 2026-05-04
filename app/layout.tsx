import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joseph Rolfe — Founder & Cyber Student",
  description:
    "18-year-old cybersecurity student and founder of Rolfe Brand Scaling. Building brands, automations, and a personal platform — before everyone else.",
  openGraph: {
    title: "Joseph Rolfe — Founder & Cyber Student",
    description:
      "18-year-old cybersecurity student and founder of Rolfe Brand Scaling. Building brands, automations, and a personal platform — before everyone else.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Rolfe — Founder & Cyber Student",
    description:
      "18-year-old cybersecurity student and founder of Rolfe Brand Scaling. Building brands, automations, and a personal platform — before everyone else.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
