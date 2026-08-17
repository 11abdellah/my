import { Code2, Briefcase, TrendingUp, Mic, Presentation, LucideIcon } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { PROJECTS, ProjectField } from '../data/projects'

const FIELD_ICONS: Record<ProjectField, LucideIcon> = {
  'Web Design': Code2,
  Business: Briefcase,
  'Forex Trading': TrendingUp,
  Media: Mic,
  'Tech Talks': Presentation,
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA] text-center opacity-60 uppercase tracking-widest text-xs sm:text-sm mb-16 sm:mb-20 md:mb-24">
          20+ projects, currently in progress across design, business, trading &amp; media
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {PROJECTS.map((project, i) => {
          const Icon = FIELD_ICONS[project.field]
          return (
            <FadeIn key={project.number} delay={(i % 6) * 0.07} y={24}>
              <div className="h-full flex flex-col gap-5 rounded-[28px] sm:rounded-[32px] border border-[#D7E2EA]/20 bg-white/[0.02] p-6 sm:p-7 transition-colors duration-200 hover:border-[#D7E2EA]/50">
                <div className="flex items-center justify-between">
                  <span className="hero-heading font-black" style={{ fontSize: '2.25rem', lineHeight: 1 }}>
                    {project.number}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA] opacity-70">
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#D7E2EA] opacity-60">
                  <Icon size={16} strokeWidth={1.75} />
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest">{project.field}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-xl">{project.name}</h3>
                  <p className="text-[#D7E2EA] font-light leading-relaxed opacity-60 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>

      <div id="contact" className="pt-32 flex flex-col items-center gap-4">
        <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
          Get in touch
        </span>
        <a
          href="mailto:abdellahgr20@gmail.com"
          className="hero-heading font-black uppercase tracking-tight text-center transition-opacity duration-200 hover:opacity-80"
          style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
        >
          abdellahgr20@gmail.com
        </a>
      </div>
    </section>
  )
}
