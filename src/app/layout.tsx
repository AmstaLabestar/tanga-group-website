import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { siteConfig } from "@/lib/constants";
import Script from "next/script";
import BackToTopButton from "@/components/BackToTopButton";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — L'ingénierie de la prochaine génération technologique en Afrique`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
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
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main className="relative">{children}</main>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
