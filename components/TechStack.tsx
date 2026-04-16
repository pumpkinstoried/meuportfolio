'use client'
import { motion } from 'framer-motion'

const technologies = [
"React", "Tailwind CSS", "Framer Motion", "Node.js", "Firebase", "Git", "React Native", "Flutter", "JavaScript"
]

export default function TechStack() {
  // Duplicamos o array para que o efeito de loop infinito seja contínuo e sem saltos
  const marqueeItems = [...technologies, ...technologies]

  return (
    <section className="py-24 overflow-hidden relative bg-charcoal border-y border-white/[0.05]">
      {/* Sombras laterais para dar profundidade de fade-in/fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10" />

      <div className="flex w-fit">
        <motion.div
          className="flex gap-12 px-6"
          animate={{ x: "-50%" }}
          transition={{
            duration: 30, // Quanto maior, mais lento e luxuoso
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center whitespace-nowrap"
            >
              <span className="text-2xl md:text-4xl font-serif text-metallic opacity-50 hover:opacity-100 hover:text-champagne transition-all duration-300 cursor-default">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}