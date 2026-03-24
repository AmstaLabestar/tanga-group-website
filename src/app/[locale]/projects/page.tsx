import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { CheckCircle2, Monitor, Wifi, Cpu, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les projets TANGA GROUP : digitalisation, IoT, solutions électroniques intelligentes et transformation numérique.",
};

const axes = [
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Digitalisation des organisations",
    description:
      "Solutions pour automatiser les processus, améliorer la gestion interne et renforcer l'efficacité opérationnelle.",
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Internet des objets (IoT)",
    description:
      "Objets connectés collectant et transmettant des données en temps réel pour faciliter la prise de décision.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Solutions électroniques intelligentes",
    description:
      "Systèmes électroniques innovants pour améliorer l'expérience utilisateur et l'efficacité des services.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Transformation numérique",
    description:
      "Accompagnement des entreprises et institutions dans l'adoption de technologies modernes pour moderniser leurs activités.",
  },
];

const methodology = [
  {
    step: "Analyse du besoin",
    detail: "Comprendre le terrain, les contraintes et les objectifs.",
  },
  { step: "Conception", detail: "Choix techniques, architecture et maquettage." },
  {
    step: "Développement",
    detail: "Hardware, software et intégrations selon le périmètre.",
  },
  { step: "Tests", detail: "Validation fonctionnelle, robustesse et qualité." },
  {
    step: "Déploiement",
    detail: "Mise en production, formation et accompagnement.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Projets"
          title="Des projets technologiques orientés résultats"
          subtitle="Chez TANGA GROUP, chaque projet part d'un problème concret et se transforme en une solution fiable, adaptée au contexte et au terrain."
        />
      </SectionWrapper>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {axes.map((axis, index) => (
            <AnimatedCard key={axis.title} delay={index * 0.08}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                {axis.icon}
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold">
                {axis.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {axis.description}
              </p>
            </AnimatedCard>
          ))}
        </div>

        <div className="glass rounded-2xl border border-border p-8 sm:p-10">
          <h3 className="mb-6 font-heading text-xl font-bold">
            Une méthodologie rigoureuse
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {methodology.map((m) => (
              <div key={m.step} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{m.step}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <CTAButton href="/contact">Discuter de votre projet</CTAButton>
        </div>
      </div>
    </div>
  );
}
