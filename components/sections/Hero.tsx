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

  // Validar fechas
  const validateDates = (checkin: string, checkout: string) => {
    if (!checkin || !checkout) return ""

    const checkinDateObj = new Date(checkin)
    const checkoutDateObj = new Date(checkout)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Verificar que la fecha de llegada no sea en el pasado
    if (checkinDateObj < today) {
      return "La fecha de llegada no puede ser anterior a hoy"
    }

    // Verificar que la fecha de salida sea posterior a la de llegada
    if (checkoutDateObj <= checkinDateObj) {
      return "La fecha de salida debe ser posterior a la fecha de llegada"
    }

    // Verificar que la estadía sea de al menos 1 día
    const diffTime = checkoutDateObj.getTime() - checkinDateObj.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 1) {
      return "La estadía debe ser de al menos 1 día"
    }

    return ""
  }

  const handleCheckinChange = (date: string) => {
    setCheckinDate(date)
    const error = validateDates(date, checkoutDate)
    setDateError(error)
  }

  const handleCheckoutChange = (date: string) => {
    setCheckoutDate(date)
    const error = validateDates(checkinDate, date)
    setDateError(error)
  }

  const isFormValid = checkinDate && checkoutDate && selectedGuests && !dateError

  const handleAvailabilityCheck = () => {
    if (isFormValid) {
      // Pasar los datos del formulario a la función handleBooking
      handleBooking("availability", {
        checkinDate,
        checkoutDate,
        selectedGuests,
      })
    }
  }

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split("T")[0]

  // Obtener fecha mínima para checkout (día después del checkin)
  const getMinCheckoutDate = () => {
    if (!checkinDate) return today
    const checkinDateObj = new Date(checkinDate)
    checkinDateObj.setDate(checkinDateObj.getDate() + 1)
    return checkinDateObj.toISOString().split("T")[0]
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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Un lugar donde desconectar y simplemnte estar</h1>

            {/* Booking Form */}
            <Card className="bg-white/70 backdrop-blur-lg max-w-4xl mx-auto border-white/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin" className="text-stone-700">
                      Fecha de Llegada
                    </Label>
                    <div className="relative">
                      <Input
                        id="checkin"
                        type="date"
                        className={`pl-10 ${dateError && checkinDate ? "border-red-500" : ""}`}
                        value={checkinDate}
                        min={today}
                        onChange={(e) => handleCheckinChange(e.target.value)}
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkout" className="text-stone-700">
                      Fecha de Salida
                    </Label>
                    <div className="relative">
                      <Input
                        id="checkout"
                        type="date"
                        className={`pl-10 ${dateError && checkoutDate ? "border-red-500" : ""}`}
                        value={checkoutDate}
                        min={getMinCheckoutDate()}
                        onChange={(e) => handleCheckoutChange(e.target.value)}
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-stone-700">
                      N° de Personas
                    </Label>
                    <div className="relative">
                      <Select value={selectedGuests} onValueChange={setSelectedGuests}>
                        <SelectTrigger className="pl-10 guests-select">
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Persona</SelectItem>
                          <SelectItem value="2">2 Personas</SelectItem>
                          <SelectItem value="3">3 Personas</SelectItem>
                          <SelectItem value="4">4 Personas</SelectItem>
                          <SelectItem value="5">5+ Personas</SelectItem>
                        </SelectContent>
                      </Select>
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                    </div>
                  </div>

                  <div className="flex items-end">
                    <Button
                      className={`w-full h-10 text-white transition-all ${
                        isFormValid
                          ? "bg-amber-800 hover:bg-amber-900 cursor-pointer"
                          : "bg-gray-400 cursor-not-allowed opacity-50"
                      }`}
                      onClick={handleAvailabilityCheck}
                      disabled={!isFormValid}
                    >
                      Ver Disponibilidad
                    </Button>
                  </div>
                </div>

                {/* Error message */}
                {dateError && (
                  <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">{dateError}</span>
                  </div>
                )}
              </CardContent>
            </Card>
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
