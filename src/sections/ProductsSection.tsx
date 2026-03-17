"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { products } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductsSection() {
  return (
    <SectionWrapper id="products">
      <SectionTitle
        overline="Nos produits"
        title="Une technologie pensée pour l'échelle"
        subtitle="Des appareils edge aux plateformes cloud, notre suite couvre toute la chaîne de la donnée."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <AnimatedCard key={product.name} delay={index * 0.1} className="flex flex-col">
            {/* Product icon placeholder */}
            <div className="w-full h-40 rounded-xl bg-gradient-to-br from-cyan/5 to-purple/5 border border-border mb-6 flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-gradient">
                {product.name}
              </span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-cyan mb-2">
              {product.tagline}
            </span>
            <h3 className="font-heading text-xl font-bold mb-3">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {product.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-foreground transition-colors"
            >
              En savoir plus <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
