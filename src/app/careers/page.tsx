import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { openPositions } from "@/lib/constants";
import { MapPin, Briefcase, Heart, Rocket, BookOpen, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join TANGA GROUP and help build the next generation of African technology. View open positions in engineering, design, and operations.",
};

const perks = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Cutting-Edge Work",
    description: "Work on real embedded systems, IoT, and cloud projects.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Pan-African Impact",
    description: "Your work impacts communities across the continent.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Learning Budget",
    description: "Annual learning allowance for courses and conferences.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family.",
  },
];

const allPositions = [
  ...openPositions,
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Platform",
  },
  {
    title: "Product Designer",
    location: "Douala, Cameroon",
    type: "Full-time",
    department: "Design",
  },
  {
    title: "Firmware Engineer",
    location: "Douala, Cameroon",
    type: "Full-time",
    department: "Hardware",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 rounded-full mb-6">
            Careers
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Build the Future{" "}
            <span className="text-gradient">With Us</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We&apos;re looking for engineers, designers, and innovators who want
            to build world-class technology from Africa. Join a team that&apos;s
            pushing the boundaries of what&apos;s possible.
          </p>
        </div>
      </SectionWrapper>

      {/* Perks */}
      <SectionWrapper>
        <SectionTitle overline="Why Join Us" title="Perks & Culture" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <AnimatedCard key={perk.title} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan mb-4">
                {perk.icon}
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">
                {perk.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {perk.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper>
        <SectionTitle
          overline="Open Positions"
          title="Current Openings"
          subtitle="Don't see the right fit? Send us your resume anyway — we're always looking for exceptional talent."
        />
        <div className="space-y-4 max-w-3xl mx-auto">
          {allPositions.map((position, index) => (
            <AnimatedCard key={position.title + index} delay={index * 0.08}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-heading text-base font-semibold">
                    {position.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan" />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-cyan" />
                      {position.type}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple/10 text-purple text-xs">
                      {position.department}
                    </span>
                  </div>
                </div>
                <CTAButton href="/contact" variant="ghost">
                  Apply
                </CTAButton>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
