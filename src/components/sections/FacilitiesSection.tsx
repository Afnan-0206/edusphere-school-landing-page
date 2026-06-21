import { facilities } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

export function FacilitiesSection() {
  return (
    <section id="facilities" className="section-space bg-[#efe7d4]">
      <div className="container-page">
        <SectionHeader eyebrow="Campus register" title="Everything children need to thrive" description="Purposeful spaces that support curious learning, active play, and everyday wellbeing." />
        <div className="grid gap-0 border-l border-t border-[#2F4733]/35 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map(({ title, description }, index) => <article key={title} className="min-h-48 border-b border-r border-[#2F4733]/35 bg-[#F6F1E4] p-5"><span className="font-mono text-[10px] font-bold uppercase tracking-[.08em] text-[#B8893E]">FAC. {String(index + 1).padStart(2, '0')}</span><div className="ledger-rule mt-4 h-px w-full" /><h3 className="mt-5 font-display text-xl font-bold text-[#1B2A4A]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#2B2B28]/72">{description}</p></article>)}
        </div>
      </div>
    </section>
  )
}
