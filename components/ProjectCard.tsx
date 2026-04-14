'use client'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import Image from 'next/image'
import LinkPreview from './LinkPreview'

interface ProjectProps {
  title: string;
  category: string;
  tech: string[];
  imageSrc?: string; // Tornando opcional para não quebrar enquanto você não tem as imagens
  link?: string;
}

export default function ProjectCard({ title, category, tech, imageSrc, link }: ProjectProps) {
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
      className="relative group w-full h-[400px] rounded-2xl bg-charcoal border border-white/[0.05] overflow-hidden"
    >
      {/* Imagem de Fundo Otimizada (Lazy Load por padrão no Next.js) */}
      {imageSrc && (
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      {/* Efeito Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
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
      
      <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 p-8 flex flex-col justify-end z-20">
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 flex flex-col justify-end p-8">
          <h3 className="font-serif text-3xl text-champagne mb-2">{title}</h3>
          <p className="text-metallic text-sm mb-4">{category}</p>
          <div className="flex gap-2 flex-wrap mb-6">
            {tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white">
                {t}
              </span>
            ))}
          </div>
          
          {/* Botão de Link Dinâmico */}
          {link && imageSrc && (
            <div className="mt-auto inline-block w-fit pointer-events-auto">
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