import { CheckCircle2, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { Button } from '../ui/Button'

type FormState = { parentName: string; studentName: string; phone: string; email: string; grade: string; message: string }
type FormErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = { parentName: '', studentName: '', phone: '', email: '', grade: '', message: '' }
const classes = ['Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10']

export function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState, value: string) => { setForm((current) => ({ ...current, [field]: value })); if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined })) }
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: FormErrors = {}
    if (!form.parentName.trim()) nextErrors.parentName = 'Please enter the parent name.'
    if (!form.studentName.trim()) nextErrors.studentName = 'Please enter the student name.'
    if (!form.phone.trim()) nextErrors.phone = 'Please enter a phone number.'
    else if (!/^\+?[0-9\s-]{8,15}$/.test(form.phone)) nextErrors.phone = 'Please enter a valid phone number.'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!form.grade) nextErrors.grade = 'Please select a class.'
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); setSubmitted(false); return }
    setErrors({})
    try { const saved = JSON.parse(localStorage.getItem('edusphere-enquiries') || '[]'); localStorage.setItem('edusphere-enquiries', JSON.stringify([...saved, { ...form, submittedAt: new Date().toISOString() }])) } catch { /* Storage is optional for this frontend form. */ }
    setSubmitted(true); setForm(initialForm)
  }

  return (
    <section id="enquiry" className="section-space bg-[#efe7d4]">
      <div className="container-page">
        <div className="grid overflow-hidden border border-[#2F4733]/40 bg-[#F6F1E4] shadow-[8px_10px_0_rgba(47,71,51,.12)] lg:grid-cols-[.85fr_1.15fr]">
          <aside className="relative bg-[#1B2A4A] px-7 py-10 text-[#F6F1E4] sm:px-10 sm:py-12"><span className="stamp absolute -right-4 top-8 size-20 border-[#B8893E] text-center text-[8px] leading-3 text-[#B8893E]">Admissions<br />desk<br />open</span><p className="font-mono text-[10px] font-bold uppercase tracking-[.13em] text-[#d7c090]">Enquire today</p><h2 className="mt-5 max-w-md font-display text-3xl font-bold leading-tight sm:text-4xl">Let’s find the right next step for your child.</h2><p className="mt-5 max-w-sm leading-7 text-[#F6F1E4]/75">Share a few details and our admissions team will contact you to answer questions, arrange a visit, and guide you through the process.</p><div className="mt-9 divide-y divide-[#F6F1E4]/20 border-y border-[#F6F1E4]/20">{['A warm campus visit', 'Personal guidance from our admissions team', 'Simple, clear documentation support'].map((item, index) => <p key={item} className="flex gap-3 py-4 text-sm font-semibold"><span className="font-mono text-[#B8893E]">0{index + 1}</span>{item}</p>)}</div></aside>
          <div className="p-7 sm:p-10"><p className="font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#B8893E]">Admission enquiry · ref. ES-26</p><h2 className="mt-3 font-display text-3xl font-bold text-[#1B2A4A]">Tell us about your child</h2><form noValidate onSubmit={submit} className="mt-8 space-y-5"><div className="grid gap-5 sm:grid-cols-2"><FormField label="Parent Name" required error={errors.parentName}><input value={form.parentName} onChange={(event) => update('parentName', event.target.value)} className="form-input" placeholder="Your full name" /></FormField><FormField label="Student Name" required error={errors.studentName}><input value={form.studentName} onChange={(event) => update('studentName', event.target.value)} className="form-input" placeholder="Child's full name" /></FormField></div><div className="grid gap-5 sm:grid-cols-2"><FormField label="Phone Number" required error={errors.phone}><input value={form.phone} onChange={(event) => update('phone', event.target.value)} className="form-input" inputMode="tel" placeholder="+91 98765 43210" /></FormField><FormField label="Email" error={errors.email}><input value={form.email} onChange={(event) => update('email', event.target.value)} className="form-input" type="email" placeholder="you@example.com" /></FormField></div><FormField label="Class Interested In" required error={errors.grade}><select value={form.grade} onChange={(event) => update('grade', event.target.value)} className={`form-input ${form.grade ? '' : 'text-[#2B2B28]/45'}`}><option value="" disabled>Select a class</option>{classes.map((grade) => <option key={grade} value={grade}>{grade}</option>)}</select></FormField><FormField label="Message"><textarea value={form.message} onChange={(event) => update('message', event.target.value)} className="form-input min-h-24 resize-y" placeholder="Anything you would like us to know?" /></FormField><Button type="submit" className="mt-2 w-full sm:w-auto">Submit enquiry <Send size={15} /></Button>{submitted && <div className="flex items-start gap-3 border-l-2 border-[#2F4733] bg-[#e6efd9] p-4 text-sm font-medium leading-6 text-[#2F4733]" role="status"><CheckCircle2 className="mt-0.5 shrink-0" size={18} />Thank you — your enquiry has been saved. Our admissions team will contact you soon.</div>}</form></div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, required = false, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) { return <label className="block"><span className="font-mono text-[10px] font-bold uppercase tracking-[.08em] text-[#2F4733]">{label}{required && <span className="ml-1 text-[#8C3B2E]">*</span>}</span><span className="mt-1 block">{children}</span>{error && <span className="mt-2 block font-mono text-[10px] font-bold text-[#8C3B2E]">{error}</span>}</label> }
