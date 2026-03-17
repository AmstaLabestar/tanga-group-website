import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import CTAButton from "@/components/CTAButton";
import { TrendingUp, Users, Globe, Target, DollarSign, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Innovation & Investors",
  description:
    "Invest in Africa's technology future. Learn about TANGA GROUP's growth trajectory, market opportunity, and partnership programs.",
};

const metrics = [
  { label: "Revenue Growth", value: "3.5x", sublabel: "Year-over-year" },
  { label: "Market Size", value: "$15B", sublabel: "Addressable by 2030" },
  { label: "Deployments", value: "50+", sublabel: "Across 8 countries" },
  { label: "Team", value: "45+", sublabel: "Engineers & specialists" },
];

const partnershipTiers = [
  {
    tier: "Technology Partner",
    icon: <Lightbulb className="w-8 h-8" />,
    description: "Integrate your technology with our IoT ecosystem.",
    benefits: [
      "API & SDK access",
      "Co-marketing opportunities",
      "Joint customer pilots",
      "Technical support channel",
    ],
  },
  {
    tier: "Distribution Partner",
    icon: <Globe className="w-8 h-8" />,
    description: "Resell and deploy our products in your market.",
    benefits: [
      "Competitive margins",
      "Training & certification",
      "Marketing materials",
      "Dedicated account manager",
    ],
  },
  {
    tier: "Strategic Investor",
    icon: <DollarSign className="w-8 h-8" />,
    description: "Invest in the next wave of African deep-tech innovation.",
    benefits: [
      "Board advisory opportunity",
      "Quarterly investor updates",
      "Early access to new products",
      "Co-investment opportunities",
    ],
  },
];

const reasons = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Fastest Growing Market",
    description: "Africa's IoT market is growing at 25% CAGR, outpacing global averages.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "First-Mover Advantage",
    description: "We're building the standard for industrial IoT deployments across the continent.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "World-Class Team",
    description: "Engineers with experience at leading global technology companies.",
  },
];

export default function InnovationPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Innovation & Investors"
          title="Invest in Africa's Technology Future"
          subtitle="Join a growing ecosystem backing deep-tech innovation that addresses real-world challenges at continental scale."
        />
      </SectionWrapper>

      {/* Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-heading text-3xl sm:text-4xl font-bold text-gradient">
                {metric.value}
              </div>
              <div className="text-sm font-medium mt-1">{metric.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Invest */}
      <SectionWrapper>
        <SectionTitle
          overline="Why Us"
          title="Why Invest in TANGA GROUP"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedCard key={reason.title} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan mb-4">
                {reason.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Partnership Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h3 className="font-heading text-2xl font-bold text-center mb-10">
          Partnership Programs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnershipTiers.map((tier, index) => (
            <AnimatedCard key={tier.tier} delay={index * 0.1} className="flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center text-cyan mb-5">
                {tier.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">
                {tier.tier}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">
                {tier.description}
              </p>
              <ul className="space-y-2 mb-6">
                {tier.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <CTAButton href="/contact" variant="secondary">
                Learn More
              </CTAButton>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
