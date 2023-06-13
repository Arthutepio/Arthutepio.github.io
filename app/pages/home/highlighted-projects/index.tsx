import { HorizontalLine } from '@/app/components/diving-line/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjecCard } from './project-card'

export const HighlightedProjects = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <section className="container py-16" id="projects">
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
      </section>
    </div>
  )
}
