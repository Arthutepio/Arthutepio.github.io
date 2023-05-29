import Image from 'next/image'
import Link from 'next/link'
import NavItem from './nav-items'

const NAV_ITEMS = [
  {
    label: 'Sobre mim',
    href: '#about',
  },
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
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
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
    </header>
  )
}
