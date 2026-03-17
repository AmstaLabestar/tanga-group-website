"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez saisir une adresse email valide"),
  company: z.string().optional(),
  subject: z.string().min(5, "L'objet doit contenir au moins 5 caractères"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "contact@tangagroup.com",
    href: "mailto:contact@tangagroup.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Téléphone",
    value: "+237 6XX XXX XXX",
    href: "tel:+237600000000",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Bureau",
    value: "Douala, Cameroun",
    href: "#",
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24">
      <SectionWrapper>
        <SectionTitle
          overline="Contact"
          title="Contactez-nous"
          subtitle="Prêt à discuter de votre prochain projet? Écrivez-nous et notre équipe vous répondra sous 24 heures."
        />
      </SectionWrapper>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info sidebar */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-4 rounded-xl glass-card"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="h-48 rounded-xl glass-card flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan/30 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">
                  Douala, Cameroon
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-12 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-cyan mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Message envoyé !
                </h3>
                <p className="text-muted-foreground">
                  Merci pour votre message. Notre équipe vous répondra sous 24 heures.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass-card rounded-2xl p-8 sm:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                    >
                      Prénom *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...register("firstName")}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/30 transition-all"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  {/* Last name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                    >
                      Nom *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...register("lastName")}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/30 transition-all"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/30 transition-all"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      Entreprise
                    </label>
                    <input
                      id="company"
                      type="text"
                      {...register("company")}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/30 transition-all"
                      placeholder="Votre entreprise"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Objet *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/30 transition-all"
                    placeholder="Comment pouvons-nous aider?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan/30 transition-all resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-gradient-brand text-background hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
