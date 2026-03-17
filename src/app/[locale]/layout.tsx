import type { Metadata } from "next";
import "../globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { siteConfig } from "@/lib/constants";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = locale as "en" | "fr";
  if (!routing.locales.includes(localeKey)) {
    return {
      title: "Page introuvable",
    };
  }

  const alternates = {
    canonical: `${siteConfig.url}/${localeKey}`,
    languages: {
      en: `${siteConfig.url}/en`,
      fr: `${siteConfig.url}/fr`,
    },
  };

  return {
    title: {
      default:
        localeKey === "fr"
          ? `${siteConfig.name} — L'ingénierie de la prochaine génération technologique en Afrique`
          : `${siteConfig.name} — Engineering Africa's Next Generation of Technology`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "embedded systems",
      "IoT",
      "Internet of Things",
      "digital platforms",
      "African technology",
      "deep tech",
      "TANGA GROUP",
      "edge computing",
      "smart agriculture",
      "industrial IoT",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    alternates,
    openGraph: {
      type: "website",
      locale: localeKey === "fr" ? "fr_FR" : "en_US",
      url: `${siteConfig.url}/${localeKey}`,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      creator: "@tangagroup",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeKey = locale as "en" | "fr";
  if (!routing.locales.includes(localeKey)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={localeKey} className="dark">
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={localeKey}>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
