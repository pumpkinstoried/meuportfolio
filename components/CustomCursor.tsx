'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full border border-champagne/50 mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        width: isHovered ? 48 : 32,
        height: isHovered ? 48 : 32,
        marginLeft: isHovered ? -8 : 0,
        marginTop: isHovered ? -8 : 0,
        backgroundColor: isHovered ? 'rgba(247, 231, 206, 0.1)' : 'rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.15 }}
    />
  )
}