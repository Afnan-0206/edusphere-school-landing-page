import { whyChooseUs } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

export function WhyChooseUsSection() {
  return (
    <section className="section-space bg-[#efe7d4]">
      <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader align="left" eyebrow="Family correspondence" title="A school that feels like a trusted partner" description="We combine thoughtful teaching with a warm, structured environment so families can feel confident at every stage." />
          <div className="border-y border-[#2F4733]/35">
            {whyChooseUs.map((benefit, index) => <div key={benefit} className="flex gap-4 border-b border-[#2F4733]/20 py-4 last:border-b-0"><span className="font-mono text-[11px] font-bold text-[#B8893E]">0{index + 1}</span><span className="text-sm font-semibold leading-6 text-[#1B2A4A]">{benefit}</span></div>)}
          </div>
        </div>
        <aside className="relative border border-[#1B2A4A] bg-[#1B2A4A] p-7 text-[#F6F1E4] sm:p-10"><span className="stamp absolute -right-4 -top-4 size-20 border-[#B8893E] text-center text-[9px] leading-3 text-[#B8893E]">Family<br />note<br />verified</span><p className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#d7c090]">Made for families</p><h3 className="mt-4 max-w-md font-display text-3xl font-bold leading-tight">Every question gets a caring answer.</h3><div className="mt-9 divide-y divide-[#F6F1E4]/20 border-y border-[#F6F1E4]/20">{[['Open communication', 'Regular updates that keep you in the loop.'], ['Individual support', 'Guidance shaped around each child.'], ['Safety first', 'A secure campus and a dependable routine.']].map(([title, text], index) => <div key={title} className="py-5"><span className="font-mono text-[10px] text-[#B8893E]">NOTE 0{index + 1}</span><p className="mt-2 font-bold text-[#F6F1E4]">{title}</p><p className="mt-1 text-sm leading-6 text-[#F6F1E4]/72">{text}</p></div>)}</div></aside>
      </div>
    </section>
  )
}
