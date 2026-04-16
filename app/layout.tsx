import { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '../components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Gustavo Fermino | Front-end Engineer',
  description: 'Portfólio de Gustavo Fermino, desenvolvedor Front-end especializado em experiências digitais luxuosas e performáticas.',
  openGraph: {
    title: 'Gustavo Fermino | Engenharia Front-end de Elite',
    description: 'Construindo experiências digitais luxuosas e performáticas.',
    url: 'https://seusite.com.br',
    siteName: 'Gustavo Fermino',
    images: [
      {
        url: 'https://seusite.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gustavo Fermino Portfolio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-charcoal min-h-screen relative`}>
        {/* Componente Cliente que lida com o scroll */}
        <SmoothScroll />
        
        {/* Film Grain Overlay */}
<div className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-8 bg-[url('/noise.jpg')] bg-repeat"></div>
        
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}