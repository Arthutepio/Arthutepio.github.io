import { Link } from '@/app/components/link'
import { Tech } from '@/app/components/tech'
import { Project } from '@/app/types/projects'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

type ProjecCardProps = {
  project: Project
}

export const ProjecCard = ({ project }: ProjecCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          src={project.thumbnail.url}
          alt={`image do projeto ${project.title}`}
          width={420}
          height={304}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt="icone"
            src="/images/icon_project.png"
          />
          {project.title}
        </h3>
        <div className="text-gray-400 my-6">
          {project.shortDescription}
        </div>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies.map(tech => (
            <Tech key={`${project.title}-tech-${tech.name}`} name={tech.name} />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} target='_blank'>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
