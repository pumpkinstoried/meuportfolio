'use client'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import Image from 'next/image'
import LinkPreview from './LinkPreview'

interface ProjectProps {
  title: string;
  category: string;
  description?: string;
  imageSrc?: string; 
  link?: string;
}

export default function ProjectCard({ title, category, description, imageSrc, link }: ProjectProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    x.set(mouseXPos / width - 0.5)
    y.set(mouseYPos / height - 0.5)
    mouseX.set(mouseXPos)
    mouseY.set(mouseYPos)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      // 'isolate' e 'ring-1' resolvem o vazamento da linha branca nos cantos arredondados
      className="relative z-20 group w-full h-[450px] md:h-[500px] rounded-2xl bg-charcoal ring-1 ring-white/[0.05] overflow-hidden shrink-0 isolate"
    >
      {/* Imagem de Fundo Otimizada (envolvida em uma div para evitar bleed sub-pixel) */}
      {imageSrc && (
        <div className="absolute inset-0 z-0 bg-black">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Efeito Glow - Alterado para inset-0 para não sair dos limites do card */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(247, 231, 206, 0.08),
              transparent 40%
            )
          `,
        }}
      />
      
      <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 flex flex-col justify-end z-20">
        {/* Overlay de gradiente com base 100% preta para ocultar qualquer corte nas imagens */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-charcoal/80 to-transparent z-10 pointer-events-none" />
        
        {/* Conteúdo Informativo */}
        <div className="relative z-20 flex flex-col justify-end p-6 md:p-8 h-full">
          <h3 className="font-serif text-2xl md:text-3xl text-champagne mb-1">{title}</h3>
          <p className="text-champagne text-xs font-bold uppercase tracking-wider mb-4">{category}</p>
          
          {description && (
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
              {description}
            </p>
          )}
          
          {link && imageSrc && (
            <div className="inline-block w-fit pointer-events-auto">
              <LinkPreview url={link} imageSrc={imageSrc}>
                Visualizar Projeto
              </LinkPreview>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}