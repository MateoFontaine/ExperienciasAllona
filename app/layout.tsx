import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://experienciasallona.com'),
  title: 'Experiencias Allona | Bed & Breakfast y Taller Creativo en Pinamar',
  description: 'Hospedate en Experiencias Allona: un bed & breakfast único en Pinamar donde el arte, la tranquilidad y la creatividad se encuentran. Talleres, experiencias sensoriales y alojamiento en un espacio con alma.',
  keywords: [
    'bed and breakfast en Pinamar',
    'hospedaje artístico en Pinamar',
    'experiencias creativas',
    'taller de arte en Pinamar',
    'alojamiento con talleres',
    'espacio creativo Pinamar',
    'turismo alternativo',
    'arte y naturaleza',
    'talleres sensoriales',
    'escapadas creativas'
  ],
  authors: [{ name: 'Experiencias Allona' }],
  generator: 'Next.js y Tailwind',
  creator: 'Experiencias Allona',
  openGraph: {
    title: 'Experiencias Allona | Arte y Hospedaje en Pinamar',
    description: 'Viví una experiencia distinta en Pinamar. Talleres artísticos, descanso, comunidad y naturaleza en un lugar único.',
    url: 'https://experienciasallona.com',
    siteName: 'Experiencias Allona',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/10.jpg', // cambiá esto si tenés una imagen para redes
        width: 1200,
        height: 630,
        alt: 'Experiencias Allona en Pinamar',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/Logo.jpg" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
