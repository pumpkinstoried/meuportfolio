import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Coluna da Imagem */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
            <Image
              src="/pfp.png"
              alt="Minha foto de perfil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </div>

        {/* Coluna do Texto */}
        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Sobre Mim
          </h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              Sou um desenvolvedor de software e empreendedor baseado em Garopaba - SC, com um forte foco em criar soluções eficientes e automatizadas. Tenho experiência profunda no desenvolvimento de aplicações escaláveis, utilizando tecnologias como Flutter, Dart, Firebase, além da criação de sites rápidos.
            </p>
            <p>
              A minha abordagem junta a escrita de código limpo com eficiência operacional, procurando sempre construir produtos que resolvam problemas reais e escalem de forma sustentável.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}