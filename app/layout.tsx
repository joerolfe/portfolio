import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import ScrollToTop from "@/components/ScrollToTop";
import StartAtTop from "@/components/StartAtTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  verification: {
    google: "google92b75e77fb2571fe",
  },
  title: "Joseph Rolfe — Founder, TikTok Shop & Cyber Student",
  description:
    "18-year-old running Rolfe Brand Scaling, TikTok Shop, and social media automation — making £1k+ a month online while studying for a Cyber Security degree. Building in public.",
  openGraph: {
    title: "Joseph Rolfe — Founder, TikTok Shop & Cyber Student",
    description:
      "18-year-old running Rolfe Brand Scaling, TikTok Shop, and social media automation — making £1k+ a month online while studying for a Cyber Security degree.",
    type: "website",
    locale: "en_GB",
    url: "https://joerolfe.dev",
    images: [
      {
        url: "/joseph.jpg.PNG",
        width: 800,
        height: 1067,
        alt: "Joseph Rolfe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Rolfe — Founder, TikTok Shop & Cyber Student",
    description:
      "18-year-old running Rolfe Brand Scaling, TikTok Shop, and social media automation — making £1k+ a month online.",
    images: ["/joseph.jpg.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <StartAtTop />
        <ScrollProgress />
        {/* Nav lives outside the page-transition wrapper so position:fixed
            isn't broken by the template's transform/filter */}
        <Nav />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
