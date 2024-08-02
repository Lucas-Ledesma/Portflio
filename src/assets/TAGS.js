import Nest from '../components/Nest.astro'
import PostgreSQL from '../components/PostgreSQL.astro'
import Prisma from '../components/Prisma.astro'
import Next from './icons/Next.astro'
import Tailwind from './icons/Tailwind.astro'

export const TAGS = {
	NEXT: {
		name: 'Next.js',
		class: 'bg-gray-900 text-white',
		icon: Next,
	},
	TAILWIND: {
		name: 'tailwind CSS',
		class: 'bg-[#003159] text-[#73bcf6]',
		icon: Tailwind,
	},
	NEST: {
		name: 'NestJS',
		class: 'bg-gray-900 text-white',
		icon: Nest,
	},
	PRISMA: {
		name: 'Prsima',
		class: 'bg-green-900 text-white',
		icon: Prisma,
	},
	POSTGRESQL: {
		name: 'PostgreSQL',
		class: 'bg-gray-900 text-white',
		icon: PostgreSQL,
	},
}
