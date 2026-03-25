import { Metadata } from "next";
import AnimatedCard from "@/components/AnimatedCard";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";
import { techPipeline } from "@/lib/constants";
import {
  BarChart3,
  Brain,
  Cloud,
  Cpu,
  Radio,
  Server,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Systemes embarques et technologies IoT au Burkina Faso",
  description:
    "Decouvrez les technologies maitrisees par TANGA GROUP au Burkina Faso : systemes embarques, IoT, cloud, analyse de donnees et plateformes connectees pour les organisations.",
};

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-7 w-7" />,
  Radio: <Radio className="h-7 w-7" />,
  Cloud: <Cloud className="h-7 w-7" />,
  BarChart3: <BarChart3 className="h-7 w-7" />,
  Brain: <Brain className="h-7 w-7" />,
};

const techStack = [
  {
    category: "Systemes embarques",
    icon: <Cpu className="h-6 w-6" />,
    technologies: [
      "Conception de circuits et cartes PCB",
      "Integration capteurs et peripheriques",
      "Prototypage, tests et validation",
      "Firmware et communication",
      "Industrialisation produit",
    ],
  },
  {
    category: "Internet des objets (IoT)",
    icon: <Radio className="h-6 w-6" />,
    technologies: [
      "Collecte et transmission temps reel",
      "Objets connectes et passerelles",
      "Supervision et alertes",
      "Securisation des echanges",
      "Maintenance et evolutivite",
    ],
  },
  {
    category: "Plateformes cloud",
    icon: <Server className="h-6 w-6" />,
    technologies: [
      "Applications web et outils de gestion",
      "Centralisation et analyse des donnees",
      "Tableaux de bord et reporting",
      "Acces, roles et tracabilite",
      "APIs et integrations",
    ],
  },
  {
    category: "Analyse de donnees",
    icon: <Brain className="h-6 w-6" />,
    technologies: [
      "Exploitation et visualisation",
      "Indicateurs et tendances",
      "Aide a la decision",
      "Qualite et fiabilite des donnees",
      "Rapports et alertes",
    ],
  },
  {
    category: "Solutions integrees",
    icon: <Sparkles className="h-6 w-6" />,
    technologies: [
      "Hardware + software + UX",
      "Approche orientee usage",
      "Deploiement et adoption",
      "Documentation et formation",
      "Support et amelioration continue",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Technologie"
          title="Une expertise complete en IoT et systemes embarques"
          subtitle="TANGA GROUP maitrise des technologies complementaires pour concevoir au Burkina Faso des solutions fiables, connectees et performantes."
        />
      </SectionWrapper>

      <div className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-10 text-center font-heading text-xl font-bold">
          Architecture de bout en bout
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {techPipeline.map((step, index) => (
            <AnimatedCard key={step.step} delay={index * 0.1} className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                {iconMap[step.icon]}
              </div>
              <h4 className="mb-1 font-heading text-sm font-bold">{step.step}</h4>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h3 className="mb-10 text-center font-heading text-xl font-bold">
          Nos piliers technologiques
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, index) => (
            <AnimatedCard key={group.category} delay={index * 0.08}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
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
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1 w-1 rounded-full bg-cyan" />
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
