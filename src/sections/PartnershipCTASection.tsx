"use client";

import SectionWrapper from "@/components/SectionWrapper";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Handshake, TrendingUp, Globe } from "lucide-react";

const partnerBenefits = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Pan-African Reach",
    description: "Access growing markets across 8+ African countries.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Scalable Technology",
    description: "Battle-tested IoT & embedded platforms ready for scale.",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Strategic Partnership",
    description: "Co-develop solutions for energy, agriculture & smart cities.",
  },
];

export default function PartnershipCTASection() {
  return (
    <SectionWrapper id="partnership" className="relative">
      <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Accent glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 rounded-full mb-4">
                Partner With Us
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Invest in Africa&apos;s{" "}
                <span className="text-gradient">Technology Future</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Join a growing ecosystem of investors and partners backing
                deep-tech innovation on the continent. Whether you&apos;re looking to
                invest, distribute, or co-develop, we&apos;re ready to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/innovation">Investor Information</CTAButton>
                <CTAButton href="/contact" variant="secondary">
                  Become a Partner
                </CTAButton>
              </div>
            </div>

            <div className="space-y-4">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border"
                >
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
