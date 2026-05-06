import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Sanggar Seni Annisa Rumpaka — Warisan Budaya Sunda Sejak 2008",
  description: "Sanggar seni tari tradisional Sunda di Bandung. Layanan pertunjukan panggung, sewa kostum tari (Arum Kostum), sekolah seni untuk anak & remaja (Arum Art School), dan kolaborasi festival nasional maupun internasional.",
  keywords: ["sanggar tari", "tari sunda", "seni tari bandung", "sewa kostum tari", "sekolah tari anak", "annisa rumpaka", "arum kostum", "arum art school"],
  authors: [{ name: "PT Sanggar Seni Annisa Rumpaka" }],
  openGraph: {
    type: "website",
    title: "PT Sanggar Seni Annisa Rumpaka — Warisan Budaya Sunda",
    description: "Sanggar seni tari tradisional Sunda di Bandung — pertunjukan panggung, kostum, sekolah seni, dan festival.",
    url: "https://annisarumpaka.com/",
    siteName: "Annisa Rumpaka",
    images: [{ url: "/assets/og-image.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Sanggar Seni Annisa Rumpaka",
    description: "Warisan Budaya Sunda — pertunjukan, kostum, sekolah seni.",
    images: ["/assets/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${cinzel.variable}`}>
      <head>
        <meta name="theme-color" content="#070707" />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
