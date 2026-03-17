import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { Target, Eye, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TANGA GROUP: our mission, team, values, and journey building deep-tech solutions from Africa.",
};

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Impact First",
    description:
      "Every product we build must solve a real problem for real people.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Engineering Excellence",
    description:
      "We hold ourselves to the highest standards of technical quality.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Radical Transparency",
    description:
      "Open communication with our team, customers, and partners.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "African Pride",
    description:
      "We prove that world-class technology can be built on the continent.",
  },
];

const milestones = [
  { year: "2019", event: "Founded in Douala, Cameroon" },
  { year: "2020", event: "First IoT deployment — smart agriculture pilot" },
  { year: "2021", event: "Launched TangaNode v1 edge device" },
  { year: "2022", event: "Expanded to 3 countries, 20+ team members" },
  { year: "2023", event: "TangaCloud platform launch, Series A funding" },
  { year: "2024", event: "50+ deployments across 8 African countries" },
  { year: "2025", event: "TangaConnect launch, satellite integration" },
  { year: "2026", event: "Scaling to 15 countries, 45+ team members" },
];

const team = [
  {
    name: "CEO & Co-founder",
    role: "Strategy & Vision",
    bio: "15+ years in technology and business development across Africa and Europe.",
  },
  {
    name: "CTO & Co-founder",
    role: "Technology & Engineering",
    bio: "Former embedded systems lead at a Fortune 500 company. Expert in IoT architecture.",
  },
  {
    name: "VP Engineering",
    role: "Platform & Cloud",
    bio: "Scaled cloud platforms processing billions of events. Background in telecom infrastructure.",
  },
  {
    name: "VP Hardware",
    role: "Embedded & Hardware",
    bio: "Designed industrial hardware for mining, energy, and agriculture applications.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Building Technology{" "}
            <span className="text-gradient">From Africa, For the World</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TANGA GROUP was founded with a simple belief: that the next wave of
            global technology innovation will come from Africa. We&apos;re a team
            of engineers, designers, and dreamers building the embedded systems,
            IoT platforms, and digital tools that make it possible.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <SectionTitle overline="Values" title="What Drives Us" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <AnimatedCard key={value.title} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan mb-4">
                {value.icon}
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <SectionTitle overline="Journey" title="Our Timeline" />
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimatedCard
                  key={milestone.year}
                  delay={index * 0.08}
                  className="!bg-transparent !backdrop-blur-none !border-0 !shadow-none ml-12 !p-0 relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[2.35rem] top-1 w-3 h-3 rounded-full bg-cyan border-2 border-background" />
                  <span className="text-sm font-semibold text-cyan">
                    {milestone.year}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {milestone.event}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper>
        <SectionTitle overline="Team" title="Leadership" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimatedCard key={member.name} delay={index * 0.1}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mb-4">
                <span className="font-heading text-lg font-bold text-cyan">
                  {member.name.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold">
                {member.name}
              </h3>
              <p className="text-xs text-cyan mt-1 mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
