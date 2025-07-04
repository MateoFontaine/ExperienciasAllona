/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 esta línea permite exportar el sitio como HTML

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 👈 necesario para exportar imágenes en modo estático
  },
}

export default nextConfig
