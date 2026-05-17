import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsContent } from "@/components/products/products-content"

export const metadata = {
  title: "Productos | Hikari Quest Design",
  description: "Explora nuestra colección completa de tazas con diseños de anime, videojuegos y series.",
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
              Nuestra Colección
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Explora todos nuestros diseños únicos y encuentra la taza perfecta para ti o para regalar.
            </p>
          </div>
        </section>

        <Suspense fallback={<ProductsLoading />}>
          <ProductsContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function ProductsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-card rounded-xl overflow-hidden animate-pulse">
            <div className="aspect-square bg-muted" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-6 bg-muted rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
