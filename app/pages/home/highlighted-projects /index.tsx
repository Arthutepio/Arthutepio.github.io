import { HorizontalLine } from '@/app/components/diving-line/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjecCard } from './project-card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { Button } from '@/app/components/button'

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-24 w-full lg:h-[1024px]" id="projects">
      <SectionTitle
        title="Projetos em destaque"
        subtitle="destaques"
        className=""
      />
      <HorizontalLine className="mb-16" />

      <div>
        {projects?.map(project => (
          <div key={project.slug}>
            <ProjecCard project={project} />
            <HorizontalLine className="mb-16" />
          </div>
        ))}
      </div>

      <p className="flex items-center gap-1.5">
        <span className="text-cyan-400">Se interessou?</span>
        <Link href="/projects" className="inline-flex">
          <Button>
            Ver todos
            <HiArrowNarrowRight />
          </Button>
        </Link>
      </p>
    </section>
  )
}
