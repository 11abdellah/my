import { motion, Variants } from 'framer-motion'
import { ElementType, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: ElementType
  className?: string
}

/**
 * Scroll-reveal wrapper. Animates opacity + position once, the first time
 * the element enters the viewport (viewport.once = true).
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
}: FadeInProps) {
  const MotionComponent = motion.create(as as ElementType)

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px', amount: 0 }}
      variants={variants}
    >
      {children}
    </MotionComponent>
  )
}
