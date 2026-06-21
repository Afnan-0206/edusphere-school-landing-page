import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light' | 'ghost'
}

const variants = {
  primary: 'border border-[#B8893E] bg-[#B8893E] text-[#1B2A4A] hover:bg-[#c7974c]',
  secondary: 'border border-[#2F4733] bg-transparent text-[#1B2A4A] hover:bg-[#e9dfc9]',
  light: 'border border-[#F6F1E4] bg-[#F6F1E4] text-[#1B2A4A] hover:bg-[#fffdf7]',
  ghost: 'text-[#2F4733] hover:bg-[#e9dfc9]',
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  return <button className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-none px-5 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] transition-colors ${variants[variant]} ${className}`} {...props}>{children}</button>
}
