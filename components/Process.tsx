'use client'
import { motion } from 'framer-motion'
import { MessageSquare, Layout, Code, Rocket } from 'lucide-react'

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "1. Formulário de Briefing",
    description: "Responda a perguntas detalhadas sobre seus objetivos, público-alvo e a essência da sua marca."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "2. Design e Aprovação",
    description: "Criação de um layout exclusivo focado em experiência de luxo e conversão."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "3. Desenvolvimento",
    description: "Transformo o design em código de alta performance, sem dor de cabeça para você."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "4. Lançamento e Suporte",
    description: "Seu site vai ao ar com otimização total e acompanhamento técnico contínuo."
  }
]

export default function Process() {
  return (
    <section id="processo" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">O Método</h2>
        <p className="text-metallic max-w-2xl">
          Um processo organizado para garantir excelência técnica e tranquilidade para sua agenda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] group hover:border-champagne/30 transition-colors"
          >
            <div className="text-champagne mb-6 group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <h3 className="text-xl font-medium text-white mb-4">{step.title}</h3>
            <p className="text-metallic text-sm leading-relaxed">
              {step.description}
            </p>
            
            {/* Linha conectora visual para desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}