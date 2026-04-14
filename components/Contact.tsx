'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você conectaria com uma API (ex: Resend, Formspree)
    setIsSubmitted(true)
  }

  return (
    <section id="contato" className="py-24 px-6 md:px-12 max-w-3xl mx-auto relative min-h-[500px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="mb-12 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Vamos Conversar</h2>
              <p className="text-metallic">Quer transmitir mais autoridade e confiança aos seus clientes? Peça um orçamento sem compromisso.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 relative group">
                <input 
                  type="text" 
                  required
                  placeholder="Seu Nome" 
                  className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-metallic focus:outline-none focus:border-champagne transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2 relative group">
                <input 
                  type="email" 
                  required
                  placeholder="Seu E-mail" 
                  className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-metallic focus:outline-none focus:border-champagne transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2 relative group">
                <textarea 
                  required
                  placeholder="Detalhes do Projeto" 
                  rows={4}
                  className="bg-transparent border-b border-white/20 pb-4 text-white placeholder-metallic focus:outline-none focus:border-champagne transition-colors resize-none mt-4"
                />
              </div>
              <button 
                type="submit"
                className="mt-8 py-4 px-8 bg-white text-charcoal font-medium hover:bg-champagne transition-colors duration-300 w-fit mx-auto"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 rounded-full border-2 border-champagne flex items-center justify-center mb-6">
              <motion.svg 
                className="w-8 h-8 text-champagne" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </motion.svg>
            </div>
            <h3 className="font-serif text-3xl text-white mb-2">Mensagem Enviada</h3>
            <p className="text-metallic">Retornarei o contato o mais breve possível.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}