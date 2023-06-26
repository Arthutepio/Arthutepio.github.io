import Image from 'next/image'

export const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden group transition-all border-2 border-gray-800 hover:border-cyan-500 opacity-70 hover:opacity-100">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    width={380}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                    alt="image project"
                    src="/images/tfc.png"
                    unoptimized
                />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-cyan-500 transition-all">
                    Footebol Leaderboard
                </strong>
                <p className="mt-2 text-gray-400 line-clamp-4">
                    O projeto Football Leaderboard tem como objetivo criar uma tabela de classificação para um campeonato de futebol. Minha responsabilidade foi desenvolver uma API, utilizando o método TDD, e integrar as aplicações por meio do docker-compose, a fim de que funcionassem consumindo um banco de dados. Para tanto, desenvolvi um back-end dockerizado, utilizando modelagem de dados por meio do Sequelize, em que se respeitaram as regras de negócio. A API foi concebida para ser consumida por um front-end, já provido nesse projeto.
                </p>

                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
                    Typescript, React, Node.js, Express, Docker, MySQL, Sequelize
                </span>
            </div>
        </div>
    )
}