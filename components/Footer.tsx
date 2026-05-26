'use client'

import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gustavofdev/',
    },

    {
      name: 'WhatsApp',
      href: 'https://wa.me/5548992032007',
    },
  ]

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.05]
        bg-black
        py-16
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.03),transparent_70%)]" />

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div className="h-[20rem] w-[35rem] rounded-full bg-[#C7A97B]/[0.04] blur-3xl" />
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
          gap-12
          px-6
          md:px-12
        "
      >
        {/* Top section */}
        <div
          className="
            flex
            flex-col
            gap-10
            border-b
            border-white/[0.05]
            pb-12
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* Brand */}
          <div className="max-w-xl">
            
            <span
              className="
                inline-block
                text-[11px]
                uppercase
                tracking-[0.32em]
                text-white/35
              "
            >
              Gustavo Fermino
            </span>

            <h3
              className="
                mt-5
                text-2xl
                font-serif
                leading-[0.95]
                text-white/75
                md:text-2xl
              "
            >
              Sistemas, automações e experiências digitais com foco em sofisticação e performance.
            </h3>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  px-6
                  py-3
                  text-sm
                  uppercase
                  tracking-[0.18em]
                  text-white/60
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#E7D2AE]/30
                  hover:bg-[#E7D2AE]/[0.05]
                  hover:text-[#E7D2AE]
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
                      bg-[radial-gradient(circle_at_center,rgba(231,210,174,0.12),transparent_70%)]
                    "
                  />
                </div>

                <span className="relative z-10">
                  {link.name}
                </span>

                <ArrowUpRight
                  size={16}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:-translate-y-[1px]
                    group-hover:translate-x-[1px]
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-5
            text-sm
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="leading-relaxed">
            © {new Date().getFullYear()} Gustavo Fermino. Todos os direitos reservados.
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              uppercase
              tracking-[0.18em]
              text-white/20
            "
          >
            <div className="h-[4px] w-[4px] rounded-full bg-[#E7D2AE]/40" />

            <span>Garopaba — SC</span>

            <div className="h-[4px] w-[4px] rounded-full bg-[#E7D2AE]/40" />

            <span>Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  )
}