"use client"
import { Button } from '@/app/components/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import { HomePageInfo } from '@/app/types/page-info'
import { RichText } from '@/app/components/rich-text'
import { CMSIcon } from '@/app/components/cms-icon'

type HomeSectionProps = {
  homeInfo: HomePageInfo
}

export default function HeroSection({ homeInfo }: HomeSectionProps) {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-5xl text-gray-100 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-600 transition-all disabled:opacity-50"
                >
                  <CMSIcon icon={contact.iconSvg} />
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
            src={homeInfo.profilePicture.url}
            alt="image de Arthur Rodrigues"
            className="w-[400px] h-[400px] lg:h-[400] mb-6 lg:mb-0 shadow-2xl object-cover rounded-full scale-x-[-1]"
          />
        </motion.div>
      </div>
    </section>
  )
}