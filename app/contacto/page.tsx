import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Contacto | Hikari Quest Design",
  description: "Ponte en contacto con nosotros. Estamos aquí para ayudarte con cualquier pregunta sobre nuestras tazas.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
              Contacto
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-center mb-12">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "¿Cuánto tarda el envío?",
                  answer: "El tiempo de entrega es de 3-5 días hábiles para envíos nacionales. Para envíos internacionales, el tiempo puede variar entre 7-15 días hábiles."
                },
                {
                  question: "¿Puedo hacer pedidos personalizados?",
                  answer: "¡Claro que sí! Contáctanos a través del formulario o por correo electrónico con tu idea y te daremos un presupuesto personalizado."
                },
                {
                  question: "¿Las tazas son aptas para microondas?",
                  answer: "Sí, todas nuestras tazas están fabricadas con cerámica de alta calidad y son aptas para microondas y lavavajillas."
                },
                {
                  question: "¿Cuál es la política de devoluciones?",
                  answer: "Tienes 30 días desde la recepción del producto para solicitar un cambio o devolución. El producto debe estar en su empaque original y sin usar."
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
