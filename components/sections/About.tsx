import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-amber-100 text-amber-800 mb-4">Sobre Nosotros</Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Una Experiencia con el ARTE</h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              El espacio Yvi Mara Ey (la tierra sin mal) fue la casa de la artista plástica Beatriz Orosco por mucho tiempo.
Marcó una línea expresiva, una manera de ver y apreciar el arte y hoy sigue iluminado.
¿Sabías que? su nombre era para los guaraníes un lugar donde solo podían encaminarse aquellos que tuvieran coraje, perseverancia y fuerza espiritual. Esas virtudes las manifestaban a través de sus danzas y cantos que ellos denominaban “bellas palabras’. La Belleza como puente entre hombres y dioses, la belleza que interroga más que comunica.
Hoy creemos que es esta belleza de lo que nos rodea viene a hacernos preguntas, a movernos e inquietarnos y por eso seguimos buscando experiencias que asombren, que renueven la mirada, que vayan y vengan en ideas compartidas y que expresen con fuerza esas "bellas palabras".
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">3+</div>
                <div className="text-stone-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">105+</div>
                <div className="text-stone-600">Huéspedes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">8.5</div>
                <div className="text-stone-600">Calificación Promedio</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/afuera.jpeg?height=500&width=600"
              alt="Experiencias Allona"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
