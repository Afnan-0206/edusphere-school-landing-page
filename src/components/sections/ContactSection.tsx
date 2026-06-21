import { Clock3, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const contactDetails = [
  { icon: MapPin, title: 'Visit us', text: 'Whitefield, Bengaluru, Karnataka', href: 'https://maps.google.com/?q=Whitefield,Bengaluru,Karnataka' },
  { icon: Phone, title: 'Call us', text: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: Mail, title: 'Email us', text: 'info@edusphere.school', href: 'mailto:info@edusphere.school' },
  { icon: Clock3, title: 'Office hours', text: 'Monday to Saturday, 9:00 AM - 5:00 PM' },
]

export function ContactSection() {
  return (
    <section id="contact" className="section-space bg-[#efe7d4]">
      <div className="container-page">
        <SectionHeader eyebrow="Admissions office" title="We’d love to welcome your family" description="Speak with our team, plan a visit, or ask any question. We’re here to help." />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="grid border-l border-t border-[#2F4733]/35 sm:grid-cols-2">{contactDetails.map(({ icon: Icon, title, text, href }, index) => { const content = <><span className="font-mono text-[10px] font-bold text-[#B8893E]">CONTACT {String(index + 1).padStart(2, '0')}</span><Icon className="mt-5 text-[#2F4733]" size={20} /><p className="mt-4 font-display text-xl font-bold text-[#1B2A4A]">{title}</p><p className="mt-2 text-sm leading-6 text-[#2B2B28]/72">{text}</p></>; const style = 'focus-ring min-h-52 border-b border-r border-[#2F4733]/35 bg-[#F6F1E4] p-6 transition-colors hover:bg-[#f9f5ea]'; return href ? <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={style}>{content}</a> : <div key={title} className={style}>{content}</div> })}</div>
          <aside className="relative border border-[#1B2A4A] bg-[#1B2A4A] p-7 text-[#F6F1E4] sm:p-9"><span className="stamp absolute -right-3 -top-3 size-16 border-[#B8893E] text-center text-[8px] leading-3 text-[#B8893E]">Reply<br />promptly</span><p className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#d7c090]">Quick connect</p><h3 className="mt-4 font-display text-3xl font-bold leading-tight">Ready to take the first step?</h3><p className="mt-4 text-sm leading-7 text-[#F6F1E4]/75">Choose the way that feels easiest. We’ll make sure the conversation is useful, warm, and clear.</p><div className="mt-8 grid gap-3"><a href="tel:+919876543210" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 border border-[#B8893E] bg-[#B8893E] px-4 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#1B2A4A] hover:bg-[#c7974c]"><Phone size={15} />Call now</a><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 border border-[#F6F1E4]/35 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#F6F1E4] hover:bg-[#F6F1E4]/10"><MessageCircle size={15} />WhatsApp</a><a href="https://maps.google.com/?q=Whitefield,Bengaluru,Karnataka" target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 border border-[#F6F1E4]/35 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[.08em] text-[#F6F1E4] hover:bg-[#F6F1E4]/10"><Navigation size={15} />Get directions</a></div></aside>
        </div>
      </div>
    </section>
  )
}
