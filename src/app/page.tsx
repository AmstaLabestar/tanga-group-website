import type { Metadata } from "next";
import Script from "next/script";
import DeploymentsSection from "@/sections/DeploymentsSection";
import ExpertiseSection from "@/sections/ExpertiseSection";
import HeroSection from "@/sections/HeroSection";
import PartnershipCTASection from "@/sections/PartnershipCTASection";
import ProductsSection from "@/sections/ProductsSection";
import TechArchitectureSection from "@/sections/TechArchitectureSection";
import VisionSection from "@/sections/VisionSection";

export const metadata: Metadata = {
  title: "Entreprise IoT au Burkina Faso | TANGA GROUP",
  description:
    "TANGA GROUP est une entreprise IoT au Burkina Faso specialisee dans les systemes embarques, les solutions connectees, les plateformes numeriques et la transformation digitale des organisations.",
};

export default function HomePage() {
  return (
    <>
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            name: "TANGA GROUP",
            url: "https://www.tangagroup.com",
            logo: "https://www.tangagroup.com/logo.jpg",
            description:
              "Entreprise IoT au Burkina Faso specialisee dans les systemes embarques, les solutions connectees, les plateformes numeriques et la transformation digitale.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ouagadougou",
              addressCountry: "BF",
            },
            areaServed: ["Burkina Faso", "Afrique de l'Ouest"],
            keywords: [
              "entreprise IoT Burkina Faso",
              "IoT Burkina Faso",
              "systemes embarques Burkina Faso",
              "solutions connectees Ouagadougou",
            ],
          }),
        }}
      />
      <HeroSection />
      <ExpertiseSection />
      <ProductsSection />
      <TechArchitectureSection />
      <DeploymentsSection />
      <VisionSection />
      <PartnershipCTASection />
    </>
  );
}
