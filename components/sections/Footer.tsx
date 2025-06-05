"use client"

import { Mountain } from "lucide-react"
import Image from "next/image"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
                <Image
  src="/images/Logo.jpg"
  alt="Logo Experiencias Allona"
  width={48}
  height={48}
  className="rounded-full object-cover"
/>

              </div>
              <span className="font-bold text-lg">ExperienciasAllona</span>
            </div>
            <p className="text-stone-400">
              Tu refugio perfecto en la naturaleza, donde cada momento se convierte en una experiencia inolvidable.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => scrollToSection("inicio")} className="hover:text-white">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("experiencias")} className="hover:text-white">
                  Experiencias
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("habitaciones")} className="hover:text-white">
                  Habitaciones
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("servicios")} className="hover:text-white">
                  Servicios
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-stone-400">
              <li>Alojamiento</li>
              <li>Gastronomía</li>
              <li>Tours Guiados</li>
              <li>Actividades</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-stone-400">
              <li>+56 9 1234 5678</li>
              <li>info@experienciasallona.cl</li>
              <li>Región de Valparaíso, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; 2024 ExperienciasAllona. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
