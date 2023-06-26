import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from 'react-icons/fi'
import { Button } from "../../../button"
import { SectionTitle } from "../../../section-title"
import { Tech } from "../../../tech"
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const ProjectDetails = () => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div
                className="absolute inset-0 z-[-1]"
                style={{
                    background: `url(/images/hero-bg.png) no-repeat center/cover, url(/images/tfc.png) no-repeat center/cover`,
                }}
            // initial={{ opacity: 0, scale: 1.3 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5 }}
            />

            <SectionTitle
                subtitle="projetos"
                title="Footebol Leaderboard"
                className="text-center items-center sm:[&>h3]:text-4xl"
            />

            <p className="text-gray-400 text-justify max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                O projeto Football Leaderboard tem como objetivo criar uma tabela de classificação para um campeonato de futebol. Minha responsabilidade foi desenvolver uma API, utilizando o método TDD, e integrar as aplicações por meio do docker-compose, a fim de que funcionassem consumindo um banco de dados.<br />
                Para tanto, desenvolvi um back-end dockerizado, utilizando modelagem de dados por meio do Sequelize, em que se respeitaram as regras de negócio. A API foi concebida para ser consumida por um front-end, já provido nesse projeto.
            </p>

            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                <Tech name={"Typescript"} />
                <Tech name={"React.js"} />
                <Tech name={"Node.js"} />
                <Tech name={"Express"} />
                <Tech name={"Docker"} />
                <Tech name={"MySQL"} />
                <Tech name={"Sequelize"} />
            </div>

            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href="https://github.com/Arthutepio/project-football-leaderboard" target="_blank">
                    <Button className="min-w-[180px]">
                        <TbBrandGithub size={20} />
                        Repositório
                    </Button>
                </a>

                <a href="https://github.com/Arthutepio/project-football-leaderboard" target="_blank" rel="noreferrer">
                    <Button className="min-w-[180px]">
                        <FiGlobe size={20} />
                        Projeto Online
                    </Button>
                </a>

            </div>

            <Link href="/projects">
                <HiArrowNarrowLeft size={20} />
                Voltar para projetos
            </Link>


        </section>
    )
}