'use client'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Pediatra Dr. Gustavo',
    category: 'Saúde & Bem-estar',
    imageSrc: '/clinica.jpg', // <-- Remova o "/projetos", deixe apenas a barra inicial
    link: 'https://pumpkinstoried.github.io/clinica-portfolio/', 
  },
  {
    title: 'Site exemplo de advocacia',
    category: 'Jurídico',
    imageSrc: '/advocacia.jpg', // Mesma coisa para os outros
    link: 'https://pumpkinstoried.github.io/clinica-portfolio/', 
  },
  {
    title: 'Dentista Guilherme Sanchez',
    category: 'Odontologia',
    imageSrc: '/odonto.jpg',
    link: 'https://pumpkinstoried.github.io/clinica-portfolio/',
  },
  {
    title: 'Litoral Imóveis',
    category: 'Imobiliária',
    imageSrc: '/imoveis.jpg',
    link: 'https://pumpkinstoried.github.io/clinica-portfolio/',
  },
]

export default function Portfolio() {
  return (
    // Adicionamos 'relative z-10' aqui para colocar tudo acima do ruído
    <section className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Projetos em Destaque</h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-champagne/50 to-transparent" />
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className="col-span-1" // <-- Agora todos ocupam apenas 1 coluna
          >
            <ProjectCard 
              title={project.title}
              category={project.category}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  )
}