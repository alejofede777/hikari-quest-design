import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Logo and Brand */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
          <Image
            src="/images/logo.jpg"
            alt="Hikari Quest Design"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold">Hikari Quest</h2>
          <p className="text-muted-foreground">Design</p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Somos una tienda especializada en tazas con diseños de anime, videojuegos y series. 
        Cada producto está hecho con pasión y atención al detalle para los verdaderos fans.
      </p>

      {/* Contact Details */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Información de Contacto</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground font-medium">Email</p>
              <a href="mailto:info@hikariquestdesign.com" className="text-sm hover:text-primary transition-colors">
                info@hikariquestdesign.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground font-medium">Teléfono</p>
              <a href="tel:+1234567890" className="text-sm hover:text-primary transition-colors">
                +1 234 567 890
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground font-medium">Ubicación</p>
              <p className="text-sm">Ciudad, País</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground font-medium">Horario de Atención</p>
              <p className="text-sm">Lun - Vie: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Síguenos</h3>
        <div className="flex gap-3">
          <a
            href="#"
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
