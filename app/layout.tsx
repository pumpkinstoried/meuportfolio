import { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import SmoothScroll from '../components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Gustavo Fermino | Desenvolvedor',
  description: 'Portfólio de Gustavo Fermino, desenvolvedor backend especializado em automações empresariais e sites.',
  openGraph: {
    title: 'Gustavo Fermino | Desenvolvedor',
    description: 'Construindo sistemas, sites e automações.',
    url: 'https://meuportfolio-3aal.vercel.app/',
    siteName: 'Gustavo Fermino',
    images: [
      {
        url: 'https://meuportfolio-3aal.vercel.app/og-image.jpg',
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
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}