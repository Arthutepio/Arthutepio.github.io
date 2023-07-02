'use client'
import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  label: string
  href: string
}

export default function NavItem({ label, href }: NavItemProps) {
  const pathname = usePathname()

  const isActive = pathname === href

  const handleContact = () => {
    const contactSection = document.querySelector(href)
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <a
      onClick={handleContact}
      className={cn(
        ' text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50',
      )}
    >
      <span className="text-cyan-400">#</span>
      <span className="text-[10px] sm:text-sm">{label}</span>
    </a>
  )
}
