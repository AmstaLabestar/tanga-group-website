import { Metadata } from "next";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";
import { CheckCircle2, Cpu, Monitor, Sparkles, Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions IoT et transformation digitale au Burkina Faso",
  description:
    "TANGA GROUP accompagne les entreprises du Burkina Faso avec des solutions IoT, des systemes embarques, des outils de digitalisation et des plateformes numeriques concues pour le terrain.",
};

const solutions = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Digitalisation des organisations",
    id: "digitalisation",
    description:
      "Nous aidons les entreprises et institutions du Burkina Faso a digitaliser leurs processus, structurer leur gestion interne et mieux piloter leurs operations.",
    capabilities: [
      "Audit et cadrage des besoins",
      "Applications web et tableaux de bord",
      "Outils de gestion et de reporting",
      "Integrations et automatisations",
      "Accompagnement au deploiement",
    ],
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    title: "Internet des objets (IoT)",
    id: "iot",
    description:
      "Nous concevons des solutions IoT au Burkina Faso pour collecter, transmettre et exploiter les donnees terrain en temps reel.",
    capabilities: [
      "Capteurs, passerelles et collecte terrain",
      "Connectivite et transmission securisee",
      "Plateforme de supervision en temps reel",
      "Alertes, indicateurs et historiques",
      "Maintenance et evolutions",
    ],
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Systemes embarques intelligents",
    id: "electronique",
    description:
      "Nous developpons des systemes electroniques et embarques pour automatiser les services, fiabiliser les operations et connecter les equipements.",
    capabilities: [
      "Conception de cartes et PCB",
      "Prototypage et tests",
      "Integration capteurs et peripheriques",
      "Firmware et communication",
      "Industrialisation et documentation",
    ],
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Transformation numerique",
    id: "transformation",
    description:
      "Nous accompagnons la transformation digitale des organisations au Burkina Faso avec une approche pragmatique, progressive et orientee resultats.",
    capabilities: [
      "Strategie et feuille de route",
      "MVP, iterations et validation",
      "Formation et conduite du changement",
      "Securite, conformite et bonnes pratiques",
      "Support et amelioration continue",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Solutions"
          title="Solutions IoT et digitales concues pour le Burkina Faso"
          subtitle="Notre approche consiste a partir d'un besoin concret, concevoir une solution adaptee au terrain, puis accompagner son deploiement et son adoption."
        />
      </SectionWrapper>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <AnimatedCard
              key={solution.title}
              delay={index * 0.1}
              className="!overflow-hidden !p-0"
            >
              <div id={solution.id} className="grid grid-cols-1 gap-0 lg:grid-cols-5">
                <div className="p-8 sm:p-10 lg:col-span-3">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                    {solution.icon}
                  </div>
                  <h2 className="mb-4 font-heading text-2xl font-bold sm:text-3xl">
                    {solution.title}
                  </h2>
                  <p className="mb-8 leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <CTAButton href="/contact" variant="secondary">
                    Discuter de votre besoin
                  </CTAButton>
                </div>

                <div className="border-border bg-card/50 p-8 sm:p-10 lg:col-span-2 lg:border-l lg:border-t-0 border-t">
                  <h3 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wide text-cyan">
                    Competences
                  </h3>
                  <ul className="space-y-3">
                    {solution.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
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
