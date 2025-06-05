import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      location: "Santiago, Chile",
      rating: 5,
      comment: "Una experiencia increíble. El lugar es hermoso y la atención excepcional. Definitivamente volveremos.",
    },
    {
      name: "Carlos Rodríguez",
      location: "Valparaíso, Chile",
      rating: 5,
      comment: "Perfecto para desconectarse. Las habitaciones son muy cómodas y el entorno natural es espectacular.",
    },
    {
      name: "Ana Silva",
      location: "Concepción, Chile",
      rating: 5,
      comment: "Excelente para ir en familia. Los niños se divirtieron mucho y nosotros pudimos relajarnos.",
    },
  ]

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Testimonios</Badge>
          <h2 className="text-4xl font-bold text-stone-800 mb-6">Lo que Dicen Nuestros Huéspedes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-600 mb-4 italic">"{testimonial.comment}"</p>
              <div>
                <div className="font-semibold text-stone-800">{testimonial.name}</div>
                <div className="text-stone-500 text-sm">{testimonial.location}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
