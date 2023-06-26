import { Tech } from "@/app/components/tech"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="/images/logo-trybe1.png"
                        alt="logo da empresa"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a
                    href="https://www.betrybe.com/"
                    target="_blank"
                    className="text-gray-500 hover:text-emerald-500 transition-colors"
                >
                    @Trybe
                </a>

                <h4 className="text-gray-300">Desenvolvedor Fullstack</h4>

                <span className="text-gray-500">
                    mai 2022 - jun 2023
                </span>

                <div className="text-gray-400 text-justify sm:w-[600px]">
                    Tenho uma sólida experiência na área de desenvolvimento web, comprovada por um curso abrangente que totalizou 1.500 horas de aula. Durante esse curso, adquiri conhecimentos essenciais em diversas áreas relacionadas, como introdução ao desenvolvimento de software, front-end e back-end, ciência da computação, engenharia de software e metodologias ágeis. Além disso, também foram abordadas habilidades comportamentais que são fundamentais no ambiente de trabalho, como trabalho em equipe, comunicação eficaz e resolução de problemas. Ao longo do curso, tive a oportunidade de aplicar e aprimorar meus conhecimentos em um total de 38 projetos práticos, o que me proporcionou uma experiência prática valiosa. Essa formação completa me proporcionou uma base sólida para lidar com os desafios e demandas do desenvolvimento web, permitindo-me entregar soluções eficientes e de alta qualidade para os projetos em que estou envolvido.
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
                    Competências
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <Tech name="JavaScript" />
                    <Tech name="TypeScript" />
                    <Tech name="Python" />
                    <Tech name="HTML" />
                    <Tech name="CSS" />
                    <Tech name="React" />
                    <Tech name="Node.js" />
                    <Tech name="Express" />
                    <Tech name="Docker" />
                    <Tech name="MySQL" />
                    <Tech name="SQL" />
                    <Tech name="MongoDB" />
                    <Tech name="Sequelize" />
                    <Tech name="RTL" />
                    <Tech name="Jest" />
                </div>
            </div>
        </div>

    )
}