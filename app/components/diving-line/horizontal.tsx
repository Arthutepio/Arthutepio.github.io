import { cn } from '@/app/lib/utils'

type HorizontalLineProps = {
  className: string
}

export const HorizontalLine = ({ className }: HorizontalLineProps) => {
  return (
    <div className={cn('w-full my-8 border-b border-b-gray-800', className)} />
  )
}
