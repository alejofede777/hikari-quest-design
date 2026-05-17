"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

type Category = "all" | "anime" | "gamer" | "series"
type SortOption = "default" | "price-asc" | "price-desc" | "name"

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "anime", label: "Anime" },
  { value: "gamer", label: "Gamer" },
  { value: "series", label: "Series" },
]

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "default", label: "Más Populares" },
  { value: "price-asc", label: "Precio: Menor a Mayor" },
  { value: "price-desc", label: "Precio: Mayor a Menor" },
  { value: "name", label: "Nombre A-Z" },
]

export function ProductsContent() {
  const searchParams = useSearchParams()
  const initialCategory = (searchParams.get("categoria") as Category) || "all"

  const [category, setCategory] = useState<Category>(initialCategory)
  const [sortBy, setSortBy] = useState<SortOption>("default")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category
    if (category !== "all") {
      result = result.filter((p) => p.category === category)
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return result
  }, [category, sortBy, searchQuery])

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filtros
          </Button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={category === cat.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(cat.value)}
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="h-9 px-3 rounded-md border border-input bg-background text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="lg:hidden mb-6 p-4 bg-card rounded-xl border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filtros</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {/* Category */}
              <div>
                <label className="text-sm font-medium mb-2 block">Categoría</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.value}
                      variant={category === cat.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCategory(cat.value)}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="text-sm font-medium mb-2 block">Ordenar por</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 && "s"}
          {category !== "all" && ` en ${categories.find((c) => c.value === category)?.label}`}
          {searchQuery && ` para "${searchQuery}"`}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No se encontraron productos
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Intenta con otra búsqueda o categoría
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setCategory("all")
                setSearchQuery("")
              }}
            >
              Ver todos los productos
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
