"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InsightsSection() {
  return (
    <section id="insights" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/[0.02] to-transparent" />
        <motion.div
          aria-hidden="true"
          className="absolute -top-8 right-[-18%] h-[520px] w-[760px] opacity-70"
          style={{
            backgroundImage: "url(/insights-circuit.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right top",
          }}
          initial={{ x: 0 }}
          animate={{ x: [0, 120] }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-end gap-10 sm:mb-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan">
              Actualités
              <span className="text-cyan/40">|</span>
              <span className="font-semibold normal-case tracking-normal text-muted-foreground">
                Médias, interviews et prises de parole
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Découvrez nos dernières apparitions publiques
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Retrouvez les vidéos, interviews et contenus où TANGA GROUP
              présente son parcours, ses ambitions et ses innovations.
            </p>
          </div>

          <div className="flex lg:col-span-5 lg:justify-end">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan/30 hover:bg-white/5"
            >
              Voir toutes les actualités <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
