import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { Target, Eye, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez TANGA GROUP : notre mission, nos valeurs et notre parcours dans la conception de technologies électroniques et numériques en Afrique.",
};

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Ingénierie d'abord",
    description:
      "Rigueur, fiabilité terrain et exigences industrielles, du prototype à l'exploitation.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation utile",
    description:
      "Nous concevons des solutions adaptées aux besoins réels : IoT, systèmes de pointage et plateformes numériques.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Transparence & accompagnement",
    description:
      "Une communication claire, un pilotage simple et un support fiable, du cadrage à la mise en production.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Fierté africaine",
    description:
      "Construire localement une technologie de classe mondiale, pensée pour les réalités du terrain.",
  },
];

const milestones = [
  {
    year: "2022",
    event:
      "Naissance de TANGA GROUP avec une mission claire : créer des technologies capables de résoudre des problèmes réels en Afrique.",
  },
  {
    year: "2023",
    event:
      "Premiers projets, premières collaborations et mise en place d'un pôle recherche & développement dédié à l'innovation électronique et logicielle.",
  },
  {
    year: "2024",
    event:
      "L'entreprise développe plusieurs solutions technologiques et renforce son expertise en électronique, IoT et plateformes numériques.",
  },
  {
    year: "2025",
    event:
      "Lancement de Feelback, une solution intelligente permettant aux entreprises de mesurer instantanément la satisfaction de leurs clients.",
  },
  {
    year: "2026",
    event:
      "TANGA GROUP poursuit son ambition : construire des technologies africaines capables de transformer les entreprises, les institutions et les services publics.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan">
            Notre histoire
          </span>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Construire la technologie{" "}
            <span className="text-gradient">depuis l&apos;Afrique, pour le monde</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            TANGA GROUP conçoit du matériel électronique et des solutions numériques
            pour des organisations exigeantes. Nous intervenons sur des systèmes IoT,
            des solutions de pointage et des plateformes de pilotage, avec une
            obsession : la fiabilité sur le terrain.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle overline="Valeurs" title="Ce qui nous anime" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <AnimatedCard key={value.title} delay={index * 0.1}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                {value.icon}
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle overline="Parcours" title="Notre parcours" />
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-border" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimatedCard
                  key={milestone.year}
                  delay={index * 0.08}
                  className="relative ml-12 !border-0 !bg-transparent !p-0 !shadow-none !backdrop-blur-none"
                >
                  <div className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-background bg-cyan" />
                  <span className="text-sm font-semibold text-cyan">
                    {milestone.year}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {milestone.event}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
