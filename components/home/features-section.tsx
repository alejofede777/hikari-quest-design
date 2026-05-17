import { Truck, Shield, RefreshCw, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Envío Rápido",
    description: "Entrega en 3-5 días hábiles a todo el país",
  },
  {
    icon: Shield,
    title: "Pago Seguro",
    description: "Todas las transacciones son 100% seguras",
  },
  {
    icon: RefreshCw,
    title: "Devoluciones",
    description: "30 días para cambios o devoluciones",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Estamos aquí para ayudarte siempre",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 text-primary-foreground"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
