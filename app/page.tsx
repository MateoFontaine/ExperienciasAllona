"use client"

import { useState, useEffect } from "react"
import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import AboutOroscco from "@/components/sections/AboutOroscco"
import Experiences from "@/components/sections/Experiences"
import Rooms from "@/components/sections/Rooms"
import Gallery from "@/components/sections/Gallery"
import Services from "@/components/sections/Services"
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import WhatsAppWidget from "@/components/WhatsAppWidget"

export default function ExperienciasAllona() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
  const whatsappNumber = "2267533950"

  const heroImages = [
    "/images/1.jpg?height=600&width=1200",
    "/images/2.jpg?height=600&width=1200",
    "/images/3.jpg?height=600&width=1200",
    "/images/12.jpg?height=600&width=1200",
    "/images/pinceles.jpeg?height=600&width=1200",
  ]

// 2267533950    wsp


  const galleryImages = [
    "/images/1.jpg?height=600&width=1200",
    "/images/2.jpg?height=600&width=1200",
    "/images/3.jpg?height=600&width=1200",
    "/images/11.jpg?height=600&width=1200",
    "/images/7.jpg?height=600&width=1200",
    "/images/8.jpg?height=600&width=1200",
    "/images/9.jpg?height=600&width=1200",
    "/images/10.jpg?height=600&width=1200",
  ]

  // Función para enviar mensaje a WhatsApp
  const sendWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  // Función para manejar la reserva
  const handleBooking = (type, details = {}) => {
    let message = ""

    if (type === "availability") {
      const { checkinDate, checkoutDate, selectedGuests } = details

      // Convertir el valor de selectedGuests a texto legible
      let guestsText = ""
      switch (selectedGuests) {
        case "1":
          guestsText = "1 persona"
          break
        case "2":
          guestsText = "2 personas"
          break
        case "3":
          guestsText = "3 personas"
          break
        case "4":
          guestsText = "4 personas"
          break
        case "5":
          guestsText = "5 o más personas"
          break
        default:
          guestsText = "No especificado"
      }

      message = `Hola, me gustaría consultar disponibilidad para las siguientes fechas:\n\nLlegada: ${checkinDate || "No especificada"}\nSalida: ${checkoutDate || "No especificada"}\nPersonas: ${guestsText}`
    } else if (type === "room") {
      message = `Hola, me gustaría reservar la habitación "${details.title}" para ${details.people}.`
    } else {
      message = "Hola, me gustaría hacer una reserva en ExperienciasAllona."
    }

    sendWhatsAppMessage(message)
  }

  // Función para scroll suave a las secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-stone-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />

      <Hero
        heroImages={heroImages}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        handleBooking={handleBooking}
      />

      <About />
      <AboutOroscco />
      <Experiences />

      <Rooms handleBooking={handleBooking} />

      <Gallery
        galleryImages={galleryImages}
        currentGalleryImage={currentGalleryImage}
        setCurrentGalleryImage={setCurrentGalleryImage}
      />

      <Services />

      <TestimonialsCarousel />

      <Contact sendWhatsAppMessage={sendWhatsAppMessage} />

      <Footer scrollToSection={scrollToSection} />

      {/* Widget de WhatsApp */}
      <WhatsAppWidget sendWhatsAppMessage={sendWhatsAppMessage} />
    </div>
  )
}
