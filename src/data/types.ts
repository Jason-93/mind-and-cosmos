export type TopicBlock = {
  heading: string
  paragraphs: string[]
}

export type DebatePoint = {
  head: string
  text: string
}

export type TopicDetail = {
  id: string
  section: string
  sectionAnchor: string
  tag: string
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
  'qm-foundations',
  'string',
  'lqg',
  'holography',
  'emergent-spacetime',
  'bigbang',
  'inflation',
  'dark',
  'cyclic',
  'why-anything',
]
