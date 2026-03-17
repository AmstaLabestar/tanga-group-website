"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.04] via-background to-purple/[0.04]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple bg-purple/10 rounded-full mb-6">
            Notre vision
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug tracking-tight"
        >
          &ldquo;Nous croyons que la prochaine vague d&apos;innovation technologique
          mondiale viendra d&apos;Afrique.{" "}
          <span className="text-gradient">
            Notre mission est de construire l&apos;infrastructure
          </span>{" "}
          qui rend cela possible.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-muted-foreground text-sm"
        >
          — Direction de TANGA GROUP
        </motion.p>
      </div>
    </section>
  );
}
