import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { programs } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

export function ProgramsSection() {
  const [selected, setSelected] = useState<number | null>(null)
  const program = selected === null ? null : programs[selected]

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <section id="programs" className="section-space bg-[#F6F1E4]">
      <div className="container-page">
        <SectionHeader eyebrow="Learning catalogue" title="Programs made for every stage" description="From first steps in school to confident next steps beyond it, our programs grow with your child." />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ title, description }, index) => <article key={title} className={`index-card min-h-64 p-6 ${index % 3 === 0 ? 'rotate-[-1deg]' : index % 3 === 2 ? 'rotate-[1deg]' : ''}`}><span className="font-mono text-[10px] font-bold uppercase tracking-[.1em] text-[#B8893E]">Catalogue {String(index + 1).padStart(2, '0')}</span><h3 className="mt-8 max-w-[13rem] font-display text-2xl font-bold leading-7 text-[#1B2A4A]">{title}</h3><p className="mt-4 max-w-sm text-sm leading-6 text-[#2B2B28]/72">{description}</p><button type="button" onClick={() => setSelected(index)} className="focus-ring mt-6 border-b border-[#B8893E] pb-1 font-mono text-[11px] font-bold uppercase tracking-[.08em] text-[#2F4733] hover:text-[#B8893E]">Read programme note</button></article>)}
        </div>
      </div>
      {program && <div className="fixed inset-0 z-[70] grid place-items-center bg-[#1B2A4A]/75 p-4" role="dialog" aria-modal="true" aria-labelledby="program-title" onMouseDown={() => setSelected(null)}><div className="relative w-full max-w-lg border border-[#2F4733] bg-[#F6F1E4] p-7 shadow-2xl sm:p-9" onMouseDown={(event) => event.stopPropagation()}><button type="button" onClick={() => setSelected(null)} className="focus-ring absolute right-4 top-4 grid size-10 place-items-center text-[#1B2A4A] hover:bg-[#e9dfc9]" aria-label="Close program details"><X size={21} /></button><span className="font-mono text-[10px] font-bold uppercase tracking-[.1em] text-[#B8893E]">Programme note</span><h3 id="program-title" className="mt-4 pr-10 font-display text-3xl font-bold leading-tight text-[#1B2A4A]">{program.title}</h3><p className="mt-5 leading-7 text-[#2B2B28]/78">{program.description} Our educators combine clear routines, joyful practice, and individual encouragement to help children feel confident as they grow.</p><div className="ledger-paper mt-6 border-y border-[#2F4733]/30 py-4 text-sm font-semibold text-[#1B2A4A]"><p>✓ Age-appropriate learning milestones</p><p className="mt-3">✓ Regular family updates and guidance</p></div><a href="#enquiry" onClick={() => setSelected(null)} className="focus-ring mt-7 inline-flex border border-[#B8893E] bg-[#B8893E] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#1B2A4A] hover:bg-[#c7974c]">Ask about this programme</a></div></div>}
    </section>
  )
}
