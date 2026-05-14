import { Metadata } from "next"
import { I18nProvider } from "@/lib/i18n"
import { ProductsContent } from "@/components/products-content"

export const metadata: Metadata = {
  title: "Desiccated Coconut Products | High Fat & Low Fat | Tropica Coco",
  description: "Premium desiccated coconut products from Indonesia. High fat desiccated coconut (65%) and low fat desiccated coconut (45%) available. Export-ready with full documentation.",
  keywords: ["desiccated coconut supplier", "high fat desiccated coconut", "low fat desiccated coconut exporter", "buy desiccated coconut bulk"],
}

export default function ProductsPage() {
  return (
    <I18nProvider>
      <ProductsContent />
    </I18nProvider>
  )
}
