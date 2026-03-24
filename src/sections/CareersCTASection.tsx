"use client";

//import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
//import { openPositions } from "@/lib/constants";
//import { MapPin, Briefcase } from "lucide-react";

export default function CareersCTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-background to-purple/10" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan bg-cyan/10 rounded-full mb-4">
                  Nous recrutons
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Construisez l&apos;avenir{" "}
                  <span className="text-gradient">avec nous</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Rejoignez une équipe d&apos;ingénieurs, de designers et d&apos;innovateurs
                  qui construisent des plateformes technologiques de pointe en Afrique.
                  Postes à distance et sur site disponibles.
                </p>
                <CTAButton href="/careers">Voir les postes ouverts</CTAButton>
              </div>

              <div className="space-y-3">
                {/* {openPositions.map((position, index) => (
                  <motion.div
                    key={position.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-xl glass-card"
                  >
                    <h3 className="font-heading text-sm font-semibold mb-2">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-cyan" />
                        {position.type}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-cyan/10 text-cyan text-xs">
                        {position.department}
                      </span>
                    </div>
                  </motion.div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
