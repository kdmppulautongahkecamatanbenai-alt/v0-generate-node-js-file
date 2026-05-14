"use client"

import { useState } from "react"
import { Mail, MapPin, Send, Clock } from "lucide-react"
import { I18nProvider, useI18n } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AnimatedSection } from "@/components/animated-section"
import { PalmLeafLeft, PalmLeafRight, AbstractDots, HeroWave } from "@/components/decorative-elements"

const WHATSAPP_LINK = "https://wa.me/6282284233857?text=Hello%2C%20I%27m%20interested%20in%20your%20desiccated%20coconut%20products.%20Please%20provide%20more%20information."

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function ContactContent() {
  const { t } = useI18n()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30 py-14 lg:py-20">
          <PalmLeafRight className="absolute -right-12 top-0 h-48 w-24 text-primary opacity-[0.08]" />
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">Get in Touch</span>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {t("contact.title")}
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                {t("contact.subtitle")}
              </p>
            </AnimatedSection>
          </div>
          <HeroWave className="absolute -bottom-1 left-0 right-0 h-10 w-full text-background sm:h-14" />
        </section>

        {/* Contact Section */}
        <section className="relative overflow-hidden bg-background py-14 lg:py-20">
          <AbstractDots className="absolute left-0 top-16 h-24 w-24 text-primary opacity-[0.15]" />
          <PalmLeafLeft className="absolute -left-12 bottom-16 h-48 w-24 text-primary opacity-[0.08]" />
          
          {/* Corner accent */}
          <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-primary/5" />
          
          <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Contact Form */}
              <AnimatedSection animation="fade-up" delay={0}>
                <Card className="overflow-hidden border-2 border-transparent shadow-lg transition-all duration-300 hover:border-primary/10">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                    <CardTitle className="text-lg">Send Us an Inquiry</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-5">
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                          <Send className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-foreground">
                          Inquiry Sent Successfully!
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          We&apos;ll respond to your inquiry within 24 hours.
                        </p>
                        <Button
                          className="mt-5 rounded-full"
                          variant="outline"
                          onClick={() => setSubmitted(false)}
                        >
                          Send Another Inquiry
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm">Full Name</Label>
                            <Input id="name" placeholder="Your name" required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm">{t("contact.email")}</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              required
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm">Company Name</Label>
                          <Input id="company" placeholder="Your company" className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="product" className="text-sm">{t("contact.product")}</Label>
                            <Select required>
                              <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/20">
                                <SelectValue placeholder="Select product" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="high-fat">High Fat Desiccated Coconut</SelectItem>
                                <SelectItem value="low-fat">Low Fat Desiccated Coconut</SelectItem>
                                <SelectItem value="both">Both Products</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quantity" className="text-sm">{t("contact.quantity")}</Label>
                            <Input
                              id="quantity"
                              placeholder="e.g., 20 MT"
                              required
                              className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="destination" className="text-sm">{t("contact.destination")}</Label>
                          <Input
                            id="destination"
                            placeholder="e.g., United States"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm">{t("contact.message")}</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your requirements..."
                            rows={4}
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <Button type="submit" className="w-full gap-2 rounded-full transition-all duration-300 hover:scale-[1.02]" disabled={isSubmitting}>
                          <Send className="h-4 w-4" />
                          {isSubmitting ? "Sending..." : t("contact.submit")}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Contact Info */}
              <div className="space-y-5">
                {/* Quick Contact */}
                <AnimatedSection animation="fade-up" delay={100}>
                  <Card className="overflow-hidden border-2 border-transparent shadow-lg transition-all duration-300 hover:border-primary/10">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 py-4">
                      <CardTitle className="text-lg">Quick Contact</CardTitle>
                      <CardDescription>
                        Prefer to reach us directly? Use the options below.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-5">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 hover:shadow-lg sm:p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366]/20 sm:h-11 sm:w-11">
                          <WhatsAppIcon className="h-5 w-5 text-[#25D366] sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{t("contact.whatsapp")}</p>
                          <p className="text-xs text-muted-foreground sm:text-sm">+62 822 8423 3857</p>
                        </div>
                      </a>

                      <a
                        href="mailto:sales@tropicacoconut.com"
                        className="group flex items-center gap-3 rounded-xl border border-border p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg sm:p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 sm:h-11 sm:w-11">
                          <Mail className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Email Us</p>
                          <p className="text-xs text-muted-foreground sm:text-sm">sales@tropicacoconut.com</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Response Time */}
                <AnimatedSection animation="fade-up" delay={200}>
                  <Card className="border-2 border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-primary/10 hover:shadow-lg">
                    <CardContent className="pt-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0 sm:h-11 sm:w-11">
                          <Clock className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">Fast Response Guarantee</h3>
                          <p className="mt-1 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                            We respond to all inquiries within 24 hours during business days. For urgent matters, please contact us via WhatsApp.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Office Location */}
                <AnimatedSection animation="fade-up" delay={300}>
                  <Card className="border-2 border-transparent transition-all duration-300 hover:-translate-y-1 hover:border-primary/10 hover:shadow-lg">
                    <CardContent className="pt-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shrink-0 sm:h-11 sm:w-11">
                          <MapPin className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">Office Location</h3>
                          <p className="mt-1 text-xs text-muted-foreground leading-relaxed sm:text-sm">
                            Indonesia
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Mon - Fri, 9:00 AM - 5:00 PM (WIB)
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Direct WhatsApp CTA */}
                <AnimatedSection animation="scale" delay={400}>
                  <div className="rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-5 text-center text-white shadow-xl">
                    <h3 className="text-base font-bold">Need Immediate Response?</h3>
                    <p className="mt-2 text-xs text-white/90 sm:text-sm">
                      Chat with us directly on WhatsApp for faster assistance.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="mt-4 gap-2 rounded-full transition-all duration-300 hover:scale-105">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        Chat Now
                      </a>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function ContactPage() {
  return (
    <I18nProvider>
      <ContactContent />
    </I18nProvider>
  )
}
