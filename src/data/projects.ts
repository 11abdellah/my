export type ProjectField = 'Web Design' | 'Business' | 'Forex Trading' | 'Media' | 'Tech Talks'

export interface Project {
  number: string
  field: ProjectField
  name: string
  description: string
  status: string
}

export const PROJECTS: Project[] = [
  // Web Design & Vibecoding
  {
    number: '01',
    field: 'Web Design',
    name: 'Vibecode Studio Rebuild',
    description: 'Rebuilding my own studio site with an AI-assisted, vibecoding-first workflow.',
    status: 'Ongoing',
  },
  {
    number: '02',
    field: 'Web Design',
    name: 'Nova Retail Storefront',
    description: 'A fast, conversion-focused storefront for an emerging retail brand.',
    status: 'Ongoing',
  },
  {
    number: '03',
    field: 'Web Design',
    name: 'Cloudline SaaS Landing',
    description: 'Landing page and onboarding flow for a B2B SaaS product.',
    status: 'Ongoing',
  },
  {
    number: '04',
    field: 'Web Design',
    name: 'Artisan Coffee Co.',
    description: 'A warm, editorial-style site for a specialty coffee roaster.',
    status: 'Ongoing',
  },
  {
    number: '05',
    field: 'Web Design',
    name: 'FitTrack App Landing',
    description: 'Marketing site for a fitness tracking mobile app.',
    status: 'Ongoing',
  },
  // CEO & Business
  {
    number: '06',
    field: 'Business',
    name: 'Guerifi Digital Agency',
    description: 'Building and scaling my own digital agency from the ground up.',
    status: 'Ongoing',
  },
  {
    number: '07',
    field: 'Business',
    name: 'Startup Growth Framework',
    description: 'A repeatable growth playbook for early-stage founders.',
    status: 'Ongoing',
  },
  {
    number: '08',
    field: 'Business',
    name: 'Brand Partnership Program',
    description: 'Structuring partnerships between creators and growing brands.',
    status: 'Ongoing',
  },
  {
    number: '09',
    field: 'Business',
    name: 'Team Ops Playbook',
    description: 'Documenting workflows and tools for a distributed team.',
    status: 'Ongoing',
  },
  // Forex Trading
  {
    number: '10',
    field: 'Forex Trading',
    name: 'FX Signal Dashboard',
    description: 'A live dashboard tracking currency pairs and trade signals.',
    status: 'Ongoing',
  },
  {
    number: '11',
    field: 'Forex Trading',
    name: 'Risk Management System',
    description: 'A personal framework for position sizing and risk control.',
    status: 'Ongoing',
  },
  {
    number: '12',
    field: 'Forex Trading',
    name: 'Trading Psychology Course',
    description: 'Teaching traders how to manage emotion and discipline.',
    status: 'Ongoing',
  },
  {
    number: '13',
    field: 'Forex Trading',
    name: 'Weekly Market Analysis',
    description: 'Breaking down macro trends and setups for the week ahead.',
    status: 'Ongoing',
  },
  // Media & Content
  {
    number: '14',
    field: 'Media',
    name: 'Daily Market Vlog',
    description: 'Short-form daily videos covering market moves and mindset.',
    status: 'Ongoing',
  },
  {
    number: '15',
    field: 'Media',
    name: 'Behind The Code Podcast',
    description: 'Conversations on building products and businesses in public.',
    status: 'Ongoing',
  },
  {
    number: '16',
    field: 'Media',
    name: 'Trading Live Streams',
    description: 'Live sessions walking through real trades and decisions.',
    status: 'Ongoing',
  },
  {
    number: '17',
    field: 'Media',
    name: 'Tech & Trading Newsletter',
    description: 'A weekly newsletter connecting tech, business, and markets.',
    status: 'Ongoing',
  },
  // Tech Talks
  {
    number: '18',
    field: 'Tech Talks',
    name: 'AI Conference Keynote',
    description: 'Speaking on AI-assisted design and development workflows.',
    status: 'Ongoing',
  },
  {
    number: '19',
    field: 'Tech Talks',
    name: 'Web Dev Bootcamp Series',
    description: 'A hands-on series teaching modern web design fundamentals.',
    status: 'Ongoing',
  },
  {
    number: '20',
    field: 'Tech Talks',
    name: 'Product Launch Presentations',
    description: 'Presenting product launches for partner startups.',
    status: 'Ongoing',
  },
]
