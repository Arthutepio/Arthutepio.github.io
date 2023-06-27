import { ProjectSection } from "@/app/types/projects"
import Image from "next/image"

type ProjectSectionsProps = {
    section: ProjectSection[]
}

export const ProjectSections = ({ section }: ProjectSectionsProps) => {
    return (
        <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
            {section.map((section) => (
                <div
                    key={section.title}
                    className="flex flex-col items-center gap-6 md:gap-12">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                        {section.title}
                    </h2>
                    <Image
                        width={1080}
                        height={672}
                        className="w-full aspect-auto rounded-lg object-cover"
                        src={section.image.url}
                        alt={`Imagem da sessão ${section.title}`}
                        unoptimized
                    />
                </div>
            ))}
        </section>
    )
}