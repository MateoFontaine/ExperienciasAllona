"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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
    {
      name: "Pedro Martínez",
      location: "La Serena, Chile",
      rating: 5,
      comment: "La gastronomía es excepcional y las actividades muy bien organizadas. Una experiencia completa.",
    },
    {
      name: "Sofía Herrera",
      location: "Temuco, Chile",
      rating: 5,
      comment: "El personal es muy amable y profesional. Las instalaciones están impecables y el paisaje es único.",
    },
    {
      name: "Diego López",
      location: "Antofagasta, Chile",
      rating: 5,
      comment: "Ideal para una escapada romántica. La tranquilidad del lugar y los detalles especiales nos encantaron.",
    },
  ]

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Cambia cada 4 segundos

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Testimonios</Badge>
          <h2 className="text-4xl font-bold text-stone-800 mb-6">Lo que Dicen Nuestros Huéspedes</h2>
        </div>

        {/* Carrusel de testimonios */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 hover:shadow-lg transition-shadow duration-300 bg-white">
                    <div className="text-center">
                      <div className="flex justify-center items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-stone-600 mb-6 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
                      <div>
                        <div className="font-semibold text-stone-800 text-xl">{testimonial.name}</div>
                        <div className="text-stone-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-stone-50 rounded-full p-3 shadow-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-stone-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-stone-50 rounded-full p-3 shadow-lg transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-stone-600" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-amber-800" : "bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
