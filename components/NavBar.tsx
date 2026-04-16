'use client'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

const links = ['Projetos', 'Sobre mim', 'Contato']

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-charcoal/80 backdrop-blur-md border-b border-white/[0.05]"
      >

        <div className="font-serif text-2xl font-bold text-white tracking-wider z-50 relative flex items-center gap-3">
          {/* 3. Adicione sua foto de perfil */}
          <Image
            src="/pfp.png" // Caminho para sua foto na pasta public
            alt="Sua Foto de Perfil" // Descrição da imagem para acessibilidade
            width={40} // Largura desejada em pixels
            height={40} // Altura desejada em pixels
            className="rounded-full border border-champagne/30" // Estilo circular com borda sutil
          />
          {/* Seu nome */}
          Gustavo Fermino<span className="text-champagne"></span>
        </div>

      {/* Desktop Nav */}
<nav className="hidden md:flex gap-8">
  {links.map((item) => (
    <a
      key={item}
      // Esta lógica garante que o link seja #sobre quando o texto for "Sobre mim"
      href={`#${item === 'Sobre mim' ? 'sobre' : item.toLowerCase()}`}
      className="relative text-sm text-metallic hover:text-white transition-colors duration-300 group pb-1"
    >
      {item}
      <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-champagne -translate-x-1/2 transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  ))}
</nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-metallic z-50 relative focus:outline-none"
        >
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>
      </motion.header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {links.map((item, i) => (
  <motion.a
    key={item}
    // Garante que o link aponte para #sobre quando o texto for "Sobre mim"
    href={`#${item === 'Sobre mim' ? 'sobre' : item.toLowerCase()}`}
    onClick={() => setMenuOpen(false)}
    // ... restante das props
    className="font-serif text-4xl text-white hover:text-champagne transition-colors"
  >
    {item}
  </motion.a>
))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}