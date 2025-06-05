"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, X } from "lucide-react"

interface WhatsAppWidgetProps {
  sendWhatsAppMessage: (message: string) => void
}

export default function WhatsAppWidget({ sendWhatsAppMessage }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  const predefinedMessages = [
    "Hola, me gustaría obtener más información sobre las habitaciones y tarifas.",
    "¿Tienen disponibilidad para este fin de semana? Somos una pareja.",
    "Me interesa conocer las actividades y experiencias que ofrecen.",
    "Quisiera consultar sobre paquetes familiares y servicios incluidos.",
    "¿Cuáles son las opciones de gastronomía y horarios de comida?",
    "Me gustaría saber sobre las políticas de cancelación y reservas.",
  ]

  const handleMessageClick = (message: string) => {
    sendWhatsAppMessage(message)
    setIsOpen(false)
  }

  const handleOpenWhatsApp = () => {
    sendWhatsAppMessage("Hola, me gustaría obtener más información sobre ExperienciasAllona.")
    setIsOpen(false)
  }

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 group"
        >
          {/* Animación radar */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30"></div>

          <MessageCircle className="w-6 h-6 relative z-10" />
        </button>
      </div>

      {/* Modal de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]">
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            {/* Header */}
            <CardHeader className="bg-green-500 text-white p-4 relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Contáctanos</h3>
                  <p className="text-green-100 text-sm">Responderemos a la brevedad</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-600 rounded-full p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-4 space-y-4">
              <p className="text-gray-600 text-sm">Selecciona un mensaje o escribe el tuyo propio en WhatsApp:</p>

              {/* Mensajes predefinidos */}
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {predefinedMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleMessageClick(message)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors border border-gray-200"
                  >
                    {message}
                  </button>
                ))}
              </div>

              {/* Botón principal de WhatsApp */}
              <Button
                onClick={handleOpenWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Overlay para cerrar en móvil */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
