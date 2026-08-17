import { useEffect, useRef, useState, ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

/**
 * Wraps its children in a div that gently follows the cursor whenever the
 * pointer comes within `padding` pixels of the element's bounding box,
 * and eases back to rest when the cursor leaves that zone.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ x: 0, y: 0 })
  const [transition, setTransition] = useState(inactiveTransition)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const withinX = e.clientX > rect.left - padding && e.clientX < rect.right + padding
      const withinY = e.clientY > rect.top - padding && e.clientY < rect.bottom + padding

      if (withinX && withinY) {
        setTransition(activeTransition)
        setTransform({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        })
      } else {
        setTransition(inactiveTransition)
        setTransform({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
