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
  Leaf,
  Globe,
  ThermometerSun,
  ChevronDown,
  Cookie,
  IceCream,
  Wheat,
  Heart,
  Coffee,
} from "lucide-react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { I18nProvider } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { HeroWave, PalmLeafLeft, PalmLeafRight, AbstractDots } from "@/components/decorative-elements"

const WHATSAPP_LINK = "https://wa.me/6282284233857?text=Hello%2C%20I%27m%20interested%20in%20your%20desiccated%20coconut%20products.%20Please%20send%20me%20specifications%20and%20pricing."
const EMAIL = "sales@tropicacoconut.com"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden lg:min-h-[700px]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Indonesian Coconut Plantation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </div>
      
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-5xl items-center px-4 py-16 lg:min-h-[700px] lg:px-6 lg:py-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="text-left">
            <AnimatedSection animation="fade-up" delay={0}>
              <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
                Trusted Indonesian Supplier
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                <span className="text-white">Indonesian</span>{" "}
                <span className="text-primary">Desiccated Coconut</span>{" "}
                <span className="text-white">Supplier for Global Markets</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="mt-5 max-w-lg text-base text-white/80 leading-relaxed sm:text-lg">
                Supplying food, health, and wellness applications with clear specifications, consistent quality, and responsive coordination.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button asChild size="lg" className="gap-2 rounded-full bg-primary px-6 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:px-8">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="h-5 w-5" />
                    Request Specification
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 rounded-full border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:px-8">
                  <Link href="/contact">
                    Contact Export Team
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="scale" delay={300} className="relative hidden lg:block">
            <div className="relative flex items-center justify-center">
              <Image
                src="/images/hero-coconut-product.jpg"
                alt="Premium Desiccated Coconut Products"
                width={450}
                height={380}
                className="relative z-10 rounded-2xl object-contain drop-shadow-2xl"
                priority
              />
              <div className="absolute inset-0 z-0 rounded-full bg-primary/20 blur-3xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <HeroWave className="h-16 w-full text-primary sm:h-20 lg:h-24" />
      </div>
    </section>
  )
}

