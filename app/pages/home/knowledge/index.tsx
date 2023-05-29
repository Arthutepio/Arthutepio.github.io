import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './know-tech'
import { TbBrandNextjs } from 'react-icons/tb'

export const Knowledge = () => {
  return (
    <section id="knowledge" className="container py-16">
      <SectionTitle
        title="Conhecimentos"
        subtitle="competências"
        className=""
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 12 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.js',
            }}
          />
        ))}
      </div>
    </section>
  )
}
