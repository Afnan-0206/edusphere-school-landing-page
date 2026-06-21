import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { galleryItems } from '../../data/siteData'
import { SectionHeader } from '../ui/SectionHeader'

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selected === null) return
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'ArrowRight') setSelected((current) => current === null ? null : (current + 1) % galleryItems.length)
      if (event.key === 'ArrowLeft') setSelected((current) => current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected])

  return (
    <section id="gallery" className="section-space bg-[#F6F1E4]">
      <div className="container-page">
        <SectionHeader eyebrow="Family album" title="There’s always something to discover" description="From everyday questions to memorable celebrations, life at EduSphere is full of bright moments." />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map(({ title, label, image, alt }, index) => <figure key={title} className={`relative bg-[#fcf9f0] p-3 shadow-[5px_8px_0_rgba(47,71,51,.13)] ${index % 3 === 0 ? 'rotate-[-1.2deg]' : index % 3 === 2 ? 'rotate-[1.1deg]' : ''}`}><span className={`tape ${index % 2 ? 'right-7 top-[-8px] rotate-[6deg]' : 'left-7 top-[-8px]'}`} /><button type="button" onClick={() => setSelected(index)} className="focus-ring block w-full text-left" aria-label={`View ${title} photo`}><img src={image} alt={alt} className="aspect-[4/3] w-full object-cover" loading="lazy" /><figcaption className="px-2 pb-1 pt-4"><span className="handwritten text-xl text-[#2F4733]">{title}</span><span className="mt-1 block font-mono text-[10px] font-bold uppercase tracking-[.08em] text-[#2B2B28]/65">— {label}</span></figcaption></button></figure>)}
        </div>
      </div>
      {selected !== null && <div className="fixed inset-0 z-[70] grid place-items-center bg-[#1B2A4A]/85 p-4" role="dialog" aria-modal="true" aria-label={`${galleryItems[selected].title} photo viewer`} onMouseDown={() => setSelected(null)}><div className="relative w-full max-w-5xl bg-[#F6F1E4] p-3 shadow-2xl sm:p-4" onMouseDown={(event) => event.stopPropagation()}><img src={galleryItems[selected].image} alt={galleryItems[selected].alt} className="max-h-[76vh] w-full object-contain" /><div className="flex items-end justify-between gap-4 px-2 pt-4 text-[#1B2A4A]"><div><p className="handwritten text-2xl">{galleryItems[selected].title}</p><p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[.08em] text-[#2F4733]">{galleryItems[selected].label}</p></div><p className="hidden font-mono text-[10px] text-[#2F4733] sm:block">Use ← and → to explore</p></div><button type="button" onClick={() => setSelected(null)} className="focus-ring absolute right-5 top-5 grid size-10 place-items-center border border-[#2F4733]/50 bg-[#F6F1E4] text-[#1B2A4A] hover:bg-[#e9dfc9]" aria-label="Close photo viewer"><X size={21} /></button><button type="button" onClick={() => setSelected((current) => current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length)} className="focus-ring absolute left-5 top-1/2 grid size-10 -translate-y-1/2 place-items-center border border-[#2F4733]/50 bg-[#F6F1E4] text-[#1B2A4A] hover:bg-[#e9dfc9]" aria-label="Previous photo"><ArrowLeft size={21} /></button><button type="button" onClick={() => setSelected((current) => current === null ? null : (current + 1) % galleryItems.length)} className="focus-ring absolute right-5 top-1/2 grid size-10 -translate-y-1/2 place-items-center border border-[#2F4733]/50 bg-[#F6F1E4] text-[#1B2A4A] hover:bg-[#e9dfc9]" aria-label="Next photo"><ArrowRight size={21} /></button></div></div>}
    </section>
  )
}
