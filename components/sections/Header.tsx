"use client"

import { Mountain, Menu, X } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (sectionId: string) => void
}

export default function Header({ isMenuOpen, setIsMenuOpen, scrollToSection }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-200/50 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center">
              <Image
  src="/images/Logo.jpg"
  alt="Logo Experiencias Allona"
  width={48}
  height={48}
  className="rounded-full object-cover"
/>
            </div>
            <div>
              <h1 className="text-xl font-bold text-black">ExperienciasAllona</h1>
              <p className="text-xs text-stone-600">Refugio con arte</p>
            </div>
          </div>

          {/* Menú de navegación para pantallas medianas y grandes */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-stone-700 hover:text-amber-800 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("experiencias")}
              className="text-stone-700 hover:text-amber-800 font-medium"
            >
              Experiencias
            </button>
            <button
              onClick={() => scrollToSection("habitaciones")}
              className="text-stone-700 hover:text-amber-800 font-medium"
            >
              Habitaciones
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-stone-700 hover:text-amber-800 font-medium"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-stone-700 hover:text-amber-800 font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-stone-700 hover:text-amber-800 font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* Botón de hamburguesa para móviles */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-stone-700 hover:text-amber-800 font-medium text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("experiencias")}
                className="text-stone-700 hover:text-amber-800 font-medium text-left"
              >
                Experiencias
              </button>
              <button
                onClick={() => scrollToSection("habitaciones")}
                className="text-stone-700 hover:text-amber-800 font-medium text-left"
              >
                Habitaciones
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-stone-700 hover:text-amber-800 font-medium text-left"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-stone-700 hover:text-amber-800 font-medium text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-stone-700 hover:text-amber-800 font-medium text-left"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
