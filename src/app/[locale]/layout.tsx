import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import Cursor from "@/components/Cursor";

import "../base.css";
import "../nav.css";
import "../components.css";

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

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: "PT Sanggar Seni Annisa Rumpaka — Warisan Budaya Sunda Sejak 2003",
    description: "Sanggar seni tari tradisional Sunda di Bandung. Layanan pertunjukan panggung, sewa kostum tari (Arum Kostum), sekolah seni untuk anak & remaja (Arum Art School), dan kolaborasi festival nasional maupun internasional.",
    keywords: "sanggar tari, tari sunda, seni tari bandung, sewa kostum tari, sekolah tari anak, annisa rumpaka, arum kostum, arum art school",
    authors: [{ name: "PT Sanggar Seni Annisa Rumpaka" }],
    metadataBase: new URL("https://rumpaka-web.vercel.app/"),
    alternates: {
      canonical: "/",
      languages: {
        'id-ID': '/id',
        'en-US': '/en'
      }
    },
    openGraph: {
      type: "website",
      title: "PT Sanggar Seni Annisa Rumpaka — Warisan Budaya Sunda",
      description: "Sanggar seni tari tradisional Sunda di Bandung — pertunjukan panggung, kostum, sekolah seni, dan festival.",
      url: "https://rumpaka-web.vercel.app/",
      siteName: "Annisa Rumpaka",
      images: [{ url: "/assets/og-image.webp" }],
      locale: locale === 'en' ? 'en_US' : 'id_ID',
    },
    icons: {
      icon: "/assets/favicon.svg",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <a href="#main" className="skip-link">
            {locale === 'en' ? 'Skip to content' : 'Lewati ke konten'}
          </a>
          <Cursor />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
