"use client"

import Link from "next/link"
import Image from "next/image"
import {
  CheckCircle,
  Shield,
  Truck,
  Users,
  MessageSquare,
  FileText,
  Package,
  Ship,
  ArrowRight,
  Award,
  Factory,
} from "lucide-react"
import { I18nProvider, useI18n } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { HeroWave, PalmLeafLeft, PalmLeafRight, AbstractDots } from "@/components/decorative-elements"

const WHATSAPP_LINK = "https://wa.me/6282284233857?text=Hello%2C%20I%27m%20interested%20in%20your%20desiccated%20coconut%20products.%20Please%20send%20me%20pricing%20information."

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function HeroSection() {
  const { t } = useI18n()
  
  return (
    <section className="relative min-h-[550px] overflow-hidden lg:min-h-[650px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Indonesian Coconut Plantation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[550px] max-w-6xl items-center px-4 py-16 lg:min-h-[650px] lg:px-6 lg:py-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-8">
          {/* Text Content - Left */}
          <div className="text-left">
            <AnimatedSection animation="fade-up" delay={0}>
              <p className="text-sm font-medium text-white/90 sm:text-base md:text-lg">
                The Leading Supplier of
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="text-primary drop-shadow-lg">Desiccated Coconut</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                From Indonesia
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <p className="mt-4 max-w-md text-sm text-white/80 leading-relaxed sm:mt-5 sm:text-base">
                {t("hero.subheadline")}
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-6 sm:mt-8">
                <Button asChild size="lg" className="gap-2 rounded-full bg-primary px-6 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-8 sm:text-base">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Get Inquiry
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
          

        </div>
      </div>
      
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <HeroWave className="h-14 w-full text-primary sm:h-16 lg:h-20" />
      </div>
    </section>
  )
}

