import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description:
    "Consultez les conditions d'utilisation du site web de TANGA GROUP.",
};

const sections = [
  {
    title: "1. Identification",
    paragraphs: [
      "Le présent site est édité par TANGA GROUP.",
      "Contact : contact@tangagroup.com | +226 67 40 20 30 | Ouagadougou, Burkina Faso.",
    ],
  },
  {
    title: "2. Objet",
    paragraphs: [
      "Les présentes conditions d'utilisation encadrent l'accès et l'utilisation du site web de TANGA GROUP.",
      "Dernière mise à jour : 24 mars 2026.",
    ],
  },
  {
    title: "3. Acceptation",
    paragraphs: [
      "En accédant au site, vous acceptez les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, vous devez cesser d'utiliser le site.",
    ],
  },
  {
    title: "4. Contenu du site",
    paragraphs: [
      "Les informations publiées sur ce site sont fournies à titre informatif. TANGA GROUP s'efforce de maintenir des contenus exacts et à jour, sans toutefois garantir l'absence totale d'erreur, d'omission ou d'indisponibilité.",
    ],
  },
  {
    title: "5. Propriété intellectuelle",
    paragraphs: [
      "Les textes, visuels, logos, éléments graphiques, vidéos, marques et contenus présents sur le site sont protégés par les règles applicables en matière de propriété intellectuelle.",
      "Sauf autorisation écrite préalable, toute reproduction, représentation, adaptation, diffusion ou exploitation de tout ou partie du site est interdite.",
    ],
  },
  {
    title: "6. Utilisation autorisée",
    paragraphs: [
      "Vous vous engagez à utiliser le site de manière licite, responsable et conforme à sa finalité.",
      "Sont notamment interdits : toute tentative d'accès non autorisé, toute perturbation du fonctionnement du site, toute extraction abusive de contenu ou toute utilisation frauduleuse des informations publiées.",
    ],
  },
  {
    title: "7. Liens externes",
    paragraphs: [
      "Le site peut contenir des liens vers des plateformes ou services tiers. TANGA GROUP n'est pas responsable du contenu, de la disponibilité ni des pratiques de ces sites externes.",
    ],
  },
  {
    title: "8. Limitation de responsabilité",
    paragraphs: [
      "TANGA GROUP ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le site, dans les limites permises par la réglementation applicable.",
    ],
  },
  {
    title: "9. Disponibilité",
    paragraphs: [
      "Le site peut être modifié, suspendu ou interrompu à tout moment, notamment pour maintenance, mise à jour ou en cas de contrainte technique.",
    ],
  },
  {
    title: "10. Droit applicable",
    paragraphs: [
      "Les présentes conditions sont régies par le droit applicable au Burkina Faso, sous réserve de toute règle impérative contraire applicable selon votre situation.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: [
      "Pour toute question relative aux présentes conditions d'utilisation, vous pouvez nous écrire à : contact@tangagroup.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Juridique"
          title="Conditions d'utilisation"
          subtitle="Cette page précise les règles d'accès et d'utilisation du site web de TANGA GROUP."
        />
      </SectionWrapper>

      <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl border p-8 sm:p-10">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 font-heading text-xl font-bold">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
