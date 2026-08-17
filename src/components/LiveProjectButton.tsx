interface LiveProjectButtonProps {
  className?: string
  href?: string
}

export default function LiveProjectButton({ className = '', href = '#' }: LiveProjectButtonProps) {
  const isExternal = href !== '#'

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#D7E2EA] font-medium uppercase tracking-widest whitespace-nowrap transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Live Project
    </a>
  )
}
