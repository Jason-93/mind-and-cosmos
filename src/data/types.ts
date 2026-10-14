export type TopicBlock = {
  heading: string
  paragraphs: string[]
}

export type DebatePoint = {
  head: string
  text: string
}

/** 三问：心智之问 / 物质之问 / 起源之问 */
export type Question = 'mind' | 'matter' | 'origin'

export type TopicDetail = {
  id: string
  section: string
  sectionAnchor: string
  tag: string
  /** 该主题主要回应的三问 */
  questions: Question[]
  /** 相关主题（详情页“相关主题”区块引用） */
  related: string[]
  title: string
  lead: string
  blocks: TopicBlock[]
  debate: {
    label: string
    points: DebatePoint[]
  }
  takeaway: string
  reading: { title: string; note: string }[]
}

/** 全站主题顺序：用于上一篇 / 下一篇导航 */
export const TOPIC_ORDER: string[] = [
  'question-mind',
  'question-matter',
  'question-origin',
  'greek',
  'india',
  'china',
  'abrahamic',
  'motifs',
  'descartes',
  'physicalism',
  'idealism',
  'spinoza',
  'panpsychism',
  'split-brain',
  'libet',
  'gwt',
  'iit',
  'predictive',
  'evolution',
  'qm-foundations',
  'string',
  'lqg',
  'holography',
  'emergent-spacetime',
  'particle-identity',
  'one-electron',
  'recurrence',
  'delayed-choice',
  'eraser',
  'participatory',
  'relational',
  'contextuality',
  'bigbang',
  'inflation',
  'dark',
  'abiogenesis',
  'fermi',
  'cyclic',
  'why-anything',
]
