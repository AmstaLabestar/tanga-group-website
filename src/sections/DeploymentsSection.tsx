"use client";

import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { deployments } from "@/lib/constants";
import { MapPin, Activity } from "lucide-react";

export default function DeploymentsSection() {
  return (
    <SectionWrapper id="deployments">
      <SectionTitle
        overline="Impact"
        title="Real-World Deployments"
        subtitle="Our technology is deployed across the African continent, solving critical infrastructure challenges."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {deployments.map((deployment, index) => (
          <AnimatedCard key={deployment.title} delay={index * 0.1}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-heading text-lg font-semibold">
                  {deployment.title}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-cyan" />
                  {deployment.location}
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan/10 text-cyan text-xs font-semibold">
                <Activity className="w-3 h-3" />
                {deployment.metric}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {deployment.description}
            </p>
          </AnimatedCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
