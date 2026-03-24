import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeKey = locale as "en" | "fr";

  if (!routing.locales.includes(localeKey)) {
    return {
      title: "Page introuvable",
    };
  }

  const alternates = {
    canonical: `/${localeKey}`,
    languages: {
      en: `${siteConfig.url}/en`,
      fr: `${siteConfig.url}/fr`,
    },
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default:
        localeKey === "fr"
          ? `${siteConfig.name} - L'ingenierie de la prochaine generation technologique en Afrique`
          : `${siteConfig.name} - Engineering Africa's Next Generation of Technology`,
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
      images: [
        {
          url: siteConfig.ogImage,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      creator: "@tangagroup",
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
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
    <html lang={localeKey} className="dark" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <NextIntlClientProvider messages={messages} locale={localeKey}>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
