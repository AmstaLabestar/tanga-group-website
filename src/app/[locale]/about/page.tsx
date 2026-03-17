import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { Target, Eye, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez TANGA GROUP: notre mission, notre équipe, nos valeurs et notre parcours dans la création de solutions deep-tech depuis l'Afrique.",
};

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Impact d'abord",
    description:
      "Chaque produit que nous créons doit résoudre un vrai problème pour de vraies personnes.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Excellence en ingénierie",
    description:
      "Nous nous imposons les plus hauts standards de qualité technique.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Transparence radicale",
    description:
      "Une communication ouverte avec notre équipe, nos clients et nos partenaires.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Fierté africaine",
    description:
      "Nous prouvons qu'une technologie de classe mondiale peut être construite sur le continent.",
  },
];

const milestones = [
  { year: "2019", event: "Fondé à Douala, Cameroun" },
  { year: "2020", event: "Premier déploiement IoT — pilote d'agriculture intelligente" },
  { year: "2021", event: "Lancement de l'appareil edge TangaNode v1" },
  { year: "2022", event: "Expansion à 3 pays, plus de 20 membres" },
  { year: "2023", event: "Lancement de TangaCloud, financement série A" },
  { year: "2024", event: "Plus de 50 déploiements dans 8 pays africains" },
  { year: "2025", event: "Lancement de TangaConnect, intégration satellite" },
  { year: "2026", event: "Passage à l'échelle: 15 pays, plus de 45 membres" },
];

const team = [
  {
    name: "PDG & cofondateur",
    role: "Stratégie & vision",
    bio: "Plus de 15 ans en technologie et développement business en Afrique et en Europe.",
  },
  {
    name: "CTO & cofondateur",
    role: "Technologie & ingénierie",
    bio: "Ancien lead systèmes embarqués dans une entreprise du Fortune 500. Expert en architecture IoT.",
  },
  {
    name: "VP Ingénierie",
    role: "Plateforme & cloud",
    bio: "Mise à l'échelle de plateformes cloud traitant des milliards d'événements. Expérience en infrastructures télécom.",
  },
  {
    name: "VP Matériel",
    role: "Embarqué & matériel",
    bio: "Conception de matériels industriels pour les secteurs minier, énergétique et agricole.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 rounded-full mb-6">
            Notre histoire
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Construire la technologie{" "}
            <span className="text-gradient">depuis l&apos;Afrique, pour le monde</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TANGA GROUP est né d&apos;une conviction simple: la prochaine vague
            d&apos;innovation technologique mondiale viendra d&apos;Afrique. Nous sommes une équipe
            d&apos;ingénieurs, de designers et de passionnés qui construisent les systèmes
            embarqués, plateformes IoT et outils numériques qui rendent cela possible.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <SectionTitle overline="Valeurs" title="Ce qui nous anime" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedCard key={value.title} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan mb-4">
                {value.icon}
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <SectionTitle overline="Parcours" title="Notre chronologie" />
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimatedCard
                  key={milestone.year}
                  delay={index * 0.08}
                  className="!bg-transparent !backdrop-blur-none !border-0 !shadow-none ml-12 !p-0 relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-cyan border-2 border-background" />
                  <span className="text-sm font-semibold text-cyan">
                    {milestone.year}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {milestone.event}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper>
        <SectionTitle overline="Équipe" title="Direction" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimatedCard key={member.name} delay={index * 0.1}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mb-4">
                <span className="font-heading text-lg font-bold text-cyan">
                  {member.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold">
                {member.name}
              </h3>
              <p className="text-xs text-cyan mt-1 mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
