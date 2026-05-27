'use client'

import { motion } from 'framer-motion'
import { MessageCircleCheck } from 'lucide-react'

export default function Contact() {
  const whatsappNumber = '5548992032007'

  const message = encodeURIComponent(
    'Olá! Vi o seu portfólio e gostaria de conversar sobre um projeto.'
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <section
      id="contato"
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.05]
        bg-black
        py-32
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_70%)]" />

      {/* Ambient champagne glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[32rem] w-[42rem] rounded-full bg-[#C7A97B]/[0.05] blur-3xl" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* Floating blur */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12">
        
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            inline-block
            text-[11px]
            uppercase
            tracking-[0.32em]
            text-white/40
          "
        >
          Contato
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="
            mx-auto
            mt-8
            max-w-4xl
            font-serif
            text-5xl
            leading-[0.92]
            text-white
            md:text-7xl
          "
        >
          Automatize o seu negócio e aumente sua produtividade.
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mx-auto
            mt-10
            h-px
            w-40
            bg-gradient-to-r
            from-transparent
            via-[#E7D2AE]/70
            to-transparent
          "
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="
            mx-auto
            mt-10
            max-w-2xl
            text-base
            leading-relaxed
            text-white/50
            md:text-xl
          "
        >
          Desenvolvimento de sistemas, automações empresariais e experiências
          web construídas para empresas que buscam mais eficiência,
          posicionamento e sofisticação digital.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-14"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              inline-flex
              items-center
              gap-4
              overflow-hidden
              rounded-full
              border
              border-[#E7D2AE]/20
              bg-[#E7D2AE]/[0.06]
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.22em]
              text-[#E7D2AE]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#E7D2AE]/40
              hover:bg-[#E7D2AE]/[0.1]
              hover:scale-[1.02]
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_center,rgba(231,210,174,0.15),transparent_65%)]
                "
              />
            </div>

            <MessageCircleCheck
              size={18}
              className="relative z-10"
            />

            <span className="relative z-10">
              Solicitar Consultoria
            </span>
          </a>
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="
            mt-10
            text-sm
            uppercase
            tracking-[0.18em]
            text-white/30
          "
        >
          Garopaba — SC · Atendimento remoto para todo o Brasil
        </motion.p>
      </div>
    </section>
  )
}