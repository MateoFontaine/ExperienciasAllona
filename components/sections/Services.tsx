import { Badge } from "@/components/ui/badge"
import { Wifi, Car, Coffee, MapPin, Utensils, Star, Mountain, Camera } from "lucide-react"

export default function Services() {
  const services = [
    { icon: <Wifi className="w-8 h-8" />, title: "WiFi Gratuito", description: "Internet de alta velocidad" },
    { icon: <Coffee className="w-8 h-8" />, title: "Desayuno", description: "Desayuno casero incluido" },
    { icon: <Mountain className="w-8 h-8" />, title: "Actividades", description: "Experiencias únicas" },
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Servicios</Badge>
          <h2 className="text-4xl font-bold text-stone-800 mb-6">Todo lo que Necesitas</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">Servicios pensados para hacer tu estadía perfecta</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="bg-stone-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-800 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">{service.title}</h3>
              <p className="text-stone-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
