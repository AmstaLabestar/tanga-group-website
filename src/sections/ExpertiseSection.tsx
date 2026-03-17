"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { expertise } from "@/lib/constants";
import { Cpu, Wifi, Monitor, Code2 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-8 h-8" />,
  Wifi: <Wifi className="w-8 h-8" />,
  Monitor: <Monitor className="w-8 h-8" />,
  Code2: <Code2 className="w-8 h-8" />,
};

export default function ExpertiseSection() {
  return (
    <SectionWrapper id="expertise">
      <SectionTitle
        overline="Ce que nous faisons"
        title="Notre expertise"
        subtitle="Nous combinons une solide maîtrise du hardware avec des plateformes logicielles modernes pour livrer des solutions complètes."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertise.map((item, index) => (
          <AnimatedCard key={item.title} delay={index * 0.1}>
            <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan mb-5">
              {iconMap[item.icon]}
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
