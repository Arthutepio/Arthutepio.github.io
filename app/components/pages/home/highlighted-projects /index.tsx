import { HorizontalLine } from '@/app/components/diving-line/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjecCard } from './project-card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const HighlightedProjects = () => {
  return (
    <section className="container py-16 w-full lg:h-[1024px]" id="projects">
      <SectionTitle
        title="Projetos em destaque"
        subtitle="destaques"
        className=""
      />
      <HorizontalLine className="mb-16" />

      <div>
        <ProjecCard />
        <HorizontalLine className="mb-16" />
      </div>

      <p className="flex items-center gap-1.5">
        <span className="text-cyan-400">Se interessou?</span>
        <Link href="/projects" className="inline-flex">
          Ver todos
          <HiArrowNarrowRight />
        </Link>
      </p>
    </section>
  )
}
