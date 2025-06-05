"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Bed, Bath, Eye, Maximize, X } from "lucide-react"
import { useState } from "react"

interface RoomsProps {
  handleBooking: (type: string, details?: any) => void
}

export default function Rooms({ handleBooking }: RoomsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (image: string) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const rooms = [
    {
      title: "Pez",
      description:
        "Nuestra suite familiar es el espacio perfecto para familias que buscan comodidad y amplitud. Con 45m² de superficie, cuenta con dos ambientes separados que garantizan privacidad y confort para todos los miembros de la familia.",
      people: "2 personas",
      features: [
        { icon: <Bed className="w-5 h-5 text-amber-800" />, text: "2 camas dobles" },
        { icon: <Bath className="w-5 h-5 text-amber-800" />, text: "Baño privado" },
        { icon: <Eye className="w-5 h-5 text-amber-800" />, text: "Vista al jardín" },
        { icon: <Maximize className="w-5 h-5 text-amber-800" />, text: "45m² de espacio" },
      ],
      amenities: [
        "Desayuno continental para toda la familia",
        "WiFi gratuito de alta velocidad",
        "Área de juegos para niños",
        "Acceso a todas las actividades familiares",
      ],
      images: [
        "/images/13.jpeg?height=300&width=300",
        "/images/14.jpeg?height=300&width=300",
        "/images/15.jpeg?height=300&width=300",
        "/images/15.jpeg?height=300&width=300",
      ],
    },
    {
      title: "Rana",
      description:
        "Perfecta para parejas que buscan un ambiente romántico y acogedor. Con 30m² de elegancia y confort, esta habitación ofrece la combinación ideal entre intimidad y lujo, con vistas espectaculares desde su balcón privado.",
      people: "2 personas",
      features: [
        { icon: <Bed className="w-5 h-5 text-amber-800" />, text: "Cama matrimonial" },
        { icon: <Bath className="w-5 h-5 text-amber-800" />, text: "Baño con jacuzzi" },
        { icon: <Eye className="w-5 h-5 text-amber-800" />, text: "Balcón privado" },
        { icon: <Maximize className="w-5 h-5 text-amber-800" />, text: "30m² de espacio" },
      ],
      amenities: [
        "Desayuno romántico en la habitación",
        "Botella de vino de bienvenida",
        "Acceso al spa y área de relajación",
        "Cena romántica bajo las estrellas",
      ],
      images: [
        "/images/24.jpeg?height=300&width=300",
        "/images/24.jpeg?height=300&width=300",
        "/images/rana1.jpeg?height=300&width=300",
        "/images/rana2.jpeg?height=300&width=300",
      ],
    },
        {
      title: "Armadillo",
      description:
        "Nuestra suite familiar es el espacio perfecto para familias que buscan comodidad y amplitud. Con 45m² de superficie, cuenta con dos ambientes separados que garantizan privacidad y confort para todos los miembros de la familia.",
      people: "2 personas",
      features: [
        { icon: <Bed className="w-5 h-5 text-amber-800" />, text: "2 camas dobles" },
        { icon: <Bath className="w-5 h-5 text-amber-800" />, text: "Baño privado" },
        { icon: <Eye className="w-5 h-5 text-amber-800" />, text: "Vista al jardín" },
        { icon: <Maximize className="w-5 h-5 text-amber-800" />, text: "45m² de espacio" },
      ],
      amenities: [
        "Desayuno continental para toda la familia",
        "WiFi gratuito de alta velocidad",
        "Área de juegos para niños",
        "Acceso a todas las actividades familiares",
      ],
      images: [
        "/images/17.jpeg?height=300&width=300",
        "/images/16.jpeg?height=300&width=300",
        "/images/17.jpeg?height=300&width=300",
        "/images/16.jpeg?height=300&width=300",
      ],
    },
    {
      title: "Lagarto",
      description:
        "Perfecta para parejas que buscan un ambiente romántico y acogedor. Con 30m² de elegancia y confort, esta habitación ofrece la combinación ideal entre intimidad y lujo, con vistas espectaculares desde su balcón privado.",
      people: "2 personas",
      features: [
        { icon: <Bed className="w-5 h-5 text-amber-800" />, text: "Cama matrimonial" },
        { icon: <Bath className="w-5 h-5 text-amber-800" />, text: "Baño con jacuzzi" },
        { icon: <Eye className="w-5 h-5 text-amber-800" />, text: "Balcón privado" },
        { icon: <Maximize className="w-5 h-5 text-amber-800" />, text: "30m² de espacio" },
      ],
      amenities: [
        "Desayuno romántico en la habitación",
        "Botella de vino de bienvenida",
        "Acceso al spa y área de relajación",
        "Cena romántica bajo las estrellas",
      ],
      images: [
        "/images/22.jpeg",
        "/images/22.jpeg",
        "/images/lagarto1.jpeg",
        "/images/lagarto2.jpeg",
      ],
    },
  ]

  return (
    <section id="habitaciones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Habitaciones</Badge>
          <h2 className="text-4xl font-bold text-stone-800 mb-6">Comodidad y Confort</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Habitaciones diseñadas para tu descanso y bienestar, cada una con su propio encanto y personalidad
          </p>
        </div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div>
                  <h3 className="text-3xl font-bold text-stone-800 mb-2">{room.title}</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-stone-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>Hasta {room.people}</span>
                    </div>
                  </div>
                </div>

                <p className="text-stone-600 text-lg leading-relaxed">{room.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {room.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      {feature.icon}
                      <span className="text-stone-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-stone-800">Incluye:</h4>
                  <ul className="space-y-2 text-stone-600">
                    {room.amenities.map((amenity, amenityIndex) => (
                      <li key={amenityIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-800 rounded-full mr-3"></div>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full bg-amber-800 hover:bg-amber-900"
                  onClick={() => handleBooking("room", { title: room.title, people: room.people })}
                >
                  Reservar {room.title}
                </Button>
              </div>

              <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {room.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="relative group cursor-pointer" onClick={() => openModal(image)}>
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${room.title} - Vista ${imageIndex + 1}`}
                      width={1000}
                      height={1000}
                      className="rounded-lg shadow-lg object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal para imagen ampliada */}
            {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-1 hover:bg-black"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              width={1000}
              height={800}
              className="rounded-lg object-contain w-full h-auto max-h-[80vh] mx-auto"
            />
          </div>
        </div>
      )}

    </section>
  )
}
