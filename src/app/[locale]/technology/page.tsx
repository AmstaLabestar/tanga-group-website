import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { techPipeline } from "@/lib/constants";
import { Cpu, Radio, Cloud, BarChart3, Brain, Server, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Technologie",
  description:
    "Les technologies maîtrisées par TANGA GROUP: électronique embarquée, IoT, plateformes cloud, analyse de données et solutions intégrées.",
};

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-7 h-7" />,
  Radio: <Radio className="w-7 h-7" />,
  Cloud: <Cloud className="w-7 h-7" />,
  BarChart3: <BarChart3 className="w-7 h-7" />,
  Brain: <Brain className="w-7 h-7" />,
};

const techStack = [
  {
    category: "Électronique embarquée",
    icon: <Cpu className="w-6 h-6" />,
    technologies: [
      "Conception de circuits et cartes PCB",
      "Intégration capteurs et périphériques",
      "Prototypage, tests et validation",
      "Firmware et communication",
      "Industrialisation produit",
    ],
  },
  {
    category: "Internet des objets (IoT)",
    icon: <Radio className="w-6 h-6" />,
    technologies: [
      "Collecte et transmission temps réel",
      "Objets connectés et passerelles",
      "Supervision et alertes",
      "Sécurisation des échanges",
      "Maintenance et évolutivité",
    ],
  },
  {
    category: "Plateformes cloud",
    icon: <Server className="w-6 h-6" />,
    technologies: [
      "Applications web et outils de gestion",
      "Centralisation et analyse des données",
      "Tableaux de bord et reporting",
      "Accès, rôles et traçabilité",
      "APIs et intégrations",
    ],
  },
  {
    category: "Analyse de données",
    icon: <Brain className="w-6 h-6" />,
    technologies: [
      "Exploitation et visualisation",
      "Indicateurs et tendances",
      "Aide à la décision",
      "Qualité et fiabilité des données",
      "Rapports et alertes",
    ],
  },
  {
    category: "Solutions intégrées",
    icon: <Sparkles className="w-6 h-6" />,
    technologies: [
      "Hardware + software + UX",
      "Approche orientée usage",
      "Déploiement et adoption",
      "Documentation et formation",
      "Support et amélioration continue",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Technologie"
          title="Une expertise complète, du hardware au logiciel"
          subtitle="L&apos;innovation chez TANGA GROUP repose sur la maîtrise de technologies complémentaires pour livrer des solutions fiables et performantes."
        />
      </SectionWrapper>

      {/* Pipeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h3 className="font-heading text-xl font-bold text-center mb-10">
          Architecture de bout en bout
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techPipeline.map((step, index) => (
            <AnimatedCard key={step.step} delay={index * 0.1} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-cyan/10 flex items-center justify-center text-cyan mb-3">
                {iconMap[step.icon]}
              </div>
              <h4 className="font-heading text-sm font-bold mb-1">{step.step}</h4>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Tech stack grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h3 className="font-heading text-xl font-bold text-center mb-10">
          Nos piliers technologiques
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group, index) => (
            <AnimatedCard key={group.category} delay={index * 0.08}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan">
                  {group.icon}
                </div>
                <h4 className="font-heading text-base font-semibold">
                  {group.category}
                </h4>
              </div>
              <ul className="space-y-2">
                {group.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-cyan" />
                    {tech}
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
