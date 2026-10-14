import type { TopicDetail } from './types'
import { TOPIC_ORDER } from './types'
import { mapTopics } from './topics-map'
import { philosophyTopics } from './topics-philosophy'
import { mindBodyTopics } from './topics-mindbody'
import { neuroscienceTopics } from './topics-neuro'
import { physicsTopics } from './topics-physics'
import { identityTopics } from './topics-identity'
import { cosmosTopics } from './topics-cosmos'

export const ALL_TOPICS: TopicDetail[] = [
  ...mapTopics,
  ...philosophyTopics,
  ...mindBodyTopics,
  ...neuroscienceTopics,
  ...physicsTopics,
  ...identityTopics,
  ...cosmosTopics,
]

export const TOPIC_MAP: Record<string, TopicDetail> = Object.fromEntries(
  ALL_TOPICS.map((t) => [t.id, t]),
)

/** 按 TOPIC_ORDER 排序的完整列表 */
export const ORDERED_TOPICS: TopicDetail[] = TOPIC_ORDER.map((id) => TOPIC_MAP[id]).filter(Boolean)

export function getNeighbors(id: string): { prev: TopicDetail | null; next: TopicDetail | null } {
  const idx = TOPIC_ORDER.indexOf(id)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? TOPIC_MAP[TOPIC_ORDER[idx - 1]] : null,
    next: idx < TOPIC_ORDER.length - 1 ? TOPIC_MAP[TOPIC_ORDER[idx + 1]] : null,
  }
}
