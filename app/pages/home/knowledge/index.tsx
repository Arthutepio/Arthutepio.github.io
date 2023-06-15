import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './know-tech'
import { TbBrandCss3, TbBrandDocker, TbBrandGithub, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandPython, TbBrandReact, TbBrandTailwind, TbBrandTypescript, TbSql } from 'react-icons/tb'

export const Knowledge = () => {
  return (
    <section id="knowledge" className="container py-16 w-full lg:h-[1024px]">
      <SectionTitle
        title="Conhecimentos"
        subtitle="competências"
        className=""
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        <KnownTech
          tech={{
            icon: <TbBrandJavascript />,
            name: 'JavaScript',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandTypescript />,
            name: 'TypeScript',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandPython />,
            name: 'Python',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandCss3 />,
            name: 'CSS',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandHtml5 />,
            name: 'HTML',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandReact />,
            name: 'React',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandMysql />,
            name: 'Mysql',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandTailwind />,
            name: 'Tailwind',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandDocker />,
            name: 'Docker',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandNextjs />,
            name: 'Next.js',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbSql />,
            name: 'Sql',
          }}
        />
        <KnownTech
          tech={{
            icon: <TbBrandGithub />,
            name: 'Github',
          }}
        />

      </div>
    </section>
  )
}
