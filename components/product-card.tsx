"use client"

import Image from "next/image"
import { ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, type Product } from "./cart-context"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [showQuickView, setShowQuickView] = useState(false)

  const categoryLabels = {
    anime: "Anime",
    gamer: "Gamer",
    series: "Series",
  }

  return (
    <>
      <article className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
        {/* Image Container */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
            {categoryLabels[product.category]}
          </span>

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <Button
              size="icon"
              className="rounded-full"
              onClick={() => addToCart(product)}
              aria-label="Agregar al carrito"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full"
              onClick={() => setShowQuickView(true)}
              aria-label="Vista rápida"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-foreground truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => addToCart(product)}
              className="text-xs"
            >
              Agregar
            </Button>
          </div>
        </div>
      </article>

      {/* Quick View Modal */}
      {showQuickView && (
        <>
          <div
            className="fixed inset-0 bg-foreground/50 z-50"
            onClick={() => setShowQuickView(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card rounded-2xl shadow-2xl z-50 w-full max-w-2xl mx-4 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {categoryLabels[product.category]}
                </span>
                <h2 className="text-2xl font-serif font-semibold mt-2">{product.name}</h2>
                <p className="text-muted-foreground mt-3 flex-1">{product.description}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button
                    className="flex-1"
                    onClick={() => {
                      addToCart(product)
                      setShowQuickView(false)
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                  <Button variant="outline" onClick={() => setShowQuickView(false)}>
                    Cerrar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
