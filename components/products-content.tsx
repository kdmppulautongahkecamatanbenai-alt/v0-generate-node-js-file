"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Package, Utensils, Cookie, Cake } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { PalmLeafLeft, PalmLeafRight, AbstractDots, HeroWave } from "@/components/decorative-elements"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function ProductsContent() {
  const { t } = useI18n()

  const products = [
    {
      id: "high-fat",
      name: t("products.highFat"),
      description: "Premium quality desiccated coconut with high fat content, perfect for confectionery, bakery, and chocolate industries.",
      image: "/images/high-fat-coconut.jpg",
      whatsappMsg: "Hello, I'm interested in High Fat Desiccated Coconut. Please send me pricing and availability information.",
      specs: [
        { label: t("products.fat"), value: "65% ±3%" },
        { label: t("products.moisture"), value: "MAX 3%" },
        { label: t("products.grade"), value: "Fine / Medium" },
        { label: t("products.color"), value: "Natural White" },
        { label: t("products.impurities"), value: "Not more than 8 pcs/100g" },
        { label: t("products.ph"), value: "6.1 – 6.7" },
      ],
      useCases: [
        { name: "Chocolate & Confectionery", icon: Cookie },
        { name: "Premium Bakery Products", icon: Cake },
        { name: "Ice Cream & Desserts", icon: Utensils },
        { name: "Snack Foods", icon: Package },
      ],
    },
    {
      id: "low-fat",
      name: t("products.lowFat"),
      description: "Lower fat content desiccated coconut ideal for health-conscious food products and extended shelf life applications.",
      image: "/images/low-fat-coconut.jpg",
      whatsappMsg: "Hello, I'm interested in Low Fat Desiccated Coconut. Please send me pricing and availability information.",
      specs: [
        { label: t("products.fat"), value: "45% ±3%" },
        { label: t("products.moisture"), value: "MAX 3%" },
        { label: t("products.grade"), value: "Fine / Extra Fine" },
        { label: t("products.color"), value: "Natural White" },
        { label: t("products.impurities"), value: "Not more than 8 pcs/100g" },
        { label: t("products.ph"), value: "6.1 – 6.7" },
      ],
      useCases: [
        { name: "Breakfast Cereals", icon: Utensils },
        { name: "Granola & Muesli", icon: Package },
        { name: "Health Food Products", icon: CheckCircle },
        { name: "Dried Fruit Mixes", icon: Package },
      ],
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
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Premium Quality</span>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {t("products.title")}
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Premium quality desiccated coconut for global food industries
              </p>
            </AnimatedSection>
          </div>
          <HeroWave className="absolute -bottom-1 left-0 right-0 h-10 w-full text-background sm:h-14" />
        </section>

        {/* Products Grid */}
        <section className="relative overflow-hidden bg-background py-14 lg:py-20">
          <AbstractDots className="absolute left-0 top-16 h-24 w-24 text-primary opacity-[0.15]" />
          <PalmLeafLeft className="absolute -left-12 bottom-16 h-48 w-24 text-primary opacity-[0.08]" />
          
          {/* Corner accent */}
          <div className="absolute right-0 bottom-0 h-16 w-16 rounded-tl-full bg-primary/5" />
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
            <div className="space-y-14 lg:space-y-20">
              {products.map((product, index) => (
                <div key={product.id} id={product.id}>
                  <div className={`grid gap-6 lg:grid-cols-2 lg:gap-10 ${index % 2 === 1 ? "" : ""}`}>
                    {/* Product Image */}
                    <AnimatedSection 
                      animation="fade-up" 
                      delay={0}
                      className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                    >
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary shadow-lg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </AnimatedSection>

                    {/* Product Details */}
                    <AnimatedSection 
                      animation="fade-up" 
                      delay={150}
                      className={`space-y-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <div>
                        <h2 className="text-xl font-bold text-foreground sm:text-2xl">{product.name}</h2>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed sm:text-base">
                          {product.description}
                        </p>
                      </div>

                      {/* Specifications */}
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3">
                          Specifications
                        </h3>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {product.specs.map((spec, specIndex) => (
                            <div
                              key={specIndex}
                              className="rounded-lg border border-border bg-card p-2 transition-all duration-300 hover:border-primary/30 hover:shadow-md sm:p-2.5"
                            >
                              <p className="text-[10px] text-muted-foreground sm:text-xs">{spec.label}</p>
                              <p className="text-xs font-medium text-foreground sm:text-sm">{spec.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3">
                          Common Applications
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {product.useCases.map((useCase, useCaseIndex) => (
                            <div
                              key={useCaseIndex}
                              className="flex items-center gap-2 rounded-lg bg-primary/5 p-2 transition-all duration-300 hover:bg-primary/10 sm:p-2.5"
                            >
                              <useCase.icon className="h-4 w-4 text-primary shrink-0" />
                              <span className="text-xs font-medium text-foreground">{useCase.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button asChild size="lg" className="w-full gap-2 rounded-full transition-all duration-300 hover:scale-[1.02] sm:w-auto sm:px-8">
                        <a
                          href={`https://wa.me/6282284233857?text=${encodeURIComponent(product.whatsappMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WhatsAppIcon className="h-5 w-5" />
                          {t("products.cta")}
                        </a>
                      </Button>
                    </AnimatedSection>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="relative overflow-hidden bg-secondary/30 py-14 lg:py-20">
          <PalmLeafRight className="absolute -right-12 top-1/2 h-48 w-24 -translate-y-1/2 text-primary opacity-[0.08]" />
          <div className="absolute left-0 top-0 h-16 w-16 rounded-br-full bg-primary/5" />
          
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <AnimatedSection animation="fade-up" className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Certified Quality</span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Quality You Can Trust
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                All our products are sourced from certified Indonesian manufacturers with rigorous quality control processes.
              </p>
            </AnimatedSection>

            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["HACCP Certified", "ISO 22000 Compliant", "FSSC 22000 Certified"].map((cert, index) => (
                <AnimatedSection key={index} animation="scale" delay={index * 100}>
                  <Card className="group border-2 border-transparent text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                    <CardContent className="pt-5 pb-4">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 sm:h-12 sm:w-12">
                        <CheckCircle className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-foreground">{cert}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
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
                Need Custom Specifications?
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/80 sm:text-base">
                We can work with you to meet your specific product requirements.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button asChild size="lg" variant="secondary" className="gap-2 rounded-full px-6 transition-all duration-300 hover:scale-105">
                  <a
                    href="https://wa.me/6282284233857?text=Hello%2C%20I%20need%20custom%20specifications%20for%20desiccated%20coconut.%20Can%20you%20help%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Discuss Requirements
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 rounded-full border-white/30 bg-transparent px-6 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10">
                  <Link href="/contact">
                    Contact Our Team
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
