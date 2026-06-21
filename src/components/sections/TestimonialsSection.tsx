import { Star } from 'lucide-react'
import { testimonials } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

export function TestimonialsSection() {
  return (
    <section className="section-space bg-[#efe7d4]">
      <div className="container-page">
        <SectionHeader eyebrow="Margin notes" title="Trusted by families, loved by learners" description="The most meaningful measure of our work is the confidence families feel in their child’s journey." />
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role, initials }, index) => <article key={name} className={`relative border-l-2 border-[#B8893E] bg-[#F6F1E4] px-6 py-7 shadow-[3px_5px_0_rgba(47,71,51,.10)] ${index === 1 ? 'lg:translate-y-6' : ''}`}><span className="stamp absolute right-5 top-5 size-14 text-center text-[7px] leading-3">Verified<br />parent</span><div className="flex gap-0.5 text-[#B8893E]">{Array.from({ length: 5 }, (_, star) => <Star key={star} size={12} fill="currentColor" />)}</div><blockquote className="mt-6 pr-8 text-sm leading-7 text-[#2B2B28]/78">“{quote}”</blockquote><footer className="mt-8 border-t border-[#2F4733]/25 pt-4"><span className="font-mono text-[11px] font-bold text-[#1B2A4A]">{initials}</span><span className="ml-3 text-sm font-bold text-[#1B2A4A]">{name}</span><span className="ml-2 font-mono text-[10px] uppercase tracking-[.07em] text-[#2F4733]/70">{role}</span></footer></article>)}
        </div>
      </div>
    </section>
  )
}
