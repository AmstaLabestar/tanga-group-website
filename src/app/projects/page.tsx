import Image from "next/image";
import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez les solutions déployées par TANGA GROUP : IoT, systèmes RFID, biométrie et digitalisation en Afrique.",
};

const stats = [
  { label: "Entreprises équipées", value: "+50" },
  { label: "Dispositifs déployés", value: "+200" },
  { label: "Pays", value: "3+" },
];

const realProjects = [
  {
    title: "Pointage RFID en entreprise",
    location: "Ouagadougou",
    image: "/image/RFID_Badge.jpg",
    description:
      "Mise en place d’un système de pointage par badge pour automatiser la gestion des présences et éliminer les fraudes.",
    impact: [
      "Suivi en temps réel des employés",
      "Réduction des erreurs de pointage",
      "Gain de temps pour les RH",
    ],
  },
  {
    title: "Contrôle d’accès sécurisé",
    location: "Bobo-Dioulasso",
    image: "/image/serrure.jpeg",
    description:
      "Installation de serrures intelligentes avec badge pour sécuriser l’accès aux locaux sensibles.",
    impact: [
      "Accès sécurisé et contrôlé",
      "Historique des entrées/sorties",
      "Gestion centralisée",
    ],
  },
  {
    title: "Pointage biométrique",
    location: "Guinée",
    image: "/image/Fringer.jpg",
    description:
      "Déploiement d’un système biométrique pour identifier les employés de manière fiable.",
    impact: [
      "Identification unique",
      "Zéro fraude",
      "Rapports automatiques",
    ],
  },
  {
    title: "Boîtier Feelback",
    location: "Ouagadougou",
    image: "/image/Fedback.jpg",
    description:
      "Solution de collecte d’avis clients en temps réel dans des points de service.",
    impact: [
      "Mesure instantanée de satisfaction",
      "Amélioration continue",
      "Décisions basées sur les données",
    ],
  },
];

const methodology = [
  { step: "Analyse", detail: "Comprendre votre besoin terrain" },
  { step: "Conception", detail: "Architecture adaptée et scalable" },
  { step: "Développement", detail: "Hardware + software intégré" },
  { step: "Déploiement", detail: "Installation et formation" },
  { step: "Suivi", detail: "Maintenance et évolutions" },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Projets"
          title="Des solutions déjà déployées sur le terrain"
          subtitle="Nos systèmes sont utilisés chaque jour par des entreprises, écoles et institutions pour automatiser, sécuriser et piloter leurs activités."
        />
      </SectionWrapper>

      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-6 px-4 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-xl border p-6">
            <p className="text-3xl font-bold text-cyan">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl space-y-16 px-4 pb-20">
        {realProjects.map((project, index) => (
          <AnimatedCard
            key={project.title}
            delay={index * 0.1}
            className="!p-0 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full lg:min-h-[28rem]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="mb-2 text-xs font-medium text-cyan">
                  {project.location}
                </span>

                <h2 className="mb-4 font-heading text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="space-y-3">
                  {project.impact.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <div className="mx-auto mb-20 max-w-6xl px-4">
        <div className="glass rounded-2xl border p-8">
          <h3 className="mb-6 text-xl font-bold">Une méthodologie éprouvée</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {methodology.map((m) => (
              <div key={m.step}>
                <p className="font-semibold">{m.step}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-24 text-center">
        <h3 className="mb-4 text-2xl font-bold">Vous avez un projet ?</h3>
        <p className="mb-6 text-muted-foreground">
          Discutons de votre besoin et construisons une solution adaptée.
        </p>
        <CTAButton href="/contact">Discuter de votre projet</CTAButton>
      </div>
    </div>
  );
}
