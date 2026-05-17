import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-primary-foreground/80 mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Colección Exclusiva
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight text-balance">
            Tazas con tu{" "}
            <span className="text-accent">pasión</span>{" "}
            favorita
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
            Descubre nuestra colección de tazas con diseños únicos de anime, videojuegos y series. 
            Cada taza es una obra de arte que cuenta tu historia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="group">
              <Link href="/productos">
                Ver Colección
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contacto">
                Contactar
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
            {[
              { number: "500+", label: "Diseños Únicos" },
              { number: "10k+", label: "Clientes Felices" },
              { number: "4.9", label: "Calificación" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary-foreground">{stat.number}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
