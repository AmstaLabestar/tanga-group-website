import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import {
  TrendingUp,
  Users,
  Globe,
  Target,
  DollarSign,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Innovation & investisseurs",
  description:
    "Investissez dans l'avenir technologique de l'Afrique. Découvrez la trajectoire de croissance de TANGA GROUP, l'opportunité de marché et nos programmes de partenariat.",
};

const metrics = [
  { label: "Croissance CA", value: "3,5x", sublabel: "Année sur année" },
  {
    label: "Taille de marché",
    value: "30-90M USD",
    sublabel: "Adressable d'ici 2030",
  },
  { label: "Déploiements", value: "95+", sublabel: "Dans 3 pays" },
  { label: "Équipe", value: "10+", sublabel: "Ingénieurs & spécialistes" },
];

const partnershipTiers = [
  {
    tier: "Partenaire technologique",
    icon: <Lightbulb className="w-8 h-8" />,
    description: "Intégrez votre technologie à notre écosystème IoT.",
    benefits: [
      "Accès API et SDK",
      "Opportunités de co-marketing",
      "Pilotes clients communs",
      "Canal de support technique",
    ],
  },
  {
    tier: "Partenaire distribution",
    icon: <Globe className="w-8 h-8" />,
    description: "Revendez et déployez nos produits sur votre marché.",
    benefits: [
      "Marges compétitives",
      "Formation et certification",
      "Supports marketing",
      "Account manager dédié",
    ],
  },
  {
    tier: "Investisseur stratégique",
    icon: <DollarSign className="w-8 h-8" />,
    description:
      "Investissez dans la prochaine vague d'innovation deep-tech africaine.",
    benefits: [
      "Opportunité d'advisory board",
      "Mises à jour trimestrielles",
      "Accès anticipé aux nouveaux produits",
      "Opportunités de co-investissement",
    ],
  },
];

const reasons = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Marché en forte croissance",
    description:
      "Le marché IoT africain croît à 25 % de CAGR, au-dessus des moyennes mondiales.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Avantage du premier entrant",
    description:
      "Nous construisons le standard des déploiements IoT industriels à l'échelle du continent.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Équipe de classe mondiale",
    description:
      "Des ingénieurs ayant de l'expérience dans des entreprises technologiques de premier plan.",
  },
];

export default function InnovationPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Innovation & investisseurs"
          title="Investissez dans l'avenir technologique de l'Afrique"
          subtitle="Rejoignez un écosystème en croissance qui soutient une innovation deep-tech répondant à des défis réels à l'échelle du continent."
        />
      </SectionWrapper>

      <div className="mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-gradient">
                {metric.value}
              </div>
              <div className="text-sm font-medium mt-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionWrapper>
        <SectionTitle
          overline="Pourquoi nous"
          title="Pourquoi investir dans TANGA GROUP"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedCard key={reason.title} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan mb-4">
                {reason.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h3 className="font-heading text-2xl font-bold text-center mb-10">
          Programmes de partenariat
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnershipTiers.map((tier, index) => (
            <AnimatedCard key={tier.tier} delay={index * 0.1} className="flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center text-cyan mb-5">
                {tier.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                {tier.tier}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">
                {tier.description}
              </p>
              <ul className="space-y-2 mb-6">
                {tier.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <CTAButton href="/contact" variant="secondary">
                En savoir plus
              </CTAButton>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
