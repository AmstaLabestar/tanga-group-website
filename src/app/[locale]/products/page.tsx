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
    tagline: "Mesure instantanée de satisfaction client",
    icon: <MessageSquare className="w-10 h-10" />,
    description:
      "Une solution électronique innovante permettant aux entreprises de collecter instantanément les avis de leurs clients via un boîtier simple à boutons de satisfaction.",
    points: [
      "Analyser la satisfaction en temps réel",
      "Identifier rapidement les points d'amélioration",
      "Améliorer la qualité des services",
    ],
  },
  {
    name: "Pointage biométrique",
    tagline: "Gestion des présences par empreinte digitale",
    icon: <Fingerprint className="w-10 h-10" />,
    description:
      "Des systèmes de pointage par empreinte digitale pour gérer efficacement les présences et les horaires de travail des employés.",
    points: [
      "Sécuriser l'identification des employés",
      "Éviter les fraudes liées au pointage",
      "Générer automatiquement des rapports de présence",
      "Faciliter la gestion des ressources humaines",
    ],
  },
  {
    name: "Pointage RFID",
    tagline: "Pointage par carte ou badge",
    icon: <CreditCard className="w-10 h-10" />,
    description:
      "Des solutions de pointage par carte ou badge RFID. Chaque employé pointe son arrivée et son départ en présentant sa carte devant un lecteur.",
    points: [
      "Enregistrer automatiquement les heures de travail",
      "Suivre les présences en temps réel",
      "Produire des rapports détaillés",
      "Simplifier la gestion du personnel",
    ],
  },
  {
    name: "Sur mesure",
    tagline: "Solutions technologiques personnalisées",
    icon: <Wrench className="w-10 h-10" />,
    description:
      "Des solutions adaptées aux besoins spécifiques des entreprises et institutions: systèmes électroniques, objets connectés, plateformes numériques et outils de digitalisation.",
    points: [
      "Cadrage du besoin et architecture",
      "Développement et tests",
      "Déploiement et accompagnement",
      "Évolutions et support",
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
