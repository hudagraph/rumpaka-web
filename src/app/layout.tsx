import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./base.css";
import "./nav.css";
import "./components.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Sanggar Seni Annisa Rumpaka — Warisan Budaya Sunda Sejak 2003",
  description: "Sanggar seni tari tradisional Sunda di Bandung. Layanan pertunjukan panggung, sewa kostum tari (Arum Kostum), sekolah seni untuk anak & remaja (Arum Art School), dan kolaborasi festival nasional maupun internasional.",
  keywords: "sanggar tari, tari sunda, seni tari bandung, sewa kostum tari, sekolah tari anak, annisa rumpaka, arum kostum, arum art school",
  authors: [{ name: "PT Sanggar Seni Annisa Rumpaka" }],
  metadataBase: new URL("https://rumpaka-web.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "PT Sanggar Seni Annisa Rumpaka — Warisan Budaya Sunda",
    description: "Sanggar seni tari tradisional Sunda di Bandung — pertunjukan panggung, kostum, sekolah seni, dan festival.",
    url: "https://rumpaka-web.vercel.app/",
    siteName: "Annisa Rumpaka",
    images: [
      {
        url: "/assets/og-image.webp",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Sanggar Seni Annisa Rumpaka",
    description: "Warisan Budaya Sunda — pertunjukan, kostum, sekolah seni.",
    images: ["/assets/og-image.webp"],
  },
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
        <a href="#main" className="skip-link">Lewati ke konten</a>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
