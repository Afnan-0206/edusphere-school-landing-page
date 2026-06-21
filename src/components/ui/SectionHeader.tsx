type SectionHeaderProps = { eyebrow: string; title: string; description?: string; align?: 'left' | 'center' }

export function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  const centered = align === 'center'
  return (
    <div className={`mb-10 max-w-2xl ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-balance mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[#1B2A4A] sm:text-4xl">{title}</h2>
      <span className={`ledger-rule mt-5 block h-px w-24 ${centered ? 'mx-auto' : ''}`} />
      {description && <p className="mt-5 text-base leading-7 text-[#2B2B28]/75 sm:text-lg">{description}</p>}
    </div>
  )
}
