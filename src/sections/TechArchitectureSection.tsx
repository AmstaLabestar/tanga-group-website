"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { techPipeline } from "@/lib/constants";
import { motion } from "framer-motion";
import { Cpu, Radio, Cloud, BarChart3, Brain, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-7 h-7" />,
  Radio: <Radio className="w-7 h-7" />,
  Cloud: <Cloud className="w-7 h-7" />,
  BarChart3: <BarChart3 className="w-7 h-7" />,
  Brain: <Brain className="w-7 h-7" />,
};

export default function TechArchitectureSection() {
  return (
    <SectionWrapper id="architecture" className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/[0.02] to-transparent pointer-events-none" />

      <SectionTitle
        overline="Comment ça marche"
        title="Architecture technologique"
        subtitle="Notre chaîne de bout en bout transforme des données brutes en intelligence actionnable."
      />

      {/* Desktop: horizontal pipeline */}
      <div className="hidden md:flex items-start justify-between gap-4 relative">
        {/* Connecting line */}
        <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-cyan/20 via-cyan/40 to-purple/20" />

        {techPipeline.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col items-center text-center flex-1 relative z-10"
          >
            <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center text-cyan mb-4 shadow-lg shadow-cyan/5">
              {iconMap[step.icon]}
            </div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide mb-1">
              {step.step}
            </h3>
            <p className="text-xs text-cyan font-medium mb-2">{step.label}</p>
            <p className="text-xs text-muted-foreground max-w-[160px] leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical pipeline */}
      <div className="md:hidden space-y-6">
        {techPipeline.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="w-14 h-14 shrink-0 rounded-xl bg-card border border-border flex items-center justify-center text-cyan">
              {iconMap[step.icon]}
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold">{step.step}</h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </div>
            {index < techPipeline.length - 1 && (
              <ArrowRight className="w-4 h-4 text-cyan/30 shrink-0 ml-auto" />
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
