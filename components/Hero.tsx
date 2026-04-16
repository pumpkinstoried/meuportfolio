'use client'
import { motion, Variants } from 'framer-motion'

export default function Hero() {
  const name = "Gustavo Fermino".split("")
  
  // Tipando explicitamente como Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
    }),
  }

  // Tipando explicitamente como Variants
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-[150px] mix-blend-screen" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        className="z-10 text-center"
      >
        <motion.p variants={child} className="text-metallic tracking-[0.3em] uppercase text-sm mb-6">
          Desenvolvedor Full-stack
        </motion.p>
        
        <h1 className="font-serif text-6xl md:text-8xl font-medium text-white flex justify-center overflow-hidden">
          {name.map((letter, index) => (
            <motion.span variants={child} key={index} className={letter === " " ? "w-4" : ""}>
              {letter}
            </motion.span>
          ))}
        </h1>
        
        <motion.div variants={child} className="mt-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-champagne via-white to-metallic text-xl md:text-2xl font-light">
            Construindo sites para o seu negócio transmitir a autoridade e confiança que ele merece.
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}