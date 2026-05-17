import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CategoriesSection } from "@/components/home/categories-section"
import { FeaturesSection } from "@/components/home/features-section"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
        <FeaturesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
