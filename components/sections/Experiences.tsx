"use client"

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Camera, Utensils, Star, Coffee, Users, X } from "lucide-react"
import { useState } from "react"

export default function Experiences() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>("")

  const experiences = [
    {
      title: "Ceramica",
      description: "Un rincón donde el barro cobra vida entre manos y fuego.",
      image: "/images/ceramica.jpeg?height=300&width=400",
      icon: <Mountain className="w-6 h-6" />,
    },
    {
      title: "Alfareria",
      description: "Donde el barro danza sobre el torno y se vuelve arte",
      image: "/images/torno.jpeg?height=300&width=400",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      title: "Pintura",
      description: "Un taller para crear, mezclar y pintar sin límites.",
      image: "/images/pintura.jpeg?height=300&width=400",
      icon: <Utensils className="w-6 h-6" />,
    },
    {
      title: "Caminatas Creativas",
      description: "Noches mágicas bajo el cielo estrellado",
      image: "https://www.infofueguina.com/u/fotografias/m/2015/4/6/f608x342-11375_41098_31.jpg",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Relajación y ARTE",
      description: "Un espacio donde el arte se une con la calma para relajar cuerpo y mente.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlgaweNbQarg-A-1N0bLgMUlW_pyDDAnPGA&s",
      icon: <Coffee className="w-6 h-6" />,
    },
    {
      title: "Jardines con encanto",
      description: "Un rincón verde lleno de magia, aromas y belleza natural.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDlKwZoQi4sJhTReq98u3gaWzpK7_JjOscg&s",
      icon: <Users className="w-6 h-6" />,
    },
  ]

  const openModal = (image: string, title: string) => {
    setSelectedImage(image)
    setSelectedTitle(title)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedTitle("")
  }

  return (
    <section id="experiencias" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Nuestras Experiencias</Badge>
          <h2 className="text-4xl font-bold text-stone-800 mb-6">Respira ARTE</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Descubre todas las actividades y experiencias que tenemos preparadas para ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <div className="cursor-pointer" onClick={() => openModal(experience.image, experience.title)}>
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay con efecto hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                      <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2">{experience.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-stone-800">{experience.title}</CardTitle>
                <CardDescription className="text-stone-600">{experience.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image src={selectedImage || "/placeholder.svg"} alt={selectedTitle} fill className="object-contain" />

              {/* Botón de cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors group"
              >
                <X className="w-6 h-6 text-white group-hover:text-gray-200" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
