'use client'

import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import {
  MessageSquare,
  Layout,
  Code2,
  Rocket,
  Search,
  Database,
  FileText,
  FlaskConical,
  CheckCircle2,
  Wrench,
} from 'lucide-react'

const websiteSteps = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: '1. Briefing',
    description:
      'Entendimento da marca, objetivos do projeto e estrutura necessária para a experiência digital.',
  },

  {
    icon: <Layout className="h-6 w-6" />,
    title: '2. Design',
    description:
      'Criação de uma interface exclusiva com foco em estética premium, clareza e conversão.',
  },

  {
    icon: <Code2 className="h-6 w-6" />,
    title: '3. Desenvolvimento',
    description:
      'Transformação do design em uma aplicação moderna, responsiva e otimizada para performance.',
  },

  {
    icon: <Rocket className="h-6 w-6" />,
    title: '4. Lançamento',
    description:
      'Publicação do projeto com otimizações finais, suporte técnico e acompanhamento inicial.',
  },
]

const automationSteps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: '1. Consultoria',
    description:
      'Reunião estratégica para entender processos internos e identificar possibilidades de automação.',
  },

  {
    icon: <Database className="h-6 w-6" />,
    title: '2. Coleta de Dados',
    description:
      'Análise de fluxogramas, acessos e operações atuais para aprofundamento técnico da solução.',
  },

  {
    icon: <FileText className="h-6 w-6" />,
    title: '3. Proposta Comercial',
    description:
      'Estruturação do escopo, arquitetura do sistema e apresentação da proposta comercial.',
  },

  {
    icon: <FlaskConical className="h-6 w-6" />,
    title: '4. Desenvolvimento & Testes',
    description:
      'Integração híbrida com a operação atual da empresa para testes, refinamentos e ajustes.',
  },

  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: '5. Entrega',
    description:
      'Após o período de validação operacional, o sistema é oficialmente entregue.',
  },

  {
    icon: <Wrench className="h-6 w-6" />,
    title: '6. Manutenção',
    description:
      'Suporte contínuo, melhorias e acompanhamento técnico mensal conforme a complexidade do sistema.',
  },
]

function ProcessGrid({
  steps,
}: {
  steps: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.35 }}
      className="
        mt-14
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.06]
            bg-white/[0.02]
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-[#E7D2AE]/20
            hover:bg-white/[0.03]
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
                bg-[radial-gradient(circle_at_top_left,rgba(231,210,174,0.08),transparent_45%)]
              "
            />
          </div>

          {/* Reflection */}
          <div
            className="
              absolute
              -left-1/4
              top-0
              h-full
              w-[35%]
              rotate-12
              bg-white/[0.03]
              opacity-0
              blur-3xl
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          <div className="relative z-10">
            
            {/* Icon */}
            <div
              className="
                mb-8
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.06]
                bg-white/[0.03]
                text-[#E7D2AE]
                transition-transform
                duration-500
                group-hover:scale-105
              "
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3
              className="
                max-w-[90%]
                text-2xl
                leading-tight
                text-white
              "
            >
              {step.title}
            </h3>

            {/* Divider */}
            <div
              className="
                mt-6
                h-px
                w-0
                bg-gradient-to-r
                from-[#E7D2AE]/60
                to-transparent
                transition-all
                duration-700
                group-hover:w-24
              "
            />

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[95%]
                text-sm
                leading-relaxed
                text-white/55
                md:text-base
              "
            >
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Process() {
  const [activeProcess, setActiveProcess] = useState<
    'website' | 'automation'
  >('website')

  return (
    <section
      id="processo"
      className="
        relative
        overflow-hidden
        border-y
        border-white/[0.05]
        bg-black
        py-28
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_70%)]" />

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[30rem] w-[50rem] rounded-full bg-[#C7A97B]/[0.04] blur-3xl" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          
          <span
            className="
              inline-block
              text-[11px]
              uppercase
              tracking-[0.32em]
              text-white/40
            "
          >
            Processo
          </span>

          <h2
            className="
              mt-6
              font-serif
              text-4xl
              leading-[0.95]
              text-white
              md:text-6xl
            "
          >
            Dois processos diferentes para soluções diferentes.
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-relaxed
              text-white/50
              md:text-lg
            "
          >
            Sites e sistemas possuem necessidades completamente diferentes.
            Por isso, cada serviço possui um fluxo específico focado em
            clareza, performance e eficiência operacional.
          </p>

          {/* Divider */}
          <div className="mt-10 h-px w-40 bg-gradient-to-r from-[#E7D2AE]/60 to-transparent" />
        </div>

        {/* Selector */}
        <div className="mt-16 flex flex-wrap gap-4">
          
          <button
            onClick={() => setActiveProcess('website')}
            className={`
              relative
              overflow-hidden
              rounded-full
              border
              px-7
              py-3.5
              text-sm
              uppercase
              tracking-[0.22em]
              transition-all
              duration-300
              ${
                activeProcess === 'website'
                  ? 'border-[#E7D2AE]/30 bg-[#E7D2AE]/[0.08] text-[#E7D2AE]'
                  : 'border-white/[0.08] bg-white/[0.02] text-white/45 hover:border-white/[0.14] hover:text-white/75'
              }
            `}
          >
            Páginas Web
          </button>

          <button
            onClick={() => setActiveProcess('automation')}
            className={`
              relative
              overflow-hidden
              rounded-full
              border
              px-7
              py-3.5
              text-sm
              uppercase
              tracking-[0.22em]
              transition-all
              duration-300
              ${
                activeProcess === 'automation'
                  ? 'border-[#E7D2AE]/30 bg-[#E7D2AE]/[0.08] text-[#E7D2AE]'
                  : 'border-white/[0.08] bg-white/[0.02] text-white/45 hover:border-white/[0.14] hover:text-white/75'
              }
            `}
          >
            Sistemas & Automações
          </button>
        </div>

        {/* Dynamic content */}
        <AnimatePresence mode="wait">
          {activeProcess === 'website' ? (
            <motion.div
              key="website"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="mt-16"
            >
              <div className="max-w-2xl">
                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                  "
                >
                  Websites
                </span>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-3xl
                    text-white
                    md:text-5xl
                  "
                >
                  Processo para páginas web
                </h3>

                <p
                  className="
                    mt-5
                    text-white/50
                    leading-relaxed
                  "
                >
                  Um fluxo focado em branding, experiência visual,
                  performance e posicionamento digital.
                </p>
              </div>

              <ProcessGrid steps={websiteSteps} />
            </motion.div>
          ) : (
            <motion.div
              key="automation"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="mt-16"
            >
              <div className="max-w-2xl">
                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-white/35
                  "
                >
                  Sistemas & automações
                </span>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-3xl
                    text-white
                    md:text-5xl
                  "
                >
                  Processo para automações
                </h3>

                <p
                  className="
                    mt-5
                    text-white/50
                    leading-relaxed
                  "
                >
                  Um processo mais técnico e operacional, desenvolvido
                  para integrar software diretamente à rotina da empresa.
                </p>
              </div>

              <ProcessGrid steps={automationSteps} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}