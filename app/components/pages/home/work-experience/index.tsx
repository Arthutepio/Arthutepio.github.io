import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperince = () => {
    return (
        <section className="container py-16 w-full lg:h-[1024px] flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle
                    subtitle="experiências"
                    title="Experiência Profissional"
                    className=""
                />

                <p className="text-gray-400 text-justify mt-6">
                    Estou sempre aberto a novos desafios e projetos emocionantes. Vamos trabalhar juntos para criar soluções incríveis para sua empresa!
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <ExperienceItem />
            </div>
        </section>
    )
}