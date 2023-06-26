"use client"
import Image from 'next/image'
import Link from 'next/link'
import NavItem from './nav-items'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  // {
  //   label: 'Sobre mim',
  //   href: '#about',
  // },
  {
    label: 'Conhecimentos',
    href: '#knowledge',
  },
  {
    label: 'Projetos',
    href: '#projects',
  },
  {
    label: 'Contato',
    href: '#contact',
  },
]

export default function Header() {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <motion.header
      className="absolute top-0 z-10 h-24 w-full flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" container flex items-center justify-between">
        <Link href="/">
          <Image
            width={180}
            height={30}
            src="/images/Portfolio_Logo.webp"
            alt="Logo portifólio"
          />
        </Link>

        <nav className="flex items-center gap-2 sm:gap-10 ">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
