import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { openPositions } from "@/lib/constants";
import { MapPin, Briefcase, Heart, Rocket, BookOpen, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Rejoignez TANGA GROUP et contribuez à bâtir la prochaine génération de technologies en Afrique. Découvrez nos postes ouverts en ingénierie, design et opérations.",
};

const perks = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Travail de pointe",
    description: "Travaillez sur des projets concrets en embarqué, IoT et cloud.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Impact panafricain",
    description: "Votre travail a un impact sur des communautés à travers le continent.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Budget formation",
    description: "Une enveloppe annuelle pour cours, certifications et conférences.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Santé & bien-être",
    description: "Une couverture santé complète pour vous et votre famille.",
  },
];

const allPositions = [
  ...openPositions,
  {
    title: "Ingénieur DevOps",
    location: "À distance",
    type: "Temps plein",
    department: "Plateforme",
  },
  {
    title: "Designer produit",
    location: "Ouagadougou, Burkina Faso",
    type: "Temps plein",
    department: "Design",
  },
  {
    title: "Ingénieur firmware",
    location: "Ouagadougou, Burkina Faso",
    type: "Temps plein",
    department: "Matériel",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 rounded-full mb-6">
            Carrières
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Construisez l&apos;avenir{" "}
            <span className="text-gradient">avec nous</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous recherchons des ingénieurs, designers et innovateurs qui veulent
            construire une technologie de classe mondiale depuis l&apos;Afrique. Rejoignez
            une équipe qui repousse les limites du possible.
          </p>
        </div>
      </SectionWrapper>

      {/* Perks */}
      <SectionWrapper>
        <SectionTitle overline="Pourquoi nous rejoindre" title="Avantages & culture" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <AnimatedCard key={perk.title} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan mb-4">
                {perk.icon}
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">
                {perk.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {perk.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper>
        <SectionTitle
          overline="Postes ouverts"
          title="Offres actuelles"
          subtitle="Vous ne trouvez pas le bon poste? Envoyez-nous votre CV quand même — nous recherchons toujours des talents exceptionnels."
        />
        <div className="space-y-4 max-w-3xl mx-auto">
          {allPositions.map((position, index) => (
            <AnimatedCard key={position.title + index} delay={index * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-heading text-base font-semibold">
                    {position.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-cyan" />
                      {position.type}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple/10 text-purple text-xs">
                      {position.department}
                    </span>
                  </div>
                </div>
                <CTAButton href="/contact" variant="ghost">
                  Postuler
                </CTAButton>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
