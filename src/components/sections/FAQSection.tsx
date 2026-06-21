import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { faqItems } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

export function FAQSection() {
  const [open, setOpen] = useState(0)
  return <section className="section-space bg-[#F6F1E4]"><div className="container-page max-w-4xl"><SectionHeader eyebrow="Registry help desk" title="Helpful details for families" description="If you need anything else, our school team is only a call or message away." /><div className="border-y border-[#2F4733]/40">{faqItems.map(({ question, answer }, index) => { const isOpen = open === index; return <div key={question} className="border-b border-dashed border-[#2F4733]/35 last:border-b-0"><button type="button" className="focus-ring flex w-full items-center justify-between gap-4 px-1 py-5 text-left" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)}><span><span className="mr-3 font-mono text-[10px] font-bold text-[#B8893E]">Q{String(index + 1).padStart(2, '0')}</span><span className="text-sm font-bold text-[#1B2A4A] sm:text-base">{question}</span></span><ChevronDown size={19} className={`shrink-0 text-[#2F4733] transition-transform ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <p className="max-w-3xl px-1 pb-6 text-sm leading-7 text-[#2B2B28]/75">{answer}</p>}</div> })}</div></div></section>
}
