import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { Cpu, Wifi, Monitor, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Des solutions technologiques pour digitaliser les organisations: IoT, électronique embarquée, systèmes de pointage et plateformes numériques.",
};

const solutions = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Digitalisation des organisations",
    id: "digitalisation",
    description:
      "Automatisez vos processus, améliorez la gestion interne et gagnez en efficacité opérationnelle grâce à des outils numériques conçus sur mesure.",
    capabilities: [
      "Audit et cadrage des besoins",
      "Applications web et tableaux de bord",
      "Outils de gestion et de reporting",
      "Intégrations et automatisations",
      "Accompagnement au déploiement",
    ],
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Internet des objets (IoT)",
    id: "iot",
    description:
      "Concevez des objets connectés capables de collecter et transmettre des données en temps réel pour faciliter la prise de décision.",
    capabilities: [
      "Capteurs, passerelles et collecte terrain",
      "Connectivité et transmission sécurisée",
      "Plateforme de supervision en temps réel",
      "Alertes, indicateurs et historiques",
      "Maintenance et évolutions",
    ],
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Solutions électroniques intelligentes",
    id: "electronique",
    description:
      "Développement de systèmes électroniques innovants pour améliorer l&apos;expérience utilisateur et l&apos;efficacité des services.",
    capabilities: [
      "Conception de cartes et PCB",
      "Prototypage et tests",
      "Intégration capteurs et périphériques",
      "Firmware et communication",
      "Industrialisation et documentation",
    ],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Transformation numérique",
    id: "transformation",
    description:
      "Accompagnement des entreprises et institutions dans l&apos;adoption de technologies modernes pour moderniser leurs activités.",
    capabilities: [
      "Stratégie et feuille de route",
      "MVP, itérations et validation",
      "Formation et conduite du changement",
      "Sécurité, conformité et bonnes pratiques",
      "Support et amélioration continue",
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
          title="Des solutions conçues pour le terrain"
          subtitle="Notre approche: partir d&apos;un besoin concret, concevoir une solution adaptée, puis accompagner le déploiement et l&apos;adoption."
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
                    Discuter de votre besoin
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
