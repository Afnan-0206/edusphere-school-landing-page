import { Globe2, GraduationCap, Heart, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { navLinks, programs } from '../../data/siteData'

const socialLinks = [
  { icon: Globe2, label: 'Home', href: '#home' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919876543210', external: true },
  { icon: Send, label: 'Email admissions', href: 'mailto:info@edusphere.school' },
  { icon: Heart, label: 'Admission enquiry', href: '#enquiry' },
]

export function Footer() {
  return (
    <footer className="border-t-4 border-[#B8893E] bg-[#1B2A4A] text-[#F6F1E4]">
      <div className="container-page pt-9"><p className="handwritten text-2xl text-[#d7c090]">Yours in education,</p><div className="mt-5 border-t border-[#F6F1E4]/25" /></div>
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_1fr_1fr] lg:gap-12">
        <div><a href="#home" className="focus-ring inline-flex bg-[#F6F1E4] p-3" aria-label="EduSphere School home"><img src="/brand/edusphere-logo-horizontal.png" alt="EduSphere School" className="h-14 w-auto max-w-[255px] object-contain object-left" /></a><p className="mt-5 max-w-sm text-sm leading-6 text-[#F6F1E4]/68">A caring, future-ready school where children build knowledge, confidence, and character.</p><div className="mt-6 flex gap-2">{socialLinks.map(({ icon: Icon, label, href, external }) => <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} aria-label={label} className="focus-ring grid size-9 place-items-center border border-[#F6F1E4]/30 text-[#d7c090] transition-colors hover:bg-[#F6F1E4] hover:text-[#1B2A4A]"><Icon size={16} /></a>)}</div></div>
        <div><h3 className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#d7c090]">Quick links</h3><ul className="mt-5 space-y-3">{navLinks.slice(1).map((link) => <li key={link.href}><a href={link.href} className="focus-ring text-sm text-[#F6F1E4]/70 hover:text-[#d7c090]">{link.label}</a></li>)}</ul></div>
        <div><h3 className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#d7c090]">Programs</h3><ul className="mt-5 space-y-3">{programs.slice(0, 5).map((program) => <li key={program.title}><a href="#programs" className="focus-ring text-sm text-[#F6F1E4]/70 hover:text-[#d7c090]">{program.title}</a></li>)}</ul></div>
        <div><h3 className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#d7c090]">Contact</h3><ul className="mt-5 space-y-4 text-sm text-[#F6F1E4]/70"><li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-[#d7c090]" size={17} />Whitefield, Bengaluru, Karnataka</li><li><a href="tel:+919876543210" className="flex gap-3 hover:text-[#d7c090]"><Phone className="shrink-0 text-[#d7c090]" size={17} />+91 98765 43210</a></li><li><a href="mailto:info@edusphere.school" className="flex gap-3 hover:text-[#d7c090]"><Mail className="shrink-0 text-[#d7c090]" size={17} />info@edusphere.school</a></li></ul></div>
      </div>
      <div className="border-t border-[#F6F1E4]/20"><div className="container-page flex flex-col gap-2 py-5 text-center font-mono text-[10px] uppercase tracking-[.08em] text-[#F6F1E4]/50 sm:flex-row sm:items-center sm:justify-between sm:text-left"><p>© 2026 EduSphere School. All rights reserved.</p><p>Built for brighter futures.</p></div></div>
    </footer>
  )
}
