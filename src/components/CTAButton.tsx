import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200",
        size === "default" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" &&
          "bg-gradient-brand text-background hover:opacity-90 hover:shadow-lg hover:shadow-cyan/20",
        variant === "secondary" &&
          "border border-border text-foreground hover:bg-white/5 hover:border-cyan/30",
        variant === "ghost" &&
          "text-cyan hover:text-foreground hover:bg-cyan/10",
        className
      )}
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
