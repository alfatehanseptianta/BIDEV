"use client"

import Link from "next/link"
import { MapPin, Mail, Phone, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  institute: [
    { href: "/about", labelKey: "aboutUs" },
    { href: "/board-of-experts", labelKey: "boardOfExperts" },
    { href: "/expertise", labelKey: "expertiseAreas" },
    { href: "/how-we-work", labelKey: "howWeWork" },
    { href: "/annual-report", labelKey: "annualReport" },
    { href: "/careers", labelKey: "careers" },
  ],
  services: [
    { href: "/services", labelKey: "allServices" },
    { href: "/prakarsa", labelKey: "prakarsa" },
    { href: "/case-studies", labelKey: "caseStudies" },
    { href: "/for-government", labelKey: "forGovernment" },
    { href: "/for-private", labelKey: "forPrivateSector" },
  ],
  resources: [
    { href: "/publications", labelKey: "publications" },
    { href: "/newsletter", labelKey: "newsletter" },
    { href: "/downloads", labelKey: "downloadCenter" },
    { href: "/events", labelKey: "events" },
    { href: "/media", labelKey: "mediaKit" },
  ],
  trust: [
    { href: "/integrity", labelKey: "integrityCenter" },
    { href: "/quality", labelKey: "qualityStandards" },
    { href: "/standards", labelKey: "ethicsStandards" },
    { href: "/data-policy", labelKey: "dataPolicy" },
  ],
}

const contactBlocks = [
  { labelKey: "government", email: "gov@bidev.id", phone: "+62 22 123 4567" },
  { labelKey: "privateInvestor", email: "invest@bidev.id", phone: "+62 22 123 4568" },
  { labelKey: "media", email: "media@bidev.id", phone: "+62 22 123 4569" },
  { labelKey: "academic", email: "research@bidev.id", phone: "+62 22 123 4570" },
]

export function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer data-no-auto-translate className="bg-[#050807] text-white border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 sm:px-10 sm:py-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">{t("cta.title")}</p>
            <p className="mt-2 text-lg text-white/80">
              {t("cta.description")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/newsletter"
              className="inline-flex items-center rounded-full bg-white text-[#0F3D2E] px-5 py-2 text-sm font-semibold"
            >
              {t("cta.newsletter")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/request"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t("cta.shareBrief")}
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-10 mt-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#0F3D2E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">BIDEV</span>
                <span className="text-[10px] text-white/60 block -mt-0.5">{t("brand.tagline")}</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t("brand.description")}
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-[0.2em]">
              {t("sections.institute")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.institute.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {t(`links.${link.labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-[0.2em]">
              {t("sections.services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {t(`links.${link.labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-[0.2em]">
              {t("sections.resources")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {t(`links.${link.labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-[0.2em]">
              {t("sections.trust")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.trust.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {t(`links.${link.labelKey}`)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 text-white/70 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <p>
                  {t("address.line1")}
                  <br />
                  {t("address.line2")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@bidev.id" className="hover:text-white">
                  info@bidev.id
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+62221234567" className="hover:text-white">
                  +62 22 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {contactBlocks.map((block) => (
            <div key={block.labelKey} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4">
              <p className="text-xs font-semibold text-[#B89B5E] uppercase tracking-[0.2em] mb-2">
                {t(`contact.${block.labelKey}`)}
              </p>
              <a href={`mailto:${block.email}`} className="text-sm text-white/80 hover:text-white block">
                {block.email}
              </a>
              <a href={`tel:${block.phone}`} className="text-xs text-white/60 hover:text-white">
                {block.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white">
              {t("legal.privacyPolicy")}
            </Link>
            <Link href="/terms" className="hover:text-white">
              {t("legal.termsOfService")}
            </Link>
            <Link href="/cookies" className="hover:text-white">
              {t("legal.cookiePolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
