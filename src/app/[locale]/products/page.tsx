import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { products } from "@/lib/constants";
import { CheckCircle2, Zap, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Découvrez la suite produits de TANGA GROUP: passerelle IoT TangaNode, plateforme data TangaCloud et gestion de connectivité TangaConnect.",
};

const productDetails = [
  {
    ...products[0],
    icon: <Zap className="w-10 h-10" />,
    specs: [
      { label: "Processeur", value: "ARM Cortex-M4 / M7" },
      { label: "Connectivité", value: "LoRa, WiFi, BLE, Ethernet" },
      { label: "Stockage", value: "SD industrielle 32 Go" },
      { label: "Alimentation", value: "Solaire + batterie de secours" },
      { label: "Protection", value: "IP67 poussière et étanche" },
    ],
  },
  {
    ...products[1],
    icon: <Globe className="w-10 h-10" />,
    specs: [
      { label: "Architecture", value: "Microservices sur Kubernetes" },
      { label: "Base de données", value: "TimescaleDB + PostgreSQL" },
      { label: "Débit", value: "10M+ événements/jour" },
      { label: "Latence", value: "< 500 ms de bout en bout" },
      { label: "SLA disponibilité", value: "99,9 %" },
    ],
  },
  {
    ...products[2],
    icon: <Shield className="w-10 h-10" />,
    specs: [
      { label: "Protocoles", value: "LoRaWAN, NB-IoT, LTE-M" },
      { label: "Satellite", value: "Iridium, Starlink ready" },
      { label: "Bascule", value: "Multi-réseaux automatique" },
      { label: "Portée", value: "Jusqu'à 15 km (LoRa)" },
      { label: "Sécurité", value: "Chiffrement AES-256" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Produits"
          title="Notre suite de produits"
          subtitle="Des appareils edge aux plateformes cloud, notre suite intégrée couvre toute la chaîne de la donnée pour des déploiements IoT industriels."
        />
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {productDetails.map((product, index) => (
          <AnimatedCard key={product.name} delay={index * 0.1} className="!p-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product visual */}
              <div className="p-8 sm:p-12 bg-gradient-to-br from-cyan/5 to-purple/5 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-border">
                <div className="w-20 h-20 rounded-2xl bg-cyan/10 flex items-center justify-center text-cyan mb-6">
                  {product.icon}
                </div>
                <h2 className="font-heading text-3xl font-bold mb-2">
                  {product.name}
                </h2>
                <span className="text-sm text-cyan font-medium mb-4">
                  {product.tagline}
                </span>
                <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-card border border-border"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan" /> {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="p-8 sm:p-12">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-cyan mb-6">
                  Spécifications techniques
                </h3>
                <div className="space-y-4">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <CTAButton href="/contact">Demander la fiche technique</CTAButton>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
