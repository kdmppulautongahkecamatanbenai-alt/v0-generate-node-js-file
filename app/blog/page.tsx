"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { I18nProvider, useI18n } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { PalmLeafLeft, PalmLeafRight, AbstractDots, HeroWave } from "@/components/decorative-elements"

const WHATSAPP_LINK = "https://wa.me/6282284233857?text=Hello%2C%20I%27m%20interested%20in%20your%20desiccated%20coconut%20products.%20Please%20send%20me%20pricing%20information."

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const blogPosts = [
  {
    slug: "indonesian-desiccated-coconut-supplier",
    title: "Indonesian Desiccated Coconut Supplier: Your Complete B2B Guide",
    excerpt: "Discover why Indonesia leads global desiccated coconut production and how to find reliable Indonesian suppliers for your business needs.",
    image: "/images/blog/supplier-guide.jpg",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Supplier Guide",
  },
  {
    slug: "desiccated-coconut-exporter-indonesia",
    title: "Desiccated Coconut Exporter Indonesia: What Buyers Need to Know",
    excerpt: "Essential information for international buyers looking to source desiccated coconut from Indonesian exporters, including quality standards and export procedures.",
    image: "/images/blog/pricing-guide.jpg",
    date: "2024-03-20",
    readTime: "6 min read",
    category: "Export Knowledge",
  },
  {
    slug: "bulk-desiccated-coconut-supplier",
    title: "Bulk Desiccated Coconut Supplier: Sourcing Large Volumes from Indonesia",
    excerpt: "Guide for food manufacturers and distributors seeking bulk desiccated coconut supplies, including volume options, pricing factors, and logistics.",
    image: "/images/blog/bulk-supplier.jpg",
    date: "2024-03-25",
    readTime: "5 min read",
    category: "Bulk Sourcing",
  },
  {
    slug: "fine-grade-desiccated-coconut",
    title: "Fine Grade Desiccated Coconut: Specifications and Applications",
    excerpt: "Detailed guide on fine grade desiccated coconut, including particle size specifications, ideal applications, and sourcing tips for food manufacturers.",
    image: "/images/blog/desiccated-coconut-guide.jpg",
    date: "2024-04-01",
    readTime: "5 min read",
    category: "Product Guide",
  },
  {
    slug: "food-grade-desiccated-coconut",
    title: "Food Grade Desiccated Coconut: Quality Standards Explained",
    excerpt: "Understanding food grade standards for desiccated coconut, including safety certifications, microbiological limits, and compliance requirements.",
    image: "/images/blog/moisture-standard.jpg",
    date: "2024-04-05",
    readTime: "6 min read",
    category: "Quality Standards",
  },
  {
    slug: "export-quality-desiccated-coconut",
    title: "Export Quality Desiccated Coconut: Meeting International Standards",
    excerpt: "Comprehensive guide on export quality requirements for desiccated coconut, including packaging, documentation, and international compliance.",
    image: "/images/blog/pricing-guide.jpg",
    date: "2024-04-10",
    readTime: "5 min read",
    category: "Export Standards",
  },
  {
    slug: "coconut-ingredient-supplier",
    title: "Coconut Ingredient Supplier for Food Industry",
    excerpt: "How food manufacturers can source premium coconut ingredients, including desiccated coconut, for bakery, confectionery, and other applications.",
    image: "/images/blog/supplier-guide.jpg",
    date: "2024-04-15",
    readTime: "5 min read",
    category: "Industry Guide",
  },
  {
    slug: "desiccated-coconut-for-bakery-confectionery",
    title: "Desiccated Coconut for Bakery and Confectionery Applications",
    excerpt: "Guide for bakery and confectionery manufacturers on selecting the right desiccated coconut grades, specifications, and sourcing strategies.",
    image: "/images/blog/bakery-confectionery.jpg",
    date: "2024-04-20",
    readTime: "6 min read",
    category: "Application Guide",
  },
  {
    slug: "what-is-desiccated-coconut",
    title: "What is Desiccated Coconut? Specification and Uses",
    excerpt: "Learn about desiccated coconut, its production process, key specifications, and how it's used across various food industries worldwide.",
    image: "/images/blog/desiccated-coconut-guide.jpg",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Guide",
  },
  {
    slug: "high-fat-vs-low-fat-desiccated-coconut",
    title: "High Fat vs Low Fat Desiccated Coconut: Key Differences",
    excerpt: "Understand the differences between high fat and low fat desiccated coconut, including fat content, applications, and how to choose the right type for your products.",
    image: "/images/blog/high-fat-vs-low-fat.jpg",
    date: "2024-01-20",
    readTime: "4 min read",
    category: "Product Knowledge",
  },
  {
    slug: "desiccated-coconut-moisture-standard",
    title: "Desiccated Coconut Moisture Standard for Export",
    excerpt: "Explore the international moisture standards for desiccated coconut exports, why moisture control is critical, and how suppliers ensure compliance.",
    image: "/images/blog/moisture-standard.jpg",
    date: "2024-02-01",
    readTime: "4 min read",
    category: "Export Standards",
  },
  {
    slug: "desiccated-coconut-supplier-indonesia-guide",
    title: "Desiccated Coconut Supplier in Indonesia: Complete Guide",
    excerpt: "A comprehensive guide to finding and working with desiccated coconut suppliers in Indonesia, including quality considerations and export processes.",
    image: "/images/blog/supplier-guide.jpg",
    date: "2024-02-10",
    readTime: "6 min read",
    category: "Buyer's Guide",
  },
  {
    slug: "desiccated-coconut-price-fob-indonesia",
    title: "Desiccated Coconut Price FOB Indonesia: What to Expect",
    excerpt: "Get insights into desiccated coconut pricing from Indonesia, factors that affect FOB prices, and how to get competitive quotes from suppliers.",
    image: "/images/blog/pricing-guide.jpg",
    date: "2024-02-20",
    readTime: "5 min read",
    category: "Pricing",
  },
  {
    slug: "how-to-import-desiccated-coconut-from-indonesia",
    title: "How to Import Desiccated Coconut from Indonesia",
    excerpt: "Step-by-step guide on importing desiccated coconut from Indonesia, including documentation requirements, shipping options, and regulatory compliance.",
    image: "/images/blog/import-guide.jpg",
    date: "2024-03-01",
    readTime: "7 min read",
    category: "Import Guide",
  },
]

