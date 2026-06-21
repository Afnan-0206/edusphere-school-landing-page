import type { HTMLAttributes, ReactNode } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode; hover?: boolean }

export function Card({ children, hover = false, className = '', ...props }: CardProps) {
  return <div className={`border border-[#2F4733]/35 bg-[#F6F1E4] ${hover ? 'transition-transform hover:-translate-y-1' : ''} ${className}`} {...props}>{children}</div>
}
