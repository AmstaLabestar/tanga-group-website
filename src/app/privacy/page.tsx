import { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Consultez la politique de confidentialité de TANGA GROUP concernant la collecte et l'utilisation des données personnelles.",
};

const sections = [
  {
    title: "1. Identité du responsable",
    paragraphs: [
      "Le site est exploité par TANGA GROUP.",
      "Contact : contact@tangagroup.com | +226 67 40 20 30 | Ouagadougou, Burkina Faso.",
    ],
  },
  {
    title: "2. Objet",
    paragraphs: [
      "La présente politique de confidentialité explique comment TANGA GROUP peut collecter, utiliser et protéger les données personnelles transmises via ce site web.",
      "Dernière mise à jour : 24 mars 2026.",
    ],
  },
  {
    title: "3. Données collectées",
    paragraphs: [
      "Nous pouvons collecter les informations que vous nous transmettez volontairement, notamment via le formulaire de contact : nom, prénom, adresse email, entreprise, objet de la demande et contenu du message.",
      "Nous pouvons également recevoir certaines données techniques liées à la navigation, telles que l'adresse IP, le type d'appareil, le navigateur utilisé ou les pages consultées, selon les outils techniques utilisés pour faire fonctionner et sécuriser le site.",
    ],
  },
  {
    title: "4. Finalités du traitement",
    paragraphs: [
      "Les données collectées sont utilisées pour répondre à vos demandes, échanger avec vous au sujet de nos services, améliorer l'expérience utilisateur, assurer la sécurité du site et gérer nos relations commerciales.",
      "Nous n'utilisons pas vos données à des fins incompatibles avec les objectifs pour lesquels elles ont été collectées.",
    ],
  },
  {
    title: "5. Partage des données",
    paragraphs: [
      "Vos données ne sont pas vendues à des tiers.",
      "Elles peuvent être partagées uniquement avec des prestataires techniques ou partenaires intervenant pour l'hébergement, la maintenance, la messagerie ou l'exploitation du site, dans la limite nécessaire à leurs missions.",
    ],
  },
  {
    title: "6. Conservation",
    paragraphs: [
      "Les données sont conservées pendant une durée raisonnable au regard de la finalité poursuivie, des obligations légales applicables et de la nécessité de suivi des échanges.",
    ],
  },
  {
    title: "7. Sécurité",
    paragraphs: [
      "TANGA GROUP met en oeuvre des mesures techniques et organisationnelles raisonnables pour protéger les données personnelles contre l'accès non autorisé, la perte, l'altération ou la divulgation.",
    ],
  },
  {
    title: "8. Vos droits",
    paragraphs: [
      "Vous pouvez demander l'accès, la rectification, la suppression ou la limitation du traitement de vos données, sous réserve des obligations légales applicables.",
      "Pour toute demande relative à vos données personnelles, vous pouvez nous contacter à l'adresse : contact@tangagroup.com.",
    ],
  },
  {
    title: "9. Cookies et services tiers",
    paragraphs: [
      "Le site peut utiliser des composants techniques nécessaires à son bon fonctionnement ainsi que des liens vers des services tiers, notamment des réseaux sociaux ou plateformes externes.",
      "Lorsque vous quittez notre site via un lien externe, les politiques de confidentialité du service tiers concerné s'appliquent.",
    ],
  },
  {
    title: "10. Modifications",
    paragraphs: [
      "Cette politique peut être mise à jour à tout moment afin de refléter l'évolution du site, de nos services ou des exigences légales.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Juridique"
          title="Politique de confidentialité"
          subtitle="Cette page décrit la manière dont TANGA GROUP traite les données personnelles transmises via ce site."
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
