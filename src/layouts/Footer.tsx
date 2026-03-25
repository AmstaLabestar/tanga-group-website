import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerSections = [
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Actualités", href: "/insights" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Systèmes embarqués", href: "/solutions#embedded" },
      { label: "Solutions IoT", href: "/solutions#iot" },
      { label: "Plateformes numériques", href: "/solutions#platforms" },
      { label: "Développement sur mesure", href: "/solutions#custom" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Technologie", href: "/technology" },
      { label: "Produits", href: "/products" },
      { label: "Projets", href: "/projects" },
      { label: "Innovation", href: "/innovation" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-border bg-background">
                <Image
                  src="/logo.jpg"
                  alt="Logo TANGA GROUP"
                  fill
                  sizes="36px"
                  className="object-contain p-1.5"
                />
              </div>
              <span className="font-heading text-lg font-bold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              L&apos;ingénierie de la prochaine génération technologique en Afrique.
              Nous concevons des systèmes embarqués, des solutions IoT et des
              plateformes numériques à fort impact.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {Object.entries(siteConfig.links).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm capitalize text-muted-foreground transition-colors hover:text-cyan"
                >
                  {name}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-heading text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
