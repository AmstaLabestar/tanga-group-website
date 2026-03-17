import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { deployments } from "@/lib/constants";
import { MapPin, Activity, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore TANGA GROUP's portfolio of real-world IoT and embedded systems deployments across Africa.",
};

const additionalProjects = [
  {
    title: "Smart Grid Monitoring",
    location: "Ivory Coast",
    metric: "350 substations",
    description: "Real-time grid performance monitoring for the national electricity utility.",
    category: "Energy",
  },
  {
    title: "Cold Chain Monitoring",
    location: "Ghana",
    metric: "99.2% compliance",
    description: "Temperature monitoring for pharmaceutical distribution across 120 locations.",
    category: "Healthcare",
  },
  {
    title: "Environmental Sensing Network",
    location: "DR Congo",
    metric: "800 sensors",
    description: "Air quality and environmental data collection across mining regions.",
    category: "Environment",
  },
  {
    title: "Smart Metering Pilot",
    location: "Tanzania",
    metric: "10,000 meters",
    description: "Advanced metering infrastructure for water and electricity utilities.",
    category: "Utilities",
  },
];

const allProjects = [
  ...deployments.map((d) => ({ ...d, category: "Infrastructure" })),
  ...additionalProjects,
];

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Portfolio"
          title="Our Projects"
          subtitle="Real-world deployments solving critical challenges across the African continent."
        />
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Filter bar */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            Filter:
          </div>
          {["All", "Infrastructure", "Energy", "Healthcare", "Environment", "Utilities"].map(
            (filter) => (
              <button
                key={filter}
                className="px-4 py-2 text-xs font-medium rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-cyan/30 transition-colors whitespace-nowrap first:bg-cyan/10 first:text-cyan first:border-cyan/30"
              >
                {filter}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.05}>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple/10 text-purple">
                  {project.category}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-cyan" />
                  {project.metric}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton href="/contact">Discuss Your Project</CTAButton>
        </div>
      </div>
    </div>
  );
}
