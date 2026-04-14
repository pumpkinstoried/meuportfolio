'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface LinkPreviewProps {
  children: React.ReactNode;
  url: string;
  imageSrc: string; // O caminho da imagem na sua pasta public (ex: '/preview-clinica.jpg')
}

export default function LinkPreview({ children, url, imageSrc }: LinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative z-10 text-champagne hover:text-white transition-colors duration-300 font-medium pb-1"
      >
        {children}
        {/* Linha animada do link (Sublinhado) */}
        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-champagne transition-all duration-300 ease-out group-hover:w-full" />
      </a>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 h-40 rounded-xl overflow-hidden shadow-2xl border border-white/10 z-50 pointer-events-none"
          >
            {/* O placeholder 'blur' exige que você configure blurDataURL ou use imagens locais */}
            <Image 
              src={imageSrc}
              alt="Preview do site"
              fill
              className="object-cover"
              sizes="256px"
            />
            {/* Overlay para manter o contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}