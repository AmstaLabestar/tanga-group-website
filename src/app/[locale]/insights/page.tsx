import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { blogPosts } from "@/lib/constants";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Analyses sur l'IoT, les systèmes embarqués et la création d'entreprises deep-tech en Afrique. Lisez les derniers articles de TANGA GROUP.",
};

const allPosts = [
  ...blogPosts,
  {
    title: "Concevoir des PCB pour les conditions climatiques africaines",
    excerpt:
      "Points clés sur les matériaux, vernis et la gestion thermique des PCB en environnements très chauds et humides.",
    date: "2026-02-20",
    readTime: "8 min de lecture",
    category: "Matériel",
  },
  {
    title: "L'essor de LoRaWAN dans l'agriculture africaine",
    excerpt:
      "Comment les réseaux LPWAN permettent l'agriculture de précision à travers le continent.",
    date: "2026-02-15",
    readTime: "5 min de lecture",
    category: "IoT",
  },
  {
    title: "Construire une entreprise deep-tech à Douala",
    excerpt:
      "Leçons tirées de la création d'une entreprise de systèmes embarqués dans la capitale économique du Cameroun.",
    date: "2026-02-08",
    readTime: "10 min de lecture",
    category: "Startup",
  },
];

export default function InsightsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Blog"
          title="Analyses & perspectives"
          subtitle="Approfondissements sur la technologie, l'ingénierie et la construction pour le marché africain."
        />
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured post */}
        <AnimatedCard className="mb-12 !p-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-64 lg:h-auto bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
              <span className="font-heading text-4xl font-bold text-gradient opacity-30">
                À LA UNE
              </span>
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan/10 text-cyan">
                  {allPosts[0].category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {allPosts[0].readTime}
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">
                {allPosts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {allPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(allPosts[0].date).toLocaleDateString("fr-FR", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-foreground transition-colors"
                >
                  Lire l&apos;article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.slice(1).map((post, index) => (
            <AnimatedCard key={post.title} delay={index * 0.05} className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple/10 text-purple">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan hover:text-foreground transition-colors"
                >
                  Lire <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
