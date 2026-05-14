"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { PalmLeafLeft, AbstractDots } from "@/components/decorative-elements"

const WHATSAPP_LINK = "https://wa.me/6282284233857?text=Hello%2C%20I%27m%20interested%20in%20your%20desiccated%20coconut%20products."

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function Footer() {
  const { t } = useI18n()

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/indonesian-desiccated-coconut-supplier", label: "B2B Supplier" },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/30">
      {/* Decorative Elements */}
      <PalmLeafLeft className="absolute -left-16 top-0 h-64 w-32 text-primary opacity-10" />
      <AbstractDots className="absolute right-0 bottom-20 h-32 w-32 text-primary opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Tropica Coco"
                width={140}
                height={42}
                className="h-10"
                style={{ width: 'auto', height: 'auto', maxHeight: '2.5rem' }}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium desiccated coconut supplier from Indonesia. Reliable supply, consistent quality, and export-ready documentation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-[#25D366]"
                >
                  <WhatsAppIcon className="h-4 w-4 mt-0.5 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
                  <span>+62 822 8423 3857</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sales@tropicacoconut.com" 
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span>sales@tropicacoconut.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+6282284233857" 
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span>+62 822 8423 3857</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{t("trust.certifications")}</h3>
            <div className="flex flex-wrap gap-2">
              {["HACCP", "ISO 22000", "FSSC 22000"].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                >
                  {cert}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                All products meet international food safety standards.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 lg:mt-12">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tropica Coco. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
