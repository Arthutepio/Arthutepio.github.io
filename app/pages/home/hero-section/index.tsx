"use client"
import { Button } from '@/app/components/button'
import { Tech } from '@/app/components/tech'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
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
      className="w-full lg:h-[1024px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[310px]"
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px] text-justify"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-cyan-400">Olá, eu sou</p>
          <h2 className="text-4xl font-medium mt-2">ARTHUTEPIO RODRIGUES</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, podem me chamar de Arthur, sou desenvolvedor Fullstack e
            apaixonado por tecnologia. Além de habilidades técnicas, sou capaz de trabalhar em equipe e tenho um forte
            interesse em resolver problemas que possam ajudar as pessoas. As principais tecnologias que tenho trabalhado são:
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            <Tech name="React" />
            <Tech name="Node.js" />
            <Tech name="TypeScript" />
            <Tech name="Tailwind" />
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Link href="#contact">
              <Button className="w-max shadow-button">Entre em contato</Button>
            </Link>

            <div className="text-5xl text-gray-100 flex items-center h-20 gap-3">
              {CONTACTS.map((items, index) => (
                <a
                  href={items.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-600 transition-all disabled:opacity-50"
                >
                  {items.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={420}
            src="/images/arthur-sf-04.png"
            alt="image de Arthur Rodrigues"
            className="w-[400px] h-[450px] lg:h-[400] mb-6 lg:mb-0 shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
