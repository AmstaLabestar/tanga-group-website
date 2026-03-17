import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Embedded Systems", href: "/solutions#embedded" },
      { label: "IoT Solutions", href: "/solutions#iot" },
      { label: "Digital Platforms", href: "/solutions#platforms" },
      { label: "Custom Development", href: "/solutions#custom" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Products", href: "/products" },
      { label: "Projects", href: "/projects" },
      { label: "Innovation", href: "/innovation" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#08080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center font-bold text-background text-sm">
                TG
              </div>
              <span className="font-heading font-bold text-lg">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Engineering Africa&apos;s next generation of technology. We design
              embedded systems, IoT solutions and digital platforms that drive
              real-world impact.
            </p>
            <div className="flex items-center gap-4">
              {Object.entries(siteConfig.links).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan transition-colors text-sm capitalize flex items-center gap-1"
                >
                  {name}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
