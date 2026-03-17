import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { products } from "@/lib/constants";
import { CheckCircle2, Zap, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover TANGA GROUP's product suite: TangaNode IoT gateway, TangaCloud data platform, and TangaConnect connectivity management.",
};

const productDetails = [
  {
    ...products[0],
    icon: <Zap className="w-10 h-10" />,
    specs: [
      { label: "Processor", value: "ARM Cortex-M4 / M7" },
      { label: "Connectivity", value: "LoRa, WiFi, BLE, Ethernet" },
      { label: "Storage", value: "32GB industrial SD" },
      { label: "Power", value: "Solar + Battery backup" },
      { label: "Rating", value: "IP67 dust & waterproof" },
    ],
  },
  {
    ...products[1],
    icon: <Globe className="w-10 h-10" />,
    specs: [
      { label: "Architecture", value: "Microservices on Kubernetes" },
      { label: "Database", value: "TimescaleDB + PostgreSQL" },
      { label: "Throughput", value: "10M+ events/day" },
      { label: "Latency", value: "< 500ms end-to-end" },
      { label: "Uptime SLA", value: "99.9%" },
    ],
  },
  {
    ...products[2],
    icon: <Shield className="w-10 h-10" />,
    specs: [
      { label: "Protocols", value: "LoRaWAN, NB-IoT, LTE-M" },
      { label: "Satellite", value: "Iridium, Starlink ready" },
      { label: "Failover", value: "Automatic multi-network" },
      { label: "Range", value: "Up to 15km (LoRa)" },
      { label: "Security", value: "AES-256 encryption" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Products"
          title="Our Product Suite"
          subtitle="From edge devices to cloud platforms, our integrated product suite covers the entire data pipeline for industrial IoT deployments."
        />
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {productDetails.map((product, index) => (
          <AnimatedCard key={product.name} delay={index * 0.1} className="!p-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product visual */}
              <div className="p-8 sm:p-12 bg-gradient-to-br from-cyan/5 to-purple/5 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-border">
                <div className="w-20 h-20 rounded-2xl bg-cyan/10 flex items-center justify-center text-cyan mb-6">
                  {product.icon}
                </div>
                <h2 className="font-heading text-3xl font-bold mb-2">
                  {product.name}
                </h2>
                <span className="text-sm text-cyan font-medium mb-4">
                  {product.tagline}
                </span>
                <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-card border border-border"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan" /> {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="p-8 sm:p-12">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-cyan mb-6">
                  Technical Specifications
                </h3>
                <div className="space-y-4">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">
                        {spec.label}
                      </span>
                      <span className="text-sm font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <CTAButton href="/contact">Request Datasheet</CTAButton>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
}
