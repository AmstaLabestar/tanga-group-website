import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { techPipeline } from "@/lib/constants";
import { Cpu, Radio, Cloud, BarChart3, Brain, Layers, Server, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore TANGA GROUP's technology stack: embedded firmware, connectivity protocols, cloud infrastructure, and AI-powered analytics.",
};

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-7 h-7" />,
  Radio: <Radio className="w-7 h-7" />,
  Cloud: <Cloud className="w-7 h-7" />,
  BarChart3: <BarChart3 className="w-7 h-7" />,
  Brain: <Brain className="w-7 h-7" />,
};

const techStack = [
  {
    category: "Embedded & Hardware",
    icon: <Cpu className="w-6 h-6" />,
    technologies: [
      "ARM Cortex M4/M7",
      "STM32, ESP32, nRF52",
      "FreeRTOS, Zephyr",
      "C/C++, Rust",
      "KiCad & Altium PCB design",
    ],
  },
  {
    category: "Connectivity",
    icon: <Radio className="w-6 h-6" />,
    technologies: [
      "LoRaWAN (The Things Network)",
      "NB-IoT / LTE-M",
      "WiFi / BLE 5.0",
      "MQTT / CoAP protocols",
      "Satellite (Iridium)",
    ],
  },
  {
    category: "Cloud & Backend",
    icon: <Server className="w-6 h-6" />,
    technologies: [
      "Kubernetes / Docker",
      "Node.js / Python / Go",
      "TimescaleDB / PostgreSQL",
      "Apache Kafka",
      "AWS / GCP infrastructure",
    ],
  },
  {
    category: "Platform & Frontend",
    icon: <Layers className="w-6 h-6" />,
    technologies: [
      "React / Next.js",
      "React Native",
      "D3.js / Recharts",
      "GraphQL / REST APIs",
      "WebSocket real-time",
    ],
  },
  {
    category: "AI & Analytics",
    icon: <Brain className="w-6 h-6" />,
    technologies: [
      "TensorFlow Lite (edge)",
      "Anomaly detection models",
      "Predictive maintenance",
      "Computer vision",
      "Time-series forecasting",
    ],
  },
  {
    category: "Security",
    icon: <Lock className="w-6 h-6" />,
    technologies: [
      "AES-256 encryption",
      "TLS 1.3 mutual auth",
      "Hardware security modules",
      "Secure boot chain",
      "GDPR-compliant data handling",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Technology"
          title="Our Technology Stack"
          subtitle="From low-level firmware to AI-powered analytics, we own every layer of the stack."
        />
      </SectionWrapper>

      {/* Pipeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h3 className="font-heading text-xl font-bold text-center mb-10">
          End-to-End Architecture
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techPipeline.map((step, index) => (
            <AnimatedCard key={step.step} delay={index * 0.1} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-cyan/10 flex items-center justify-center text-cyan mb-3">
                {iconMap[step.icon]}
              </div>
              <h4 className="font-heading text-sm font-bold mb-1">{step.step}</h4>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Tech stack grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h3 className="font-heading text-xl font-bold text-center mb-10">
          Technologies We Use
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group, index) => (
            <AnimatedCard key={group.category} delay={index * 0.08}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan">
                  {group.icon}
                </div>
                <h4 className="font-heading text-base font-semibold">
                  {group.category}
                </h4>
              </div>
              <ul className="space-y-2">
                {group.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-cyan" />
                    {tech}
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
