import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../../data/siteData'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#2F4733]/25 bg-[#F6F1E4]/95 transition-shadow ${scrolled ? 'shadow-[0_4px_18px_rgba(27,42,74,.10)] backdrop-blur-md' : ''}`}>
      <div className="h-1 bg-[#1B2A4A]" />
      <nav className="container-page flex h-[70px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="focus-ring flex items-center gap-3" aria-label="EduSphere School home">
          <img src="/brand/edusphere-logo-horizontal.png" alt="EduSphere School" className="h-10 w-auto max-w-[205px] object-contain object-left sm:h-12 sm:max-w-[260px]" />
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="focus-ring font-mono text-[11px] font-bold uppercase tracking-[.07em] text-[#1B2A4A] transition-colors hover:text-[#B8893E]">{link.label}</a>)}
          <a href="#enquiry" className="focus-ring border border-[#B8893E] bg-[#B8893E] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[.08em] text-[#1B2A4A] transition-colors hover:bg-[#c7974c]">Begin enquiry</a>
        </div>

        <button type="button" className="focus-ring grid size-11 place-items-center text-[#1B2A4A] hover:bg-[#e9dfc9] lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={23} /> : <Menu size={24} />}</button>
      </nav>
      {open && <div className="border-t border-[#2F4733]/25 bg-[#F6F1E4] lg:hidden"><div className="container-page space-y-1 py-4">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="focus-ring block border-b border-[#2F4733]/15 px-2 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#1B2A4A] hover:text-[#B8893E]">{link.label}</a>)}<a href="#enquiry" onClick={() => setOpen(false)} className="focus-ring mt-4 block bg-[#B8893E] px-4 py-3 text-center font-mono text-xs font-bold uppercase tracking-[.08em] text-[#1B2A4A]">Begin enquiry</a></div></div>}
    </header>
  )
}
