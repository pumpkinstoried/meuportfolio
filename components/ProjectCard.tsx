'use client'

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  title: string
  category: string
  description?: string
  imageSrc?: string
  link?: string
}

export default function ProjectCard({
  title,
  category,
  description,
  imageSrc,
  link,
}: ProjectProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  })

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  })

  const rotateX = useTransform(springY, [-0.5, 0.5], ['7deg', '-7deg'])

  const rotateY = useTransform(springX, [-0.5, 0.5], ['-7deg', '7deg'])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top

    const normalizedX = mouseXPos / width - 0.5
    const normalizedY = mouseYPos / height - 0.5

    x.set(normalizedX)
    y.set(normalizedY)

    mouseX.set(mouseXPos)
    mouseY.set(mouseYPos)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative isolate h-[430px] w-full overflow-hidden rounded-[30px] border border-white/[0.06] bg-[#080808]"
    >
      {/* Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="h-full w-full"
            style={{
              transform: 'translateZ(0)',
            }}
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              priority={false}
              className="
                object-cover
                opacity-[0.92]
                scale-[1.01]
                transition-all
                duration-700
                ease-out
                group-hover:scale-[1.04]
                group-hover:opacity-[1]
              "
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>
      )}

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

      {/* Soft ambient glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <motion.div
          className="absolute inset-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                500px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.08),
                transparent 40%
              )
            `,
          }}
        />
      </div>

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Border glow */}
      <div className="absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/[0.05]" />

      {/* Floating reflection */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -left-1/3
            top-0
            h-full
            w-[40%]
            rotate-12
            bg-white/[0.06]
            blur-3xl
          "
        />
      </div>

      {/* Content */}
      <div
        style={{
          transform: 'translateZ(60px)',
        }}
        className="relative z-20 flex h-full flex-col justify-end p-8"
      >
        {/* Category */}
        <motion.div
          initial={false}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="mb-3"
        >
          <span
            className="
              text-[11px]
              uppercase
              tracking-[0.28em]
              text-white/55
            "
          >
            {category}
          </span>
        </motion.div>

        {/* Title */}
        <h3
          className="
            max-w-[90%]
            font-serif
            text-3xl
            leading-[1]
            text-white
            md:text-[2.4rem]
          "
        >
          {title}
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
        {description && (
          <p
            className="
              mt-6
              max-w-[90%]
              translate-y-3
              text-sm
              leading-relaxed
              text-white/60
              opacity-0
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            {description}
          </p>
        )}

        {/* CTA */}
        {link && (
          <div
            className="
              mt-8
              translate-y-3
              opacity-0
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <Link
              href={link}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-3
                text-sm
                uppercase
                tracking-[0.2em]
                text-[#E7D2AE]
                transition-opacity
                duration-300
                hover:opacity-70
              "
            >
              Explorar Projeto

              <span className="text-lg">→</span>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}