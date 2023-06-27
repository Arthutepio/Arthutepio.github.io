import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './know-tech'
import { TbBrandCss3, TbBrandDocker, TbBrandGithub, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandPython, TbBrandReact, TbBrandTailwind, TbBrandTypescript, TbSql } from 'react-icons/tb'
import { KnownTech as TKnownTech } from '@/app/types/projects'

type KnownTechsProps = {
  techs: TKnownTech[]
}

export const Knowledge = ({ techs }: KnownTechsProps) => {
  return (
    <section id="knowledge" className="container py-16 w-full lg:h-[1024px]">
      <SectionTitle
        title="Conhecimentos"
        subtitle="competências"
        className=""
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}

      </div>
    </section>
  )
}
