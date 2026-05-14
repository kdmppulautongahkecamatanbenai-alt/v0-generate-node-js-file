import type { Metadata, Viewport } from "next"
import { Poppins, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Desiccated Coconut Supplier Indonesia | Tropica Coco Exporter",
  description:
    "Premium desiccated coconut supplier from Indonesia. High fat & low fat, export-ready, HACCP certified. Contact Tropica Coco for bulk orders.",
  keywords: [
    "desiccated coconut supplier",
    "desiccated coconut exporter",
    "desiccated coconut Indonesia",
    "buy desiccated coconut bulk",
    "high fat desiccated coconut",
    "low fat desiccated coconut",
    "tropica coco",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Tropica Coco - Premium Desiccated Coconut Supplier from Indonesia",
    description:
      "Reliable supply, consistent quality, and export-ready documentation for global food industries.",
    type: "website",
    locale: "en_US",
  },
}

export const viewport: Viewport = {
  themeColor: "#2E7D32",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" data-scroll-behavior="smooth">
      <body
        className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
