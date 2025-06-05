import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <Image
              src="/images/orosco.jpeg?height=500&width=600"
              alt="Experiencias Allona"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <Badge className="bg-amber-100 text-amber-800 mb-4">Sobre Orosco</Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Orosco</h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              📍Nació el 26 de septiembre de 1935 en Montevideo, Uruguay.
Radicada en Argentina, tuvo durante años su casa – taller en Pinamar, provincia de Buenos Aires. <br /> <br />
📍El trabajo de Beatriz Orosco establece un paralelismo entre las culturas precolombinas y las actuales culturas sudamericanas. Interesada por la cultura de los pueblos originarios ha recorrido en viaje de estudios gran parte del noroeste argentino. La divinidad de la Pachamama (la Madre Tierra) representa a la Tierra, pero no solo el suelo o la tierra geológica, así como tampoco solo la naturaleza; es todo ello en su conjunto. <br /> <br />
📍En 1982 obtuvo la Beca del Instituto de Cooperación Iberoamericano. Expuso sus trabajos en numerosos lugares y fue premiada en varias ocasiones. Su actividad en apoyo a la enseñanza y difusión del arte fue permanente y consideraba que el arte es sensibilidad, relacionando así el arte con la filosofía, materia que estudió varios años.
El espacio Yvi mara ey (la tierra sin mal) fue la casa de la artista plástica Beatriz Orosco (Premio Konex 1992) por mucho tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
