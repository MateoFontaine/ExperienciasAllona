import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <Image
              src="/images/10.jpg?height=500&width=600"
              alt="Experiencias Allona"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <Badge className="bg-amber-100 text-amber-800 mb-4">Bed & Breakfast</Badge>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">Un refugio artístico entre el mar y el bosque</h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              Nuestro Bed & Breakfast es un espacio pensado para el descanso y la inspiración. Cada habitación cuenta con baño privado para una estadía cómoda y relajada. En el cálido espacio común se sirve un delicioso desayuno cada mañana, y también podés disfrutar de un rincón de lectura o ver una buena película.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
