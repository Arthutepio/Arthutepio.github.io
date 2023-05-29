import { Button } from '@/app/components/button'
import { Tech } from '@/app/components/tech'
import Image from 'next/image'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const CONTACTS = [
  {
    url: 'https://github.com/Arthutepio',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/arthutepio/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://wa.me/5531993041348',
    icon: <TbBrandWhatsapp />,
  },
]

export default function HeroSection() {
  return (
    <section
      id="about"
      className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]"
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, eu sou</p>
          <h2 className="text-4xl font-medium mt-2">ARTHUTEPIO RODRIGUES</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, podem me chamar de Arthur, sou desenvolvedor Fullstack e
            apaixonado por tecnologia, minhas principais habilidades que me
            dedico são HTML, CSS, JavaScript, React, Node.js, API Rest, Docker,
            MySQL, Mongo DB, Sequelize, Mongose, Jest, Git. Além de habilidades
            técnicas, sou capaz de trabalhar em equipe e tenho um forte
            interesse em resolver problemas que possam ajudar as pessoas.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 10 }).map((_item, index) => (
              <Tech name="Test.js" key={index} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">Entre em contato</Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {CONTACTS.map((items, index) => (
                <a
                  href={items.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {items.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/arthur.png"
          alt="image de Arthur Rodrigues"
          className="w-[300px] h-[350px] lg:h-[400] mb-6 lg:mb-0 shadow-2xl rounded-2xl object-cover"
        />
      </div>
    </section>
  )
}
