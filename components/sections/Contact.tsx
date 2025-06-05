"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

interface ContactProps {
  sendWhatsAppMessage: (message: string) => void
}

export default function Contact({ sendWhatsAppMessage }: ContactProps) {
  return (
    <section id="contacto" className="py-20 bg-stone-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
            <p className="text-stone-300 text-lg mb-8">
              ¿Tienes preguntas? Estamos aquí para ayudarte a planificar tu experiencia perfecta.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-400" />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-400" />
                <span>info@experienciasallona.cl</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-amber-400" />
                <span>Camino Rural 123, Región de Valparaíso, Chile</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-800"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-800"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <Card className="bg-white text-stone-800">
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
              <CardDescription>Te responderemos a la brevedad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" placeholder="Tu nombre" />
                </div>
                <div>
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" placeholder="Tu apellido" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="+56 9 1234 5678" />
              </div>
              <div>
                <Label htmlFor="message">Mensaje</Label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-stone-300 rounded-md resize-none h-24"
                  placeholder="Cuéntanos sobre tu consulta..."
                />
              </div>
              <Button
                className="w-full bg-amber-800 hover:bg-amber-900"
                onClick={() => sendWhatsAppMessage("Nuevo mensaje de contacto desde el sitio web")}
              >
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
