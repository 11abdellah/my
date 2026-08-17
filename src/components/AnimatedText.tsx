import { CSSProperties, useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

interface CharProps {
  char: string
  progress: MotionValue<number>
  index: number
  total: number
}

function Char({ char, progress, index, total }: CharProps) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  const display = char === ' ' ? '\u00A0' : char

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder keeps layout width stable */}
      <span style={{ opacity: 0.2 }}>{display}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>{display}</motion.span>
    </span>
  )
}

/**
 * Reveals a paragraph one character at a time as the reader scrolls it
 * through the viewport, from opacity 0.2 up to full opacity.
 */
export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char key={i} char={char} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </p>
  )
}
