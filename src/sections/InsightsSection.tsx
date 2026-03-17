"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { blogPosts } from "@/lib/constants";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export default function InsightsSection() {
  return (
    <SectionWrapper id="insights">
      <SectionTitle
        overline="Actualités"
        title="Derniers articles"
        subtitle="Analyses sur la technologie, l'innovation et la construction pour le marché africain."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <AnimatedCard key={post.title} delay={index * 0.1} className="flex flex-col">
            {/* Category + reading time header */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple/10 text-purple">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>

            <h3 className="font-heading text-lg font-semibold mb-3 leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <Link
                href="/insights"
                className="inline-flex items-center gap-1 text-sm font-semibold text-cyan hover:text-foreground transition-colors"
              >
                Lire <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          Voir tous les articles <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
