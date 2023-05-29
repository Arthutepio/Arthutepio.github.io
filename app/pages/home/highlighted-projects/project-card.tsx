import { Link } from '@/app/components/link'
import { Tech } from '@/app/components/tech'
import Image from 'next/image'

export const ProjecCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          src="/images/tfc.png"
          alt="image do projeto"
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
          Trybe Futebol Clube
        </h3>
        <p className="text-gray-400 my-6">
        O projeto Football Leaderboard tem como objetivo criar uma tabela de classificação para um campeonato de futebol. Minha responsabilidade foi desenvolver uma API, utilizando o método TDD, e integrar as aplicações por meio do docker-compose, a fim de que funcionassem consumindo um banco de dados.
        <br />
        Para tanto, desenvolvi um back-end dockerizado, utilizando modelagem de dados por meio do Sequelize, em que se respeitaram as regras de negócio. A API foi concebida para ser consumida por um front-end, já provido nesse projeto.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <Tech name="Typescript.js" />
          <Tech name="React" />
          <Tech name="Node.js" />
          <Tech name="Express" />
          <Tech name="Docker" />
          <Tech name="MySQL" />
          <Tech name="Sequelize" />
        </div>

        <Link href="https://saucy-price-production.up.railway.app/">Ver projeto</Link>
      </div>
    </div>
  )
}
