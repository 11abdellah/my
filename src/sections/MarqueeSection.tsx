import { useEffect, useRef } from 'react'
import { ROW1_IMAGES, ROW2_IMAGES } from '../data/marqueeImages'

function tripleImages(images: string[]) {
  return [...images, ...images, ...images]
}

const ROW1_TRIPLED = tripleImages(ROW1_IMAGES)
const ROW2_TRIPLED = tripleImages(ROW2_IMAGES)

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      const row1 = row1Ref.current
      const row2 = row2Ref.current
      if (!section || !row1 || !row2) return

      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3

      row1.style.transform = `translateX(${offset - 200}px)`
      row2.style.transform = `translateX(${-(offset - 200)}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        <div ref={row1Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
          {ROW1_TRIPLED.map((src, i) => (
            <img
              key={`row1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: '420px', height: '270px' }}
            />
          ))}
        </div>

        <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
          {ROW2_TRIPLED.map((src, i) => (
            <img
              key={`row2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: '420px', height: '270px' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
