"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

interface GalleryProps {
  galleryImages: string[]
  currentGalleryImage: number
  setCurrentGalleryImage: (index: number) => void
}

export default function Gallery({ galleryImages, currentGalleryImage, setCurrentGalleryImage }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextGalleryImage = () => {
    setCurrentGalleryImage((currentGalleryImage + 1) % galleryImages.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryImage((currentGalleryImage - 1 + galleryImages.length) % galleryImages.length)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="galeria" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-amber-100 text-amber-800 mb-4">Galería</Badge>
          <h2 className="text-4xl font-bold text-stone-800 mb-6">Descubre Nuestro Paraíso</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Una colección de imágenes que capturan la belleza y tranquilidad de ExperienciasAllona
          </p>
        </div>

        {/* Galería principal con carrusel */}
        <div className="relative mb-12">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden cursor-pointer" onClick={openModal}>
            <Image
              src={galleryImages[currentGalleryImage] || "/placeholder.svg"}
              alt={`Galería ${currentGalleryImage + 1}`}
              fill
              className="object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentGalleryImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mb-8">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentGalleryImage(index)}
              className={`relative h-20 rounded-lg overflow-hidden transition-all ${
                index === currentGalleryImage ? "ring-2 ring-amber-800 scale-105" : "hover:scale-105"
              }`}
            >
              <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
              <Image
                src={galleryImages[currentGalleryImage] || "/placeholder.svg"}
                alt={`Galería ampliada ${currentGalleryImage + 1}`}
                fill
                className="object-contain"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navegación en modal */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevGalleryImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextGalleryImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
