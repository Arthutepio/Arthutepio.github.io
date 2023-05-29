import { ReactNode } from 'react'

type KnownTechProps = {
  tech: {
    icon: ReactNode
    name: string
  }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <div className="text-6xl">{tech.icon}</div>
      </div>

      <span></span>
    </div>
  )
}
