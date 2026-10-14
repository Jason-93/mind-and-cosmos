import type { Question } from '../data/types'

export const QUESTION_META: Record<
  Question,
  { label: string; short: string; pill: string; dot: string }
> = {
  mind: {
    label: '心智之问',
    short: '心智',
    pill: 'bg-violet-500/15 text-violet-300 border-violet-400/30',
    dot: 'bg-violet-400',
  },
  matter: {
    label: '物质之问',
    short: '物质',
    pill: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
    dot: 'bg-cyan-400',
  },
  origin: {
    label: '起源之问',
    short: '起源',
    pill: 'bg-rose-500/15 text-rose-300 border-rose-400/30',
    dot: 'bg-rose-400',
  },
}
