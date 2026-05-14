import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Indonesian Desiccated Coconut Supplier | Tropica Coco",
  description: "Premium desiccated coconut supplier from Indonesia. High quality, export-ready, fine & medium grade. Contact Tropica Coco for bulk orders.",
  keywords: [
    "Indonesian desiccated coconut supplier",
    "desiccated coconut exporter Indonesia",
    "high quality desiccated coconut",
    "fine grade desiccated coconut",
    "medium grade desiccated coconut",
    "coconut ingredient supplier",
    "bulk desiccated coconut",
    "food grade coconut products",
    "export quality coconut Indonesia",
  ],
  openGraph: {
    title: "Indonesian Desiccated Coconut Supplier for Global Markets | Tropica Coco",
    description: "Supplying food, health, and wellness applications with clear specifications, consistent quality, and responsive coordination.",
    type: "website",
    locale: "en_US",
    url: "/indonesian-desiccated-coconut-supplier",
  },
  alternates: {
    canonical: "/indonesian-desiccated-coconut-supplier",
  },
}

export default function SupplierPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