function BlogContent() {
  const { t } = useI18n()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30 py-14 lg:py-20">
          <PalmLeafRight className="absolute -right-12 top-0 h-48 w-24 text-primary opacity-[0.08]" />
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Knowledge Base</span>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {t("blog.title")}
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Expert knowledge about desiccated coconut, export processes, and industry standards
              </p>
            </AnimatedSection>
          </div>
          <HeroWave className="absolute -bottom-1 left-0 right-0 h-10 w-full text-background sm:h-14" />
        </section>

        {/* Blog Posts Grid */}
        <section className="relative overflow-hidden bg-background py-14 lg:py-20">
          <AbstractDots className="absolute left-0 top-16 h-24 w-24 text-primary opacity-[0.15]" />
          <PalmLeafLeft className="absolute -left-12 bottom-16 h-48 w-24 text-primary opacity-[0.08]" />
          
          {/* Corner accent */}
          <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-primary/5" />
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={post.slug} animation="fade-up" delay={index * 80}>
                  <Card className="group flex h-full flex-col overflow-hidden border-2 border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl">
                    <div className="aspect-video relative overflow-hidden bg-secondary">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <CardHeader className="flex-1 pb-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-primary font-medium transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 mt-2 text-sm sm:text-base">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="transition-colors duration-300 hover:text-primary"
                        >
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-xs sm:text-sm">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="link" className="mt-2 px-0 text-xs sm:text-sm">
                        <Link href={`/blog/${post.slug}`} className="gap-1 transition-all duration-300 group-hover:gap-2">
                          {t("blog.readMore")}
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Link>
                      </Button>
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
                Ready to Source Premium Desiccated Coconut?
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/80 sm:text-base">
                Contact us today for competitive pricing and reliable supply.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button asChild size="lg" variant="secondary" className="gap-2 rounded-full px-6 transition-all duration-300 hover:scale-105">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Get a Quote
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

export default function BlogPage() {
  return (
    <I18nProvider>
      <BlogContent />
    </I18nProvider>
  )
}
