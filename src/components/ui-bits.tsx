import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import Reveal from '@/components/Reveal'

export type Accent = 'violet' | 'amber' | 'emerald' | 'cyan' | 'rose' | 'indigo'

export const accentText: Record<Accent, string> = {
  violet: 'text-violet-300',
  amber: 'text-amber-300',
  emerald: 'text-emerald-300',
  cyan: 'text-cyan-300',
  rose: 'text-rose-300',
  indigo: 'text-indigo-300',
}

export const accentBorder: Record<Accent, string> = {
  violet: 'border-violet-400/30',
  amber: 'border-amber-400/30',
  emerald: 'border-emerald-400/30',
  cyan: 'border-cyan-400/30',
  rose: 'border-rose-400/30',
  indigo: 'border-indigo-400/30',
}

export const accentBg: Record<Accent, string> = {
  violet: 'bg-violet-400/10',
  amber: 'bg-amber-400/10',
  emerald: 'bg-emerald-400/10',
  cyan: 'bg-cyan-400/10',
  rose: 'bg-rose-400/10',
  indigo: 'bg-indigo-400/10',
}

/** 板块标题区 */
export function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
  accent,
}: {
  index: string
  kicker: string
  title: string
  subtitle: string
  accent: Accent
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-medium tracking-[0.35em] ${accentText[accent]}`}>
        {index} · {kicker}
      </p>
      <h2 className="font-serif-sc text-4xl font-bold leading-snug md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg">{subtitle}</p>
    </Reveal>
  )
}

/** 概念卡片 */
export function ConceptCard({
  icon: Icon,
  title,
  body,
  tag,
  accent,
  delay = 0,
}: {
  icon: LucideIcon
  title: string
  body: string
  tag?: string
  accent: Accent
  delay?: number
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
        <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${accentBg[accent]} ${accentText[accent]}`}>
          <Icon className="h-5 w-5" />
        </div>
        {tag && (
          <span className={`mb-2 inline-block w-fit rounded-full border px-2.5 py-0.5 text-xs ${accentBorder[accent]} ${accentText[accent]}`}>
            {tag}
          </span>
        )}
        <h3 className="font-serif-sc mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">{body}</p>
      </div>
    </Reveal>
  )
}

/** 思想实验 / 案例高亮框 */
export function ThoughtBox({
  label,
  title,
  children,
  accent,
}: {
  label: string
  title: string
  children: ReactNode
  accent: Accent
}) {
  return (
    <Reveal>
      <div className={`glass rounded-2xl border-l-4 p-7 md:p-9 ${accentBorder[accent]}`}>
        <p className={`mb-2 text-xs font-medium tracking-[0.3em] ${accentText[accent]}`}>{label}</p>
        <h3 className="font-serif-sc mb-4 text-2xl font-bold">{title}</h3>
        <div className="space-y-3 text-sm leading-relaxed text-slate-300 md:text-base">{children}</div>
      </div>
    </Reveal>
  )
}

/** 一句话小结 */
export function Takeaway({ children, accent }: { children: ReactNode; accent: Accent }) {
  return (
    <Reveal>
      <p className={`mx-auto max-w-3xl text-center font-serif-sc text-xl font-semibold leading-relaxed md:text-2xl ${accentText[accent]}`}>
        {children}
      </p>
    </Reveal>
  )
}
