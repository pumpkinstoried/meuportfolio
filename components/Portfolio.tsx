'use client'
import { useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'FerminoPMS Dashboard',
    category: 'SaaS / Dashboard',
    description: 'Sistema completo para gestão de propriedades e hotelaria, focado em otimização operacional, automatização de processos e controle de reservas através de um painel interativo.',
    imageSrc: '/ferminopms.jpg',
    link: '#', 
  },
  {
    title: 'Pediatra Dr. Gustavo',
    category: 'Saúde & Bem-estar',
    description: 'Landing page focada em transmitir segurança para os pais, facilitando a visualização de serviços e o agendamento de consultas pediátricas.',
    imageSrc: '/clinica.jpg',
    link: 'https://pumpkinstoried.github.io/clinica-portfolio/', 
  },
  {
    title: 'Site exemplo de advocacia',
    category: 'Jurídico',
    description: 'Landing page projetada para captação de leads em escritórios jurídicos, com design sóbrio que transmite autoridade e formulários otimizados.',
    imageSrc: '/advocacia.jpg', 
    link: 'https://pumpkinstoried.github.io/advogadasite-portfolio/', 
  },
  {
    title: 'Dentista Guilherme Sanchez',
    category: 'Odontologia',
    description: 'Portfólio odontológico moderno que destaca procedimentos estéticos e facilita o contato direto de novos pacientes.',
    imageSrc: '/odonto.jpg',
    link: 'https://kanerfx.github.io/dr_guilherme_sanchez_consultorio_odontologico/',
  },
  {
    title: 'Imobiliária Exemplo',
    category: 'Imobiliária',
    description: 'Plataforma de catálogo de imóveis focada na alta qualidade das imagens e navegação intuitiva para compradores e locatários.',
    imageSrc: '/imoveis.jpg',
    link: 'https://pumpkinstoried.github.io/imobiliaria-portfolio/',
  },
]

export default function Portfolio() {
  const carouselRef = useRef<HTMLDivElement>(null)

  // Triplicamos a lista para criar a ilusão perfeita de loop infinito
  const extendedProjects = [...projects, ...projects, ...projects]

  useEffect(() => {
    // Ao iniciar, movemos o scroll para o grupo do meio (index 5)
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth
      carouselRef.current.scrollLeft = scrollWidth / 3
    }
  }, [])

  const handleScroll = () => {
    if (!carouselRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    const segmentWidth = scrollWidth / 3

    // Se rolar até o fim do primeiro bloco invisível, joga de volta pro meio
    if (scrollLeft <= 0) {
      carouselRef.current.style.scrollBehavior = 'auto' // Remove animação do pulo
      carouselRef.current.scrollLeft = segmentWidth
      carouselRef.current.style.scrollBehavior = 'smooth' // Retorna a suavidade
    } 
    // Se rolar até o último bloco, joga de volta pro fim do bloco do meio
    else if (scrollLeft + clientWidth >= scrollWidth - 1) {
      carouselRef.current.style.scrollBehavior = 'auto'
      carouselRef.current.scrollLeft = scrollLeft - segmentWidth
      carouselRef.current.style.scrollBehavior = 'smooth'
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative z-10 py-32 pl-6 md:pl-12 max-w-[100vw] overflow-hidden bg-gradient-to-b from-black/80 to-[#111111] border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto pr-6 md:pr-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="w-full">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Projetos em Destaque</h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-champagne/50 to-transparent" />
        </div>
        
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-white/10 text-white hover:border-champagne hover:text-champagne transition-colors z-20"
            aria-label="Rolar para a esquerda"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-white/10 text-white hover:border-champagne hover:text-champagne transition-colors z-20"
            aria-label="Rolar para a direita"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pr-6 md:pr-12 scroll-smooth
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {extendedProjects.map((project, index) => (
          <div 
            key={`${project.title}-${index}`} 
            className="w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center shrink-0"
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
      </div>
    </section>
  )
}