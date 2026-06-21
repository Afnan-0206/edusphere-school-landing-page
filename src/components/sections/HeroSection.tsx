import { ArrowRight } from 'lucide-react'
import { schoolPhotos } from '../../data/siteData'

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F6F1E4] pb-16 pt-32 sm:pt-36 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-px bg-[#2F4733]/35" />
      <div className="container-page relative">
        <div className="border-y border-[#2F4733]/40 py-3 font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#2F4733] sm:flex sm:items-center sm:justify-between"><span>EduSphere School · Admissions Office</span><span className="mt-1 block sm:mt-0">Whitefield, Bengaluru · 2026–27</span></div>
        <div className="grid items-center gap-14 py-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:py-16">
          <div className="relative max-w-3xl">
            <span className="eyebrow">Letter no. ES/AD/2026</span>
            <p className="mt-7 font-display text-2xl font-semibold italic text-[#2F4733] sm:text-3xl">Dear Bengaluru families,</p>
            <h1 className="text-balance mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-[#1B2A4A] sm:text-5xl lg:text-[4.2rem]">your child’s next chapter starts here.</h1>
            <div className="stamp stamp-hero relative float-right -mt-2 mb-2 size-24 rotate-[10deg] text-center text-[10px] leading-4 sm:absolute sm:-right-12 sm:top-2 sm:size-36 sm:text-xs">Admissions<br />open<br />2026–27</div>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#2B2B28]/78 sm:text-lg">EduSphere School provides quality education, modern facilities, and a caring environment where every child can learn, grow, and succeed.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#enquiry" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#B8893E] bg-[#B8893E] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#1B2A4A] transition-colors hover:bg-[#c7974c]">Request an admission note <ArrowRight size={16} /></a><a href="#programs" className="focus-ring inline-flex min-h-12 items-center justify-center border border-[#2F4733] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#1B2A4A] transition-colors hover:bg-[#e9dfc9]">View learning programmes</a></div>
            <p className="mt-8 border-t border-[#2F4733]/30 pt-4 font-mono text-[10px] uppercase tracking-[.1em] text-[#2F4733]">A considered education, recorded one child at a time.</p>
          </div>
          <div className="mx-auto w-full max-w-lg lg:max-w-none">
            <figure className="photo-letter rotate-[1.2deg] p-3 sm:p-4"><img src={schoolPhotos.hero} alt="Teacher guiding students through a hands-on classroom project" className="aspect-[4/4.5] w-full object-cover sm:aspect-[4/4.2]" fetchPriority="high" /><figcaption className="px-2 pb-1 pt-5 text-xl text-[#2F4733]"><span className="handwritten">A small moment from an ordinary school day.</span><span className="mt-1 block font-mono text-[10px] not-italic uppercase tracking-[.09em] text-[#2B2B28]/65">Classroom journal · EduSphere</span></figcaption></figure>
          </div>
        </div>
      </div>
    </section>
  )
}
