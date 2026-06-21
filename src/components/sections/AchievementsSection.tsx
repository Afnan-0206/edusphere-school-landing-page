import { useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Stat = { value: number; suffix: string; label: string }

function LedgerStat({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (reduceMotion) { setCount(value); return }
    if (!visible) return
    let frame = 0
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / 800, 1)
      setCount(Math.floor(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [value, visible, reduceMotion])

  return <div ref={ref} className="flex items-baseline gap-3 border-b border-dashed border-[#2F4733]/35 py-4 last:border-b-0 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"><span className="font-mono text-xs font-bold uppercase tracking-[.08em] text-[#2F4733]">{label}</span><span className="min-w-4 flex-1 border-b border-dotted border-[#2F4733]/55" /><span className="font-mono text-xl font-bold text-[#1B2A4A]">{count}{suffix}</span></div>
}

const stats: Stat[] = [{ value: 400, suffix: '+', label: 'Students' }, { value: 30, suffix: '+', label: 'Teachers' }, { value: 15, suffix: '+', label: 'Years Experience' }, { value: 95, suffix: '%', label: 'Parent Satisfaction' }]

export function AchievementsSection() {
  return <section aria-label="EduSphere by the numbers" className="border-y border-[#2F4733]/35 bg-[#e9dfc9] py-5"><div className="container-page grid lg:grid-cols-4">{stats.map((stat) => <LedgerStat key={stat.label} {...stat} />)}</div></section>
}
