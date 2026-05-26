'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const name = 'Gustavo Fermino'.split('')

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const letterAnim: Variants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotate: 15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 150,
      },
    },
  }

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        duration: 0.8,
      },
    },
  }

  const techStack = [
    'React',
    'Next.js',
    'Flutter',
    'Firebase',
    'TypeScript',
    'Tailwind',
  ]

  return (
    <section className="relative min-h-screen overflow-hidden z-0 px-6">
      {/* Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center">

        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="
  z-10
  w-full
  lg:w-1/2
  flex
  flex-col
  items-center
  text-center
  lg:items-start
  lg:text-left
  justify-center
  py-24
"
        >
          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white flex flex-wrap justify-center lg:justify-start overflow-hidden mb-6 pb-2">
            {name.map((letter, index) => (
              <motion.span
                variants={letterAnim}
                key={index}
                className={
                  letter === ' '
                    ? 'w-4 md:w-8'
                    : 'inline-block transform-gpu'
                }
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.h2
            variants={fadeUp}
            className="text-lg md:text-2xl font-light text-metallic max-w-2xl mb-12 leading-relaxed"
          >
            Construindo sites e sistemas para o seu negócio{' '}
            <span className="text-champagne font-normal">
              evoluir.
            </span>
          </motion.h2>

          {/* Card */}
          <motion.div
            variants={fadeUp}
            className="
              max-w-3xl
              bg-white/[0.02]
              border
              border-white/[0.05]
              rounded-3xl
              p-6
              md:p-8
              backdrop-blur-md
              mb-16
              shadow-2xl
              relative
              overflow-hidden
              group
              hover:border-champagne/20
              transition-colors
              duration-500
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 relative z-10">
              Especialista em criação de sites e automações
              empresariais.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 relative z-10">
              Experiência com aplicativos móveis, sistemas web,
              integrações de APIs, automações e soluções
              personalizadas para negócios de todos os tamanhos.
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap justify-start gap-3 relative z-10">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  className="
                    px-4
                    py-1.5
                    text-xs
                    md:text-sm
                    text-champagne
                    border
                    border-champagne/10
                    rounded-full
                    bg-champagne/[0.03]
                    transition-colors
                    hover:bg-champagne/10
                    hover:border-champagne/30
                  "
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeUp}
            className="text-metallic/50 flex flex-col items-center gap-2 w-full"
          >
            <span className="text-xs uppercase tracking-widest">
              Saiba mais
            </span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              }}
            >
              <ArrowDown className="w-5 h-5 text-champagne/70" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-screen flex items-center justify-center px-8 lg:px-20 mb-24 lg:mb-0">

          {/* Example Design Element */}
          <div className="relative w-full max-w-[500px] aspect-square">

            {/* Glow */}
            <div className="absolute inset-0 bg-champagne/10 blur-[100px] rounded-full" />

            {/* Main Glass Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute
              inset-0
              rounded-[40px]
              overflow-hidden
            "
            >
              <Image
                src="/mockup.png"
                alt="Project Preview"
                fill
                sizes = "(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                top-[10%]
                left-[-10%]
                w-40
                h-24
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                backdrop-blur-md
              "
            />

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                absolute
                bottom-[10%]
                right-[-10%]
                w-48
                h-28
                rounded-2xl
                bg-champagne/[0.05]
                border
                border-champagne/10
                backdrop-blur-md
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}