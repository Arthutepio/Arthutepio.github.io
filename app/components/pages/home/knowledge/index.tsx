'use client'

import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './know-tech'
// import { TbBrandCss3, TbBrandDocker, TbBrandGithub, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandPython, TbBrandReact, TbBrandTailwind, TbBrandTypescript, TbSql } from 'react-icons/tb'
import { KnownTech as TKnownTech } from '@/app/types/projects'
import { motion } from 'framer-motion'

type KnownTechsProps = {
  techs: TKnownTech[]
}

export const Knowledge = ({ techs }: KnownTechsProps) => {
  return (
    <section id="knowledge" className="container py-32 w-full lg:h-[1024px]">
      <SectionTitle
        title="Conhecimentos"
        subtitle="competências"
        className=""
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}

      </div>
    </section>
  )
}
