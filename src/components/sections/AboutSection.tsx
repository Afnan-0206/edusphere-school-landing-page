import { ArrowUpRight } from 'lucide-react'
import { schoolPhotos, schoolValues } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

const commitments = ['Child-centred, supportive learning', 'A balance of academics and discovery', 'Partnership with every family']

export function AboutSection() {
  return (
    <section id="about" className="section-space bg-[#F6F1E4]">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[.93fr_1.07fr] lg:gap-20">
          <div>
            <SectionHeader align="left" eyebrow="School record · 01" title="About EduSphere School" description="EduSphere School is focused on providing quality education with strong values, modern teaching methods, and personal attention to every student." />
            <p className="-mt-4 text-base leading-8 text-[#2B2B28]/78">Our goal is simple: to help children grow academically, socially, and personally—so they leave our doors ready for what comes next.</p>
            <div className="ledger-paper mt-8 border-y border-[#2F4733]/30 py-4">
              {commitments.map((item, index) => <div key={item} className="flex gap-4 py-2"><span className="font-display text-xl italic text-[#B8893E]">✓</span><span className="text-sm font-semibold leading-6 text-[#1B2A4A]">{item}</span><span className="ml-auto font-mono text-[10px] text-[#2F4733]/65">0{index + 1}</span></div>)}
            </div>
            <a href="#enquiry" className="focus-ring mt-8 inline-flex items-center gap-2 border-b border-[#B8893E] pb-1 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#1B2A4A] hover:text-[#B8893E]">Discover our approach <ArrowUpRight size={16} /></a>
          </div>
          <div>
            <figure className="photo-letter -rotate-[1deg] p-3 sm:p-4"><img src={schoolPhotos.about} alt="Students participating in a guided learning activity" className="aspect-[16/10] w-full object-cover" loading="lazy" /><figcaption className="px-2 pb-1 pt-5"><p className="handwritten text-xl text-[#2F4733]">A school day with room for questions.</p><p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[.09em] text-[#2B2B28]/60">Teacher’s notebook · EduSphere</p></figcaption></figure>
            <div className="mt-8 grid border-t border-[#2F4733]/35 sm:grid-cols-3">
              {schoolValues.map(({ title, description }, index) => <div key={title} className="border-b border-[#2F4733]/35 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"><span className="font-mono text-[10px] font-bold text-[#B8893E]">REF. 0{index + 1}</span><h3 className="mt-3 font-display text-lg font-bold text-[#1B2A4A]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#2B2B28]/72">{description}</p></div>)}
            </div>
          </div>
        </div>
        <blockquote className="relative mt-16 border border-[#2F4733]/35 bg-[#efe7d4] px-7 py-8 sm:px-10 lg:mt-20"><span className="stamp absolute -right-3 -top-3 size-14 text-center text-[8px] leading-3">Noted<br />in good<br />faith</span><p className="max-w-4xl font-display text-2xl font-semibold leading-9 text-[#1B2A4A] sm:text-3xl">“Education is not just preparation for life—it is a child’s first chance to understand their own potential.”</p><footer className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[.1em] text-[#2F4733]">EduSphere school statement</footer></blockquote>
      </div>
    </section>
  )
}
