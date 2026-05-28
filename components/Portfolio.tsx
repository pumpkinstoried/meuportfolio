'use client'

import { useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'FerminoPMS',
    category: 'Gestão de Hoteis e pousadas',
    description:
      'Gestão operacional e automações para hotelaria em uma experiência centralizada.',
    imageSrc: '/ferminopms.png',
    link: '#',
  },

  {
    title: 'Pediatra Dr. Gustavo',
    category: 'Saúde & Bem-estar',
    description:
      'Landing page desenvolvida para transmitir confiança e facilitar agendamentos.',
    imageSrc: '/clinica.jpg',
    link: 'https://pumpkinstoried.github.io/clinica-portfolio/',
  },

  {
    title: 'Advocacia Institucional',
    category: 'Jurídico',
    description:
      'Experiência digital com foco em autoridade, clareza e captação de clientes.',
    imageSrc: '/advocacia.jpg',
    link: 'https://pumpkinstoried.github.io/advogadasite-portfolio/',
  },

  {
    title: 'Dr. Guilherme Sanchez',
    category: 'Odontologia',
    description:
      'Presença digital moderna voltada para procedimentos estéticos e conversão.',
    imageSrc: '/odonto.jpg',
    link: 'https://kanerfx.github.io/dr_guilherme_sanchez_consultorio_odontologico/',
  },

  {
    title: 'Imobiliária Exemplo',
    category: 'Imobiliária',
    description:
      'Catálogo imobiliário com navegação fluida e foco total na apresentação visual.',
    imageSrc: '/imoveis.jpg',
    link: 'https://pumpkinstoried.github.io/imobiliaria-portfolio/',
  },
]

export default function Portfolio() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const extendedProjects = [...projects, ...projects, ...projects]

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth
      carouselRef.current.scrollLeft = scrollWidth / 3
    }
  }, [])

  const handleScroll = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    const segmentWidth = scrollWidth / 3

    if (scrollLeft <= 0) {
      carouselRef.current.style.scrollBehavior = 'auto'
      carouselRef.current.scrollLeft = segmentWidth
      carouselRef.current.style.scrollBehavior = 'smooth'
    } else if (scrollLeft + clientWidth >= scrollWidth - 1) {
      carouselRef.current.style.scrollBehavior = 'auto'
      carouselRef.current.scrollLeft = scrollLeft - segmentWidth
      carouselRef.current.style.scrollBehavior = 'smooth'
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_65%)]" />

      {/* Ambient center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[28rem] w-[50rem] rounded-full bg-[#C7A97B]/[0.04] blur-3xl" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div className="relative z-10 mx-auto mb-14 flex max-w-7xl flex-col gap-10 px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span
              className="
                mb-5
                inline-block
                text-[11px]
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Portfolio
            </span>

            <h2
              className="
                font-serif
                text-4xl
                leading-none
                text-white
                md:text-6xl
              "
            >
              Projetos Selecionados
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-relaxed
                text-white/45
                md:text-base
              "
            >
              Soluções desenvolvidas para empresas que buscam presença
              digital, automação e experiências digitais mais sofisticadas.
            </p>
          </div>

          {/* Controls */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={() => scroll('left')}
              className="
                group
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.02]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#E7D2AE]/40
                hover:bg-[#E7D2AE]/[0.03]
              "
              aria-label="Rolar para a esquerda"
            >
              <ChevronLeft
                size={20}
                className="
                  text-white/70
                  transition-colors
                  duration-300
                  group-hover:text-[#E7D2AE]
                "
              />
            </button>

            <button
              onClick={() => scroll('right')}
              className="
                group
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.02]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#E7D2AE]/40
                hover:bg-[#E7D2AE]/[0.03]
              "
              aria-label="Rolar para a direita"
            >
              <ChevronRight
                size={20}
                className="
                  text-white/70
                  transition-colors
                  duration-300
                  group-hover:text-[#E7D2AE]
                "
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-white/[0.12] via-white/[0.04] to-transparent" />

        {/* Mobile carousel hint */}
        <div className="mt-6 flex items-center justify-center md:hidden">
          <div className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
            <ChevronLeft size={16} className="text-white/70" />
            <span>Deslize para o lado</span>
            <ChevronRight size={16} className="text-white/70" />
          </div>
        </div>
      </div>

      {/* Carousel */}
       <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="
          relative
          z-10
          flex
          snap-x
          snap-mandatory
          gap-8
          overflow-x-auto
          px-6
          pb-8
          md:px-12
          scroll-smooth
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        <div className="shrink-0 w-6 md:w-12" aria-hidden="true" />

        {extendedProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="
              w-[calc(100vw-3rem)]
              shrink-0
              snap-center
              md:w-[48vw]
              lg:w-[32vw]
            "
          >
            <ProjectCard
              title={project.title}
              category={project.category}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          </div>
        ))}

        <div className="shrink-0 w-6 md:w-12" aria-hidden="true" />
      </div>
    </section>
  )
}