function TrustBar() {
  const { t } = useI18n()
  
  return (
    <section className="relative border-b border-border bg-background py-6 lg:py-8">
      <AnimatedSection animation="fade-up">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide sm:text-xs">{t("trust.certifications")}</p>
                <p className="text-xs font-semibold text-foreground sm:text-sm">HACCP / ISO 22000 / FSSC 22000</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border hidden lg:block" />
            <div className="flex items-center gap-3">
              <Factory className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide sm:text-xs">{t("trust.capacity")}</p>
                <p className="text-xs font-semibold text-foreground sm:text-sm">{t("trust.capacityValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

function AboutCompanySection() {
  return (
    <section className="relative overflow-hidden bg-background py-14 lg:py-20">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-32 w-32 rounded-br-full bg-primary/5" />
      <div className="absolute right-0 bottom-0 h-24 w-24 rounded-tl-full bg-primary/5" />
      <AbstractDots className="absolute right-8 top-8 h-20 w-20 text-primary opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary shadow-xl">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Tropica Coco Coconut Plantation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary p-4 shadow-lg lg:-bottom-6 lg:-right-6">
                <div className="flex items-center gap-3 text-primary-foreground">
                  <Shield className="h-8 w-8" />
                  <div>
                    <p className="text-2xl font-bold">10+</p>
                    <p className="text-xs opacity-90">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Content */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">About Tropica Coco</span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                PT Tropica Coconut Indonesia
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                PT Tropica Coconut Indonesia is an Indonesian exporter focused on supplying desiccated coconut for international food and ingredient markets. We support importers, distributors, and food manufacturers with export-oriented coordination, consistent product specifications, and responsive communication throughout the sourcing process.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-secondary/50 p-4">
                  <Users className="h-6 w-6 text-primary" />
                  <p className="mt-2 text-sm font-semibold text-foreground">Global Reach</p>
                  <p className="text-xs text-muted-foreground">Serving clients in 30+ countries</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <p className="mt-2 text-sm font-semibold text-foreground">Quality First</p>
                  <p className="text-xs text-muted-foreground">Certified facilities only</p>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild variant="outline" className="gap-2">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const { t } = useI18n()
  
  const products = [
    {
      name: t("products.highFat"),
      image: "/images/high-fat-coconut.jpg",
      whatsappMsg: "Hello, I'm interested in High Fat Desiccated Coconut. Please send me pricing information.",
      specs: [
        { label: t("products.fat"), value: "65% ±3%" },
        { label: t("products.moisture"), value: "MAX 3%" },
        { label: t("products.grade"), value: "Fine / Medium" },
        { label: t("products.color"), value: "Natural White" },
        { label: t("products.impurities"), value: "Not more than 8 pcs/100g" },
        { label: t("products.ph"), value: "6.1 – 6.7" },
      ],
    },
    {
      name: t("products.lowFat"),
      image: "/images/low-fat-coconut.jpg",
      whatsappMsg: "Hello, I'm interested in Low Fat Desiccated Coconut. Please send me pricing information.",
      specs: [
        { label: t("products.fat"), value: "45% ±3%" },
        { label: t("products.moisture"), value: "MAX 3%" },
        { label: t("products.grade"), value: "Fine / Extra Fine" },
        { label: t("products.color"), value: "Natural White" },
        { label: t("products.impurities"), value: "Not more than 8 pcs/100g" },
        { label: t("products.ph"), value: "6.1 – 6.7" },
      ],
    },
  ]

  return (
    <section className="relative overflow-hidden bg-background py-14 lg:py-20">
      {/* Decorative Elements */}
      <PalmLeafLeft className="absolute -left-12 top-8 h-48 w-24 text-primary opacity-[0.08] sm:-left-16 sm:h-64 sm:w-32" />
      <PalmLeafRight className="absolute -right-12 bottom-8 h-48 w-24 text-primary opacity-[0.08] sm:-right-16 sm:h-64 sm:w-32" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #2E7D32 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Premium Quality</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("products.title")}
          </h2>
        </AnimatedSection>
        
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
              <Card className="group overflow-hidden border-2 border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl">
                <div className="aspect-video relative overflow-hidden bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base sm:text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {product.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="rounded-lg bg-secondary/50 p-2 transition-colors duration-300 hover:bg-secondary sm:p-2.5">
                        <p className="text-[10px] text-muted-foreground sm:text-xs">{spec.label}</p>
                        <p className="text-xs font-medium text-foreground sm:text-sm">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="mt-4 w-full gap-2 transition-all duration-300 hover:scale-[1.02]">
                    <a
                      href={`https://wa.me/6282284233857?text=${encodeURIComponent(product.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      {t("products.cta")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  const { t } = useI18n()
  
  const reasons = [
    {
      icon: Shield,
      title: t("why.quality"),
      description: t("why.qualityDesc"),
    },
    {
      icon: Users,
      title: t("why.reliable"),
      description: t("why.reliableDesc"),
    },
    {
      icon: FileText,
      title: t("why.docs"),
      description: t("why.docsDesc"),
    },
    {
      icon: MessageSquare,
      title: t("why.communication"),
      description: t("why.communicationDesc"),
    },
  ]

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-14 lg:py-20">
      {/* Decorative Background */}
      <AbstractDots className="absolute right-0 top-0 h-28 w-28 text-primary sm:h-40 sm:w-40" />
      <AbstractDots className="absolute bottom-0 left-0 h-28 w-28 text-primary rotate-180 sm:h-40 sm:w-40" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Our Advantages</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("why.title")}
          </h2>
        </AnimatedSection>
        
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 100}>
              <Card className="group h-full border-2 border-transparent text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function SupplyChainSection() {
  const { t } = useI18n()
  
  return (
    <section className="relative overflow-hidden bg-background py-14 lg:py-20">
      <PalmLeafRight className="absolute -right-8 top-1/2 h-40 w-20 -translate-y-1/2 text-primary opacity-[0.08] sm:h-56 sm:w-28" />
      
      {/* Corner accent */}
      <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-primary/5" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Truck className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("supply.title")}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed sm:text-base">
            {t("supply.desc")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

function DocumentationSection() {
  const { t } = useI18n()
  
  const documents = [
    { key: "invoice", label: t("docs.invoice") },
    { key: "packing", label: t("docs.packing") },
    { key: "bol", label: t("docs.bol") },
    { key: "coo", label: t("docs.coo") },
    { key: "phyto", label: t("docs.phyto") },
    { key: "coa", label: t("docs.coa") },
  ]

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-14 lg:py-20">
      <AbstractDots className="absolute -left-8 top-8 h-28 w-28 text-primary opacity-30 sm:h-36 sm:w-36" />
      
      {/* Decorative line */}
      <div className="absolute right-0 top-1/2 h-px w-24 -translate-y-1/2 bg-gradient-to-l from-primary/20 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <FileText className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("docs.title")}
          </h2>
        </AnimatedSection>
        
        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 md:grid-cols-3">
          {documents.map((doc, index) => (
            <AnimatedSection key={doc.key} animation="fade-up" delay={index * 80}>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{doc.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function PackagingSection() {
  const { t } = useI18n()
  
  return (
    <section className="relative overflow-hidden bg-background py-14 lg:py-20">
      <PalmLeafLeft className="absolute -left-10 bottom-0 h-48 w-24 text-primary opacity-[0.08] sm:-left-12 sm:h-60 sm:w-30" />
      
      {/* Corner accent */}
      <div className="absolute right-0 bottom-0 h-20 w-20 rounded-tl-full bg-primary/5" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Package className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("packaging.title")}
          </h2>
        </AnimatedSection>
        
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { icon: Package, title: "Packing Style", desc: t("packaging.style") },
            { icon: Ship, title: "Shipping Terms", desc: t("packaging.shipping") },
            { icon: Truck, title: "Containers", desc: t("packaging.containers") },
          ].map((item, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 100}>
              <Card className="group h-full border-2 border-transparent text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                <CardContent className="pt-6">
                  <item.icon className="mx-auto h-7 w-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                  <p className="mt-4 text-sm font-medium text-foreground">{item.title}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { t } = useI18n()
  
  return (
    <section className="relative overflow-hidden bg-primary py-14 lg:py-20">
      {/* Decorative waves */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 h-20 w-full sm:h-28" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white" />
        </svg>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
            {t("cta.title")}
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="gap-2 rounded-full px-6 transition-all duration-300 hover:scale-105 sm:px-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t("cta.button")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full border-white/30 bg-transparent px-6 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:px-8">
              <Link href="/contact">
                <ArrowRight className="h-4 w-4" />
                {t("nav.contact")}
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function HomeContent() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutCompanySection />
        <ProductsSection />
        <WhyChooseUsSection />
        <SupplyChainSection />
        <DocumentationSection />
        <PackagingSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  )
}
