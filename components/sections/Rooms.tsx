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
        "Inspirada en la obra de Beatriz Orosco, esta habitación rinde homenaje a su universo de peces coloridos, símbolo de libertad, fluidez y vida. Cada detalle está pensado para transmitir esa misma sensación de movimiento sereno y armonía visual que evocan sus creaciones. Los tonos suaves, la luz natural que se filtra por las cortinas y la calidez de los materiales generan un entorno acogedor, ideal para relajarse y reconectar. Como en las obras de Orosco, donde el color y la forma dialogan en equilibrio, esta habitación invita a sumergirse en una experiencia estética y placentera.",
      people: "2 personas",
      features: [
        { icon: <Bed className="w-5 h-5 text-amber-800" />, text: "2 camas simple o una doble" },
        { icon: <Bath className="w-5 h-5 text-amber-800" />, text: "Baño privado" },
        { icon: <Eye className="w-5 h-5 text-amber-800" />, text: "Vista al jardín" },
      ],
      amenities: [
        "Cama hecha con sábanas de algodón y almohadas mullidas",
        "Toallas de cuerpo y manos",
        "Secador de pelo",
        "Shampoo, acondicionador y jabón líquido de cortesía",
        "Calefacción por radiador",
        "Baño privado con ducha",
        "Cerradura electrónica con código personalizado",
        "Vista al limonero del jardín",
        "WiFi gratuito de alta velocidad",
        "Secado de pelo",
      ],
      images: [
        "/images/13.jpeg?height=300&width=300",
        "/images/1-camaPlacard.jpeg?height=300&width=300",
        "/images/15.jpeg?height=300&width=300",
        "/images/1-bano.jpeg?height=300&width=300",
      ],
    },
    {
      title: "Rana",
      description:
        "Esta habitación toma su nombre en homenaje a una artista plástica que encontraba en las ranas su inspiración constante. Un símbolo de transformación, naturaleza y serenidad, que se refleja en cada detalle del espacio. Al igual que en las obras de Orozco, donde la fuerza de lo humano se expresa en los trazos, esta habitación combina calidez, carácter y armonía. Las texturas suaves, la iluminación tenue y los materiales nobles invitan a la contemplación y al descanso. Ideal para quienes valoran el arte en todas sus formas, desde lo visual hasta lo sensorial.",
      people: "2 personas",
      features: [
        { icon: <Bed className="w-5 h-5 text-amber-800" />, text: "Cama matrimonial" },
        { icon: <Bath className="w-5 h-5 text-amber-800" />, text: "Baño con jacuzzi" },
        { icon: <Eye className="w-5 h-5 text-amber-800" />, text: "Balcón privado" },
        { icon: <Maximize className="w-5 h-5 text-amber-800" />, text: "30m² de espacio" },
      ],
      amenities: [
        "Cama hecha con sábanas de algodón y almohadas mullidas",
        "Toallas de cuerpo y manos",
        "Secador de pelo",
        "Shampoo, acondicionador y jabón líquido de cortesía",
        "Calefacción por radiador",
        "Baño privado con ducha",
        "Cerradura electrónica con código personalizado",
        "WiFi gratuito de alta velocidad",
        "Secado de pelo",
      ],
      images: [
        "/images/24.jpeg?height=300&width=300",
        "/images/2-bano.jpeg?height=300&width=300",
        "/images/rana1.jpeg?height=300&width=300",
        "/images/rana2.jpeg?height=300&width=300",
      ],
    },
        {
      title: "Armadillo",
      description:
        "Inspirada en los trabajos de Beatriz Orosco, esta habitación lleva el nombre del lagarto, criatura ligada al sol, al calor de la tierra y al arte de moverse con pausa y precisión. Como en sus obras, donde los colores y las formas remiten a la naturaleza viva, esta habitación es un espacio de contemplación y equilibrio. La calidez de la madera, la luz que atraviesa suavemente el ambiente y los detalles rústicos invitan a conectar con uno mismo, como lo haría un lagarto al sol. Un refugio sereno, donde el tiempo se estira y la mente respira.",
      people: "2 personas",
      features: [
        { icon: <Bed className="w-5 h-5 text-amber-800" />, text: "2 camas dobles" },
        { icon: <Bath className="w-5 h-5 text-amber-800" />, text: "Baño privado" },
        { icon: <Eye className="w-5 h-5 text-amber-800" />, text: "Vista al jardín" },
        { icon: <Maximize className="w-5 h-5 text-amber-800" />, text: "45m² de espacio" },
      ],
     amenities: [
        "Cama hecha con sábanas de algodón y almohadas mullidas",
        "Toallas de cuerpo y manos",
        "Secador de pelo",
        "Shampoo, acondicionador y jabón líquido de cortesía",
        "Calefacción por radiador",
        "Baño privado con ducha",
        "Cerradura electrónica con código personalizado",
        "WiFi gratuito de alta velocidad",
        "Secado de pelo",
      ],
      images: [
        "/images/17.jpeg?height=300&width=300",
        "/images/16.jpeg?height=300&width=300",
        "/images/3-bano.jpeg?height=300&width=300",
        "/images/3-placard.jpeg?height=300&width=300",
      ],
    },
    {
      title: "Lagarto",
      description:
        "Perfecta para parejas que buscan un ambiente romántico y acogedor. Con 30m² de elegancia y confort, esta habitación ofrece la combinación ideal entre intimidad y lujo, con vistas espectaculares desde su balcón privado.",
      people: "2 personas",
      features: [
        { icon: <Bed className="w-5 h-5 text-amber-800" />, text: "Cama matrimonial" },
        { icon: <Eye className="w-5 h-5 text-amber-800" />, text: "Balcón privado" },
      ],
      amenities: [
        "Cama hecha con sábanas de algodón y almohadas mullidas",
        "Toallas de cuerpo y manos",
        "Secador de pelo",
        "Shampoo, acondicionador y jabón líquido de cortesía",
        "Calefacción por radiador",
        "Baño privado con ducha",
        "Cerradura electrónica con código personalizado",
        "Balcon privado",
        "WiFi gratuito de alta velocidad",
        "Secado de pelo",
      ],
      images: [
        "/images/22.jpeg",
        "/images/4-bano.jpeg",
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
  height={900}
  className="rounded-lg shadow-lg object-cover w-full h-[220px] group-hover:scale-105 transition-transform duration-300"
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
