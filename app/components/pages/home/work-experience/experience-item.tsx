import { RichText } from "@/app/components/rich-text"
import { Tech } from "@/app/components/tech"
import { WorkExperience } from "@/app/types/work-experience"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import Image from "next/image"

type ExperienceItemProps = {
    experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
    const startDate = new Date(experience.startDate)

    const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
    const formattedEndDate = experience.endDate
        ? format(new Date(experience.endDate), 'MMM yyyy', { locale: ptBR })
        : 'O momento'

    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src={experience.companyLogo.url}
                        alt={`logo da empresa ${experience.companyName}`}
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a
                    href={experience.companyUrl}
                    target="_blank"
                    className="text-gray-500 hover:text-emerald-500 transition-colors"
                >
                    @{experience.companyName}
                </a>

                <h4 className="text-gray-300">{experience.role}</h4>

                <span className="text-gray-500">
                    {formattedStartDate} - {formattedEndDate}
                </span>

                <div className="text-gray-400 text-justify sm:w-[600px]">
                    <RichText content={experience.description.raw} />
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
                    Competências
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    {experience.technologies.map(tech => (
                        <Tech key={`experience-${experience.companyName}-${tech.name}`} name={tech.name} />
                    ))}
                </div>
            </div>
        </div>

    )
}