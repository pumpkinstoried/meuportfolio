'use client'

import { motion } from 'framer-motion'

const technologies = [
  'React',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'Firebase',
  'Git',
  'Flutter',
  'TypeScript',
]

export default function TechStack() {
  const marqueeItems = [...technologies, ...technologies]

  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-black py-12">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035),transparent_70%)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* Top subtle line glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.04]" />

      {/* Side fade gradients */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Center ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-32 w-[40rem] rounded-full bg-[#003366]/[0.05] blur-3xl" />
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-10"
          animate={{ x: '-50%' }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <span className="text-sm md:text-base uppercase tracking-[0.28em] text-white/65 font-light transition-all duration-300 hover:text-[#E7D2AE] hover:text-white">
                {tech}
              </span>

              <div className="h-[4px] w-[4px] rounded-full bg-white/15" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}