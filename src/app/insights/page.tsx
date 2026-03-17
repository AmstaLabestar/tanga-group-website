import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCard from "@/components/AnimatedCard";
import { blogPosts } from "@/lib/constants";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on IoT, embedded systems, and building deep-tech companies in Africa. Read the latest from TANGA GROUP.",
};

const allPosts = [
  ...blogPosts,
  {
    title: "Designing PCBs for African Climate Conditions",
    excerpt:
      "Key considerations for PCB materials, coatings, and thermal management in high-heat, high-humidity environments.",
    date: "2026-02-20",
    readTime: "8 min read",
    category: "Hardware",
  },
  {
    title: "The Rise of LoRaWAN in African Agriculture",
    excerpt:
      "How low-power wide-area networks are enabling precision farming across the continent.",
    date: "2026-02-15",
    readTime: "5 min read",
    category: "IoT",
  },
  {
    title: "Building a Deep-Tech Company in Douala",
    excerpt:
      "Lessons from founding an embedded systems company in Cameroon's economic capital.",
    date: "2026-02-08",
    readTime: "10 min read",
    category: "Startup",
  },
];

export default function InsightsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Blog"
          title="Insights & Perspectives"
          subtitle="Deep dives into technology, engineering, and building for the African market."
        />
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured post */}
        <AnimatedCard className="mb-12 !p-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-64 lg:h-auto bg-gradient-to-br from-cyan/10 to-purple/10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
              <span className="font-heading text-4xl font-bold text-gradient opacity-30">
                FEATURED
              </span>
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan/10 text-cyan">
                  {allPosts[0].category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {allPosts[0].readTime}
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">
                {allPosts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {allPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(allPosts[0].date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-foreground transition-colors"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.slice(1).map((post, index) => (
            <AnimatedCard key={post.title} delay={index * 0.05} className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple/10 text-purple">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan hover:text-foreground transition-colors"
                >
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
