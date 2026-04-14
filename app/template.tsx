'use client'
import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} // Exit só funciona se configurarmos o AnimatePresence no layout pai, mas a entrada já garante o toque premium.
      transition={{ ease: 'easeInOut', duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}