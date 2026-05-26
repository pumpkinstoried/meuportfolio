import Image from 'next/image'

export default function About() {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_70%)]" />

      {/* Ambient champagne glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[32rem] w-[40rem] rounded-full bg-[#C7A97B]/[0.04] blur-3xl" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-16
          px-6
          md:flex-row
          md:gap-24
          md:px-12
        "
      >
        {/* Left side */}
        <div className="relative flex w-full justify-center md:w-[40%]">
          
          {/* Outer glow */}
          <div className="absolute h-[22rem] w-[22rem] rounded-full bg-[#C7A97B]/[0.08] blur-3xl" />

          {/* Decorative ring */}
         

          {/* Image container */}
          <div
            className="
              group
              relative
              h-[20rem]
              w-[20rem]
              overflow-hidden
              rounded-full
              border
              border-white/[0.08]
              bg-[#111111]
              shadow-2xl
            "
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Reflection */}
            <div
              className="
                absolute
                -left-1/4
                top-0
                z-10
                h-full
                w-[35%]
                rotate-12
                bg-white/[0.06]
                blur-3xl
              "
            />

            <Image
              src="/pfp2.jpg"
              alt="Foto de perfil"
              fill
              className="
                object-cover
                scale-[1.02]
                transition-transform
                duration-700
                group-hover:scale-[1.06]
              "
              sizes="(max-width: 768px) 320px, 400px"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-[60%]">
          
          {/* Small label */}
          <span
            className="
              inline-block
              text-[11px]
              uppercase
              tracking-[0.32em]
              text-white/40
            "
          >
            Sobre mim
          </span>

          {/* Heading */}
          <h2
            className="
              mt-6
              max-w-3xl
              font-serif
              text-4xl
              leading-[0.95]
              text-white
              md:text-6xl
            "
          >
            Criando experiências digitais com foco em automação e performance.
          </h2>

          {/* Divider */}
          <div className="mt-8 h-px w-32 bg-gradient-to-r from-[#E7D2AE]/60 to-transparent" />

          {/* Description */}
          <div
            className="
              mt-10
              max-w-2xl
              space-y-6
              text-base
              leading-relaxed
              text-white/55
              md:text-lg
            "
          >
            <p>
              Desenvolvedor de software baseado em Garopaba — SC,
              especializado na criação de sistemas, automações e
              experiências web construídas sob medida para cada negócio.
            </p>

            <p>
              Meu trabalho combina engenharia de software, design moderno
              e eficiência operacional para desenvolver produtos que não
              apenas funcionam bem, mas elevam a percepção da marca e
              simplificam processos reais.
            </p>
          </div>

          {/* Stats / badges */}
          <div className="mt-12 flex flex-wrap gap-4">
            {[
              'Aplicações Web',
              'Automações',
              'Dashboards',
              'APIs',
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  px-5
                  py-2.5
                  text-sm
                  text-white/65
                  backdrop-blur-xl
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}