// Introduction Section
function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <PalmLeafLeft className="absolute -left-12 top-8 h-48 w-24 text-primary opacity-[0.06]" />
      <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-primary/5" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            About Indonesia
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Indonesia: A Global Leader in Coconut Production
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mt-8 space-y-4 text-center text-muted-foreground leading-relaxed">
            <p>
              Indonesia stands as one of the world&apos;s largest coconut-producing countries, with a tropical climate that supports year-round cultivation. The country&apos;s extensive coconut plantations, particularly in Sulawesi, Sumatra, and Java, produce high-quality coconuts that meet international food industry standards.
            </p>
            <p>
              Desiccated coconut from Indonesia is widely recognized for its consistent quality, natural white color, and fresh coconut aroma. These characteristics make it a preferred ingredient for food manufacturers, bakeries, confectionery companies, and health food brands across the globe.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Globe, label: "Global Export", value: "50+ Countries" },
              { icon: Factory, label: "Production", value: "500+ MT/Month" },
              { icon: Award, label: "Quality", value: "HACCP Certified" },
            ].map((stat, index) => (
              <div key={index} className="rounded-xl border border-border bg-secondary/30 p-4 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <stat.icon className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-xs text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// About Product Section
function AboutProductSection() {
  const applications = [
    { icon: Cookie, name: "Bakery", desc: "Breads, cakes, pastries" },
    { icon: Heart, name: "Confectionery", desc: "Chocolates, candies, bars" },
    { icon: Wheat, name: "Snacks & Cereals", desc: "Granola, muesli, snack bars" },
    { icon: Leaf, name: "Plant-Based Foods", desc: "Vegan products, dairy alternatives" },
    { icon: IceCream, name: "Frozen Desserts", desc: "Ice cream, frozen yogurt" },
    { icon: Coffee, name: "Health Products", desc: "Supplements, protein bars" },
  ]

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
      <AbstractDots className="absolute right-0 top-0 h-32 w-32 text-primary" />
      <AbstractDots className="absolute bottom-0 left-0 h-32 w-32 text-primary rotate-180" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Our Product
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            What is Desiccated Coconut?
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground leading-relaxed">
            <p>
              Desiccated coconut is dried, shredded coconut meat that has been processed to remove moisture while retaining natural flavor and nutritional value. It is available in various grades and fat content options to suit different food manufacturing requirements.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={150}>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Fine Grade & Medium Grade available",
              "High Fat & Low Fat options",
              "Natural white color",
              "Fresh coconut aroma",
              "Hygienic processing",
              "Export-ready packaging",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 rounded-lg bg-background p-3 shadow-sm">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={200} className="mt-12">
          <h3 className="text-center text-lg font-semibold text-foreground">Common Applications</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 50}>
                <Card className="group border-2 border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                      <app.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{app.name}</p>
                      <p className="text-xs text-muted-foreground">{app.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Product Specifications Section
function SpecificationsSection() {
  const specs = [
    { parameter: "Moisture", value: "Max 3%" },
    { parameter: "Fat Content (High Fat)", value: "60-68%" },
    { parameter: "Fat Content (Low Fat)", value: "40-50%" },
    { parameter: "Color", value: "Natural White" },
    { parameter: "Shelf Life", value: "12 Months" },
    { parameter: "Grade Options", value: "Fine, Medium, Coarse" },
    { parameter: "Total Plate Count", value: "Max 5,000 cfu/g" },
    { parameter: "Yeast & Mold", value: "Max 100 cfu/g" },
    { parameter: "E. coli", value: "Negative/g" },
    { parameter: "Salmonella", value: "Negative/25g" },
    { parameter: "Packaging", value: "25kg Multi-wall Paper Bags" },
    { parameter: "Container Load", value: "15-17 MT / 20ft FCL" },
  ]

  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <PalmLeafRight className="absolute -right-12 top-1/2 h-56 w-28 -translate-y-1/2 text-primary opacity-[0.06]" />
      <div className="absolute left-0 bottom-0 h-24 w-24 rounded-tr-full bg-primary/5" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Technical Data
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Product Specifications
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Our desiccated coconut products meet international food safety standards and specifications.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-background shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground sm:px-6">Parameter</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground sm:px-6">Specification</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index} className="border-b border-border last:border-0 transition-colors hover:bg-secondary/30">
                    <td className="px-4 py-3 text-sm text-muted-foreground sm:px-6">{spec.parameter}</td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground sm:px-6">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={150} className="mt-6 text-center">
          <Button asChild className="gap-2 rounded-full">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Request Full Specification Sheet
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Why Choose Indonesian Coconut Section
function WhyIndonesiaSection() {
  const reasons = [
    {
      icon: Leaf,
      title: "Stable Coconut Supply",
      description: "Indonesia's vast coconut plantations ensure consistent raw material availability throughout the year.",
    },
    {
      icon: ThermometerSun,
      title: "Tropical Climate Advantage",
      description: "The ideal tropical climate produces coconuts with optimal oil content and fresh flavor profiles.",
    },
    {
      icon: Globe,
      title: "Competitive Export Capability",
      description: "Strategic port locations and established logistics networks support efficient global distribution.",
    },
    {
      icon: Factory,
      title: "Food Manufacturing Suitability",
      description: "Products are specifically processed to meet the technical requirements of food manufacturers.",
    },
    {
      icon: Shield,
      title: "Consistent Production Standards",
      description: "Modern processing facilities maintain quality consistency across production batches.",
    },
    {
      icon: Award,
      title: "International Certifications",
      description: "Facilities comply with HACCP, ISO 22000, and other international food safety standards.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #2E7D32 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Why Indonesia
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Why Choose Indonesian Desiccated Coconut?
          </h2>
        </AnimatedSection>
        
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 80}>
              <Card className="group h-full border-2 border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                <CardContent className="p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                    <reason.icon className="h-5 w-5 text-primary" />
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

// Quality & Export Commitment Section
function QualityCommitmentSection() {
  const commitments = [
    { icon: Shield, title: "Quality Control", desc: "Rigorous testing at every production stage" },
    { icon: Factory, title: "Hygienic Production", desc: "Clean room facilities and strict sanitation" },
    { icon: MessageSquare, title: "Responsive Communication", desc: "Dedicated export team for inquiries" },
    { icon: FileText, title: "Documentation Support", desc: "Complete export documents provided" },
    { icon: Globe, title: "Export Coordination", desc: "End-to-end shipment management" },
    { icon: Truck, title: "Flexible Shipment", desc: "FCL and LCL options available" },
  ]

  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <PalmLeafLeft className="absolute -left-10 bottom-0 h-52 w-26 text-primary opacity-[0.06]" />
      <div className="absolute right-0 top-1/2 h-px w-32 -translate-y-1/2 bg-gradient-to-l from-primary/20 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Our Commitment
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Quality & Export Commitment
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We are committed to delivering consistent quality and providing comprehensive support for international buyers.
          </p>
        </AnimatedSection>
        
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((item, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 60}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const faqs = [
    {
      question: "What is desiccated coconut used for?",
      answer: "Desiccated coconut is commonly used in bakery products, confectionery, chocolate coatings, snack foods, cereals, granola bars, ice cream, health foods, and plant-based food products. It adds flavor, texture, and nutritional value to various food applications.",
    },
    {
      question: "What grades of desiccated coconut are available?",
      answer: "We offer Fine Grade, Medium Grade, and Coarse Grade desiccated coconut. Fine grade is ideal for baking and confectionery, while medium and coarse grades are suitable for toppings, snacks, and cereals. Both high fat and low fat variants are available.",
    },
    {
      question: "Can you supply bulk quantities for commercial use?",
      answer: "Yes, we specialize in bulk supply for commercial and industrial buyers. Our standard packaging is 25kg multi-wall paper bags, and we can supply full container loads (FCL) of 15-17 MT per 20ft container. We also accommodate LCL shipments for smaller orders.",
    },
    {
      question: "Do you support export documentation?",
      answer: "Yes, we provide complete export documentation including Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, Certificate of Analysis (COA), and other documents as required by your country's import regulations.",
    },
    {
      question: "What packaging options are available?",
      answer: "Our standard packaging is 25kg multi-wall paper bags with inner PE liner for moisture protection. We can also accommodate custom packaging requirements for private label buyers. All packaging is designed for safe international shipping.",
    },
    {
      question: "What are the payment and shipping terms?",
      answer: "We offer FOB and CIF shipping terms depending on buyer preference. Payment terms can be discussed based on order volume and business relationship. We ship from Indonesian ports with access to major shipping routes worldwide.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 lg:py-24">
      <AbstractDots className="absolute -right-8 top-8 h-32 w-32 text-primary opacity-30" />
      
      <div className="relative z-10 mx-auto max-w-3xl px-4 lg:px-6">
        <AnimatedSection animation="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>
        
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
              <div className="overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:border-primary/30">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Closing CTA Section
function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 left-0 h-24 w-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white" />
        </svg>
      </div>
      
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
            Ready to Source Premium Desiccated Coconut?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/80 leading-relaxed sm:text-base">
            Whether you are a food manufacturer, importer, distributor, or private label buyer, our team is ready to discuss your specifications and sourcing requirements. Contact us today to start your inquiry.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" variant="secondary" className="gap-2 rounded-full px-8 font-semibold transition-all duration-300 hover:scale-105">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-5 w-5" />
                Get Inquiry via WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 rounded-full border-primary-foreground/30 bg-transparent px-8 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10">
              <a href={`mailto:${EMAIL}`}>
                <MessageSquare className="h-4 w-4" />
                Email Export Team
              </a>
            </Button>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={150}>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Tropica Coco - Your Trusted Indonesian Desiccated Coconut Partner
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default function IndonesianDesiccatedCoconutSupplierPage() {
  return (
    <I18nProvider>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <IntroductionSection />
        <AboutProductSection />
        <SpecificationsSection />
        <WhyIndonesiaSection />
        <QualityCommitmentSection />
        <FAQSection />
        <ClosingSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </I18nProvider>
  )
}
