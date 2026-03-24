import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { ExternalLink, Mic, Smartphone, Tv } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Retrouvez les passages média et les prises de parole de TANGA GROUP sur YouTube, à la télévision et sur TikTok.",
};

const mediaPosts = [
  {
    title: "Passage à RFI Challenge App Afrique",
    description:
      "Une intervention autour de l'entreprise, de son parcours et de la vision portée par TANGA GROUP.",
    platform: "YouTube",
    format: "Interview média",
    href: "https://www.youtube.com/watch?v=5q9xTpdeYj8&t=12s",
    cta: "Voir sur YouTube",
    icon: <Mic className="h-6 w-6" />,
  },
  {
    title: "Émission télé sur Samuze BF1",
    description:
      "Un passage télévisé présentant l'activité de l'entreprise et son positionnement dans l'innovation.",
    platform: "YouTube",
    format: "Télévision",
    href: "https://www.youtube.com/watch?v=FG_NSs-FBE0",
    cta: "Regarder l'émission",
    icon: <Tv className="h-6 w-6" />,
  },
  {
    title: "Vidéo TikTok sur l'entreprise",
    description:
      "Une prise de parole directe pour présenter TANGA GROUP, son ambition et ce que nous construisons.",
    platform: "TikTok",
    format: "Prise de parole",
    href: "https://vt.tiktok.com/ZSuvbDM1Y/",
    cta: "Voir sur TikTok",
    icon: <Smartphone className="h-6 w-6" />,
  },
];

export default function InsightsPage() {
  const featuredPost = mediaPosts[0];
  const otherPosts = mediaPosts.slice(1);

  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Actualités"
          title="On parle de TANGA GROUP"
          subtitle="Retrouvez ici nos passages média, nos interviews et nos prises de parole autour de l'entreprise et de ses innovations."
        />
      </SectionWrapper>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <AnimatedCard className="mb-12 !p-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex min-h-72 items-center justify-center border-b border-border bg-gradient-to-br from-cyan/10 to-purple/10 lg:border-b-0 lg:border-r">
              <div className="text-center">
                <span className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-background/70 text-cyan">
                  {featuredPost.icon}
                </span>
                <p className="font-heading text-4xl font-bold text-gradient opacity-90">
                  À LA UNE
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                  {featuredPost.platform}
                </span>
                <span className="rounded-full bg-purple/10 px-3 py-1 text-xs font-semibold text-purple">
                  {featuredPost.format}
                </span>
              </div>

              <h2 className="mb-4 font-heading text-2xl font-bold">
                {featuredPost.title}
              </h2>

              <p className="mb-8 leading-relaxed text-muted-foreground">
                {featuredPost.description}
              </p>

              <a
                href={featuredPost.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-foreground"
              >
                {featuredPost.cta}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherPosts.map((post, index) => (
            <AnimatedCard
              key={post.title}
              delay={index * 0.05}
              className="flex flex-col"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                {post.icon}
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                  {post.platform}
                </span>
                <span className="rounded-full bg-purple/10 px-3 py-1 text-xs font-semibold text-purple">
                  {post.format}
                </span>
              </div>

              <h3 className="mb-3 font-heading text-xl font-semibold leading-snug">
                {post.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </p>

              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-foreground"
              >
                {post.cta}
                <ExternalLink className="h-4 w-4" />
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
