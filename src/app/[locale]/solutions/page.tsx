import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { Cpu, Wifi, Monitor, Code2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Des solutions deep-tech en systèmes embarqués, IoT, plateformes numériques et développement sur mesure. Conçues pour l'Afrique, prêtes pour le monde.",
};

const solutions = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Systèmes embarqués",
    id: "embedded",
    description:
      "Conception matérielle et firmware sur mesure pour le monitoring industriel, l'agriculture de précision et l'automatisation.",
    capabilities: [
      "Conception et prototypage PCB",
      "Développement firmware (C/C++, Rust)",
      "Intégration et calibration des capteurs",
      "Optimisation basse consommation",
      "Conformité et certification matérielle",
    ],
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Solutions IoT",
    id: "iot",
    description:
      "Des écosystèmes IoT de bout en bout reliant les appareils physiques au cloud, avec une connectivité fiable dans tous les environnements.",
    capabilities: [
      "Connectivité LoRa, NB-IoT, satellite",
      "Edge computing et passerelles",
      "Provisioning et gestion des appareils",
      "Mises à jour firmware OTA",
      "Tableaux de bord de suivi de flotte",
    ],
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Plateformes numériques",
    id: "platforms",
    description:
      "Des plateformes web et mobiles scalables avec analytics avancées, tableaux de bord temps réel et outils d'aide à la décision.",
    capabilities: [
      "Visualisation de données en temps réel",
      "APIs REST et GraphQL",
      "Contrôle d'accès par rôles",
      "Reporting et alertes automatisés",
      "Design responsive mobile-first",
    ],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Développement sur mesure",
    id: "custom",
    description:
      "Développement technologique adapté aux organisations ayant des besoins spécifiques dans l'énergie, la logistique, la santé et les smart cities.",
    capabilities: [
      "Conseil et audit technologiques",
      "Conception d'architecture système",
      "Développement et validation de MVP",
      "Modernisation de systèmes existants",
      "Intégration et développement d'API",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <SectionWrapper>
        <SectionTitle
          overline="Solutions"
          title="Une technologie à fort impact"
          subtitle="Nous combinons une expertise hardware approfondie et une ingénierie logicielle moderne pour livrer des solutions complètes aux défis les plus urgents."
        />
      </SectionWrapper>

      {/* Solution cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <AnimatedCard key={solution.title} delay={index * 0.1} className="!p-0 overflow-hidden" >
              <div id={solution.id} className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Left: info */}
                <div className="lg:col-span-3 p-8 sm:p-10">
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan mb-6">
                    {solution.icon}
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {solution.description}
                  </p>
                  <CTAButton href="/contact" variant="secondary">
                    Discuter de votre projet
                  </CTAButton>
                </div>

                {/* Right: capabilities */}
                <div className="lg:col-span-2 bg-card/50 border-t lg:border-t-0 lg:border-l border-border p-8 sm:p-10">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-cyan mb-6">
                    Compétences
                  </h3>
                  <ul className="space-y-3">
                    {solution.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
