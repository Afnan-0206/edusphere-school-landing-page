import { ArrowRight } from 'lucide-react'
import { admissionSteps } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

export function AdmissionProcessSection() {
  return (
    <section id="admissions" className="section-space bg-[#F6F1E4]">
      <div className="container-page">
        <SectionHeader eyebrow="Admissions register" title="A clear path to joining EduSphere" description="Our team keeps every step straightforward, personal, and easy to understand." />
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-5"><div className="absolute left-[12.5%] right-[12.5%] top-9 hidden border-t border-dashed border-[#2F4733]/55 lg:block" />{admissionSteps.map(({ title, description }, index) => <article key={title} className="relative text-center"><span className="stamp relative mx-auto grid size-[4.5rem] bg-[#F6F1E4] text-base text-[#1B2A4A]">0{index + 1}</span><p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[.1em] text-[#B8893E]">Reference step</p><h3 className="mt-2 font-display text-xl font-bold text-[#1B2A4A]">{title}</h3><p className="mx-auto mt-3 max-w-52 text-sm leading-6 text-[#2B2B28]/72">{description}</p></article>)}</div>
        <div className="mt-12 text-center"><a href="#enquiry" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#B8893E] bg-[#B8893E] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#1B2A4A] transition-colors hover:bg-[#c7974c]">Start admission enquiry <ArrowRight size={16} /></a></div>
      </div>
    </section>
  )
}
