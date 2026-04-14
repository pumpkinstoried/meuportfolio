'use client'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Clínica Médica',
    category: 'Saúde & Bem-estar',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    // Em um cenário real, você adicionaria imagens aqui
  },
  {
    title: 'Advocacia Associados',
    category: 'Jurídico',
    tech: ['React', 'Styled Components'],
  },
  {
    title: 'OdontoPrime',
    category: 'Odontologia',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Litoral Imóveis',
    category: 'Imobiliária',
    tech: ['Vue.js', 'Firebase', 'Tailwind'],
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Projetos em Destaque</h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-champagne/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            // O primeiro item (index 0) ocupa duas colunas no desktop para o efeito Bento
            className={index === 0 ? "lg:col-span-2" : "col-span-1"}
          >
            <ProjectCard 
              title={project.title}
              category={project.category}
              tech={project.tech}
            />
          </div>
        ))}
      </div>
    </section>
  )
}