import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { Cpu, Wifi, Monitor, Code2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Deep-tech solutions in embedded systems, IoT, digital platforms, and custom technology development. Built for Africa, ready for the world.",
};

const solutions = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Embedded Systems",
    id: "embedded",
    description:
      "Custom hardware and firmware design for industrial monitoring, precision agriculture, and automation systems.",
    capabilities: [
      "PCB design & prototyping",
      "Firmware development (C/C++, Rust)",
      "Sensor integration & calibration",
      "Low-power optimization",
      "Hardware compliance & certification",
    ],
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "IoT Solutions",
    id: "iot",
    description:
      "End-to-end IoT ecosystems that connect physical devices to cloud intelligence, with reliable connectivity in any environment.",
    capabilities: [
      "LoRa, NB-IoT, Satellite connectivity",
      "Edge computing & gateway devices",
      "Device provisioning & management",
      "OTA firmware updates",
      "Fleet monitoring dashboards",
    ],
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Digital Platforms",
    id: "platforms",
    description:
      "Scalable web and mobile platforms with advanced analytics, real-time dashboards, and decision-support systems.",
    capabilities: [
      "Real-time data visualization",
      "RESTful & GraphQL APIs",
      "Role-based access control",
      "Automated reporting & alerts",
      "Mobile-first responsive design",
    ],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Custom Development",
    id: "custom",
    description:
      "Tailored technology development for organizations with unique needs in energy, logistics, healthcare, and smart cities.",
    capabilities: [
      "Technology consulting & audit",
      "System architecture design",
      "MVP development & validation",
      "Legacy system modernization",
      "Integration & API development",
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
          title="Technology That Drives Real Impact"
          subtitle="We combine deep hardware expertise with modern software engineering to deliver complete technology solutions for Africa's most pressing challenges."
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
                    Discuss Your Project
                  </CTAButton>
                </div>

                {/* Right: capabilities */}
                <div className="lg:col-span-2 bg-card/50 border-t lg:border-t-0 lg:border-l border-border p-8 sm:p-10">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-cyan mb-6">
                    Capabilities
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
