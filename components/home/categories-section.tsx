import Link from "next/link"
import { Gamepad2, Tv, Sparkles } from "lucide-react"

const categories = [
  {
    name: "Anime",
    description: "Naruto, Dragon Ball, One Piece y más",
    icon: Sparkles,
    href: "/productos?categoria=anime",
    color: "from-pink-500/20 to-purple-500/20",
    borderColor: "hover:border-pink-500/50",
  },
  {
    name: "Gamer",
    description: "PlayStation, Xbox, Nintendo y PC",
    icon: Gamepad2,
    href: "/productos?categoria=gamer",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-500/50",
  },
  {
    name: "Series",
    description: "Breaking Bad, Friends, GOT y más",
    icon: Tv,
    href: "/productos?categoria=series",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">
            Explora Nuestro Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mt-2">
            Categorías
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Encuentra la taza perfecta explorando nuestras categorías especializadas
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className={`group relative p-8 bg-card rounded-2xl border border-border ${category.borderColor} transition-all duration-300 hover:shadow-lg overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
