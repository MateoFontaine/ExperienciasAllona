"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { useState } from "react"

interface HeroProps {
  heroImages: string[]
  currentSlide: number
  setCurrentSlide: (slide: number) => void
  handleBooking: (type: string, details?: any) => void
}

export default function Hero({ heroImages, currentSlide, setCurrentSlide, handleBooking }: HeroProps) {
  const [checkinDate, setCheckinDate] = useState("")
  const [checkoutDate, setCheckoutDate] = useState("")
  const [selectedGuests, setSelectedGuests] = useState("")
  const [dateError, setDateError] = useState("")

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section id="inicio" className="relative h-screen overflow-hidden mt-20">
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Experiencias Allona ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <p className="text-lg mb-4 tracking-wide">BIENVENIDOS A EXPERIENCIAS ALLONA</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Un lugar donde desconectar y simplemente estar</h1>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
