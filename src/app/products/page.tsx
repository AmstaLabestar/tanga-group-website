import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { CheckCircle2, MessageSquare, Fingerprint, CreditCard, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Produits",
  description:
    "Les produits TANGA GROUP: Feelback, solutions de pointage biométrique et RFID, et solutions technologiques sur mesure.",
};

const productDetails = [
  {
    name: "Feelback",
    tagline: "Comprenez vos clients en temps réel",
    icon: <MessageSquare className="w-10 h-10" />,
    description:
      "Une solution simple et puissante pour capter instantanément la satisfaction de vos clients et transformer chaque interaction en opportunité d’amélioration.",
    points: [
      "Mesurez la satisfaction client en temps réel",
      "Identifiez rapidement les points faibles de votre service",
      "Améliorez l’expérience client en continu",
      "Prenez des décisions basées sur des données concrètes",
    ],
  },
  {
    name: "Pointage biométrique",
    tagline: "Un contrôle fiable et sans fraude",
    icon: <Fingerprint className="w-10 h-10" />,
    description:
      "Un système sécurisé de gestion des présences basé sur l’empreinte digitale pour éliminer toute fraude et automatiser le suivi des employés.",
    points: [
      "Identification unique et infalsifiable",
      "Suppression du pointage frauduleux",
      "Rapports automatiques et précis",
      "Gestion simplifiée des ressources humaines",
    ],
  },
  {
    name: "Pointage RFID",
    tagline: "Rapide, simple et efficace",
    icon: <CreditCard className="w-10 h-10" />,
    description:
      "Une solution moderne de pointage par badge RFID permettant un suivi instantané et fluide des entrées et sorties des employés.",
    points: [
      "Pointage en moins d’une seconde",
      "Suivi des présences en temps réel",
      "Historique détaillé et exportable",
      "Déploiement rapide en entreprise",
    ],
  },
  {
    name: "Contrôle d’accès intelligent",
    tagline: "Sécurisez vos espaces",
    icon: <Wrench className="w-10 h-10" />,
    description:
      "Un système de contrôle d’accès par badge ou identification électronique pour sécuriser vos locaux et maîtriser les flux d’accès.",
    points: [
      "Accès sécurisé par badge ou identification",
      "Gestion centralisée des autorisations",
      "Historique complet des accès",
      "Adapté aux entreprises et institutions",
    ],
  },
  {
    name: "SmartCard",
    tagline: "Fidélisez vos clients intelligemment",
    icon: <CreditCard className="w-10 h-10" />,
    description:
      "Une solution de carte intelligente permettant aux entreprises de proposer des programmes de fidélité et de réduction innovants.",
    points: [
      "Programmes de fidélité personnalisés",
      "Suivi des avantages et réductions",
      "Augmentation de la rétention client",
      "Expérience client moderne et digitale",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Produits"
          title="Des produits concrets, conçus pour améliorer l'efficacité"
          subtitle="TANGA GROUP développe des produits technologiques pour optimiser l'expérience utilisateur et la performance des organisations."
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
              </div>

              {/* What you get */}
              <div className="p-8 sm:p-12">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-cyan mb-6">
                  Ce que vous obtenez
                </h3>
                <ul className="space-y-3">
                  {product.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTAButton href="/contact">Demander une démo</CTAButton>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
