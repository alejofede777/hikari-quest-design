"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Suscríbete para recibir ofertas exclusivas, nuevos diseños y contenido especial 
            directamente en tu correo.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 mt-8 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Gracias por suscribirte</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="group">
                Suscribirse
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            Sin spam. Puedes cancelar cuando quieras.
          </p>
        </div>
      </div>
    </section>
  )
}
