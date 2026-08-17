export interface Service {
  number: string
  name: string
  description: string
}

export const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Web Design & Vibecoding',
    description:
      'Designing and building fast, modern websites using an AI-assisted vibecoding workflow, from first wireframe to shipped product.',
  },
  {
    number: '02',
    name: 'Business & Growth Consulting',
    description:
      'Helping founders and brands structure their strategy, operations, and growth so their business scales with intention.',
  },
  {
    number: '03',
    name: 'Forex Trading & Market Insight',
    description:
      'Sharing trading systems, risk management frameworks, and market analysis for traders at every level.',
  },
  {
    number: '04',
    name: 'Media & Content Production',
    description:
      'Producing videos, podcasts, and live streams that turn expertise in tech and trading into engaging content.',
  },
  {
    number: '05',
    name: 'Tech Talks & Public Speaking',
    description:
      'Presenting on stages and screens about web development, AI-assisted workflows, and building in public.',
  },
]
