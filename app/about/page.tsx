"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Shield, FileText, MessageSquare, Globe, Handshake } from "lucide-react"
import { I18nProvider, useI18n } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { PalmLeafLeft, PalmLeafRight, AbstractDots, HeroWave } from "@/components/decorative-elements"

const WHATSAPP_LINK = "https://wa.me/6282284233857?text=Hello%2C%20I%27m%20interested%20in%20partnering%20with%20Tropica%20Coco.%20Please%20provide%20more%20information."

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function AboutContent() {
  const { t } = useI18n()
  
  const strengths = [
    { icon: Globe, text: t("about.strength1") },
    { icon: FileText, text: t("about.strength2") },
    { icon: Shield, text: t("about.strength3") },
    { icon: MessageSquare, text: t("about.strength4") },
  ]

  const values = [
    {
      icon: Handshake,
      title: "Trust & Reliability",
      description: "We build lasting partnerships based on transparency and consistent delivery.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every shipment meets international food safety standards and specifications.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We prioritize your needs with responsive communication and flexible solutions.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30 py-14 lg:py-20">
          <PalmLeafRight className="absolute -right-12 top-0 h-48 w-24 text-primary opacity-[0.08]" />
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">About Us</span>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {t("about.title")}
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                {t("about.subtitle")}
              </p>
            </AnimatedSection>
          </div>
          <HeroWave className="absolute -bottom-1 left-0 right-0 h-10 w-full text-background sm:h-14" />
        </section>

        {/* About Description */}
        <section className="relative overflow-hidden bg-background py-14 lg:py-20">
          <AbstractDots className="absolute left-0 top-8 h-24 w-24 text-primary opacity-20" />
          <div className="absolute right-0 top-1/2 h-px w-16 -translate-y-1/2 bg-gradient-to-l from-primary/20 to-transparent" />
          
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
                <AnimatedSection animation="fade-up" className="space-y-5">
                  <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                    {t("about.desc1")}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                    {t("about.desc2")}
                  </p>
                </AnimatedSection>
                <div className="space-y-3">
                  {strengths.map((strength, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                      <div className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 sm:h-10 sm:w-10">
                          <strength.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{strength.text}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative overflow-hidden bg-secondary/30 py-14 lg:py-20">
          <PalmLeafLeft className="absolute -left-12 bottom-0 h-48 w-24 text-primary opacity-[0.08]" />
          <div className="absolute left-0 top-1/3 h-16 w-16 rounded-br-full bg-primary/5" />
          
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <AnimatedSection animation="fade-up" className="text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Our Values</span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Core Values
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                The principles that guide every aspect of our business relationships.
              </p>
            </AnimatedSection>
            
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3 sm:gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 100}>
                  <Card className="group h-full border-2 border-transparent text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                    <CardContent className="pt-6 pb-5">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold text-foreground sm:text-base">{value.title}</h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trading Partner */}
        <section className="relative overflow-hidden bg-background py-14 lg:py-20">
          <AbstractDots className="absolute right-0 top-1/2 h-32 w-32 -translate-y-1/2 text-primary opacity-[0.12]" />
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <AnimatedSection animation="fade-up" className="mx-auto max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-5 sm:p-8">
                <h2 className="text-lg font-bold text-foreground sm:text-xl lg:text-2xl">
                  Why Choose an Export Trading Partner?
                </h2>
                <div className="mt-5 space-y-3">
                  {[
                    "Access to multiple certified manufacturers through a single point of contact",
                    "Expert handling of all export documentation and compliance requirements",
                    "Reduced risk through our quality assurance and supplier verification processes",
                    "Flexible order quantities with consolidated shipping options",
                    "Dedicated support in your language and time zone",
                  ].map((point, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 80}>
                      <div className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0 sm:h-5 sm:w-5" />
                        <p className="text-sm text-muted-foreground">{point}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-primary py-14 lg:py-18">
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute bottom-0 left-0 h-20 w-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
            <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold text-primary-foreground sm:text-2xl lg:text-3xl">
                Ready to Partner With Us?
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/80 sm:text-base">
                Contact us today to discuss your desiccated coconut requirements.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button asChild size="lg" variant="secondary" className="gap-2 rounded-full px-6 transition-all duration-300 hover:scale-105">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Get Quote via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 rounded-full border-white/30 bg-transparent px-6 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function AboutPage() {
  return (
    <I18nProvider>
      <AboutContent />
    </I18nProvider>
  )
}
