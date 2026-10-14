import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, Search } from 'lucide-react'
import Starfield from '@/components/Starfield'
import { ORDERED_TOPICS } from '@/data/topics'
import type { Question } from '@/data/types'
import { QUESTION_META } from '@/lib/questions'

const SECTIONS = [
  { value: 'map', label: '导读 · 三问' },
  { value: 'philosophy', label: '第一章 · 哲学' },
  { value: 'mindbody', label: '第二章 · 身心' },
  { value: 'neuro', label: '第三章 · 神经' },
  { value: 'physics', label: '第四章 · 物理前沿' },
  { value: 'identity', label: '第五章 · 量子身份' },
  { value: 'observer', label: '第六章 · 观测者' },
  { value: 'cosmos', label: '第七章 · 宇宙' },
  { value: 'finale', label: '第八章 · 结语' },
]

const QUESTIONS: Question[] = ['mind', 'matter', 'origin']

export default function TopicsIndex() {
  const [keyword, setKeyword] = useState('')
  const [question, setQuestion] = useState<Question | null>(null)
  const [section, setSection] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase()
    return ORDERED_TOPICS.filter((t) => {
      if (question && !t.questions.includes(question)) return false
      if (section && t.sectionAnchor !== section) return false
      if (
        kw &&
        !t.title.toLowerCase().includes(kw) &&
        !t.lead.toLowerCase().includes(kw) &&
        !t.tag.toLowerCase().includes(kw)
      )
        return false
      return true
    })
  }, [keyword, question, section])

  const groups = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    for (const t of filtered) {
      const list = map.get(t.sectionAnchor) ?? []
      list.push(t)
      map.set(t.sectionAnchor, list)
    }
    return SECTIONS.filter((s) => map.has(s.value)).map((s) => ({
      ...s,
      topics: map.get(s.value)!,
    }))
  }, [filtered])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#060a16]">
      <Starfield />
      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a16]/85 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5">
            <Link to="/" className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              返回漫游首页
            </Link>
            <Link to="/" className="font-serif-sc text-sm font-bold tracking-wide text-slate-200 hover:text-white">
              心物宇宙
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-6 pb-24 pt-14">
          <p className="text-xs font-medium tracking-[0.35em] text-violet-300/80">全站导航</p>
          <h1 className="font-serif-sc mt-3 text-3xl font-bold md:text-4xl">主题索引</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
            全部 {ORDERED_TOPICS.length} 个主题按章节归档。可以用关键词搜索，也可以按「三问」或章节筛选，
            找到你想深入的那一个问题。
          </p>

          {/* 搜索 */}
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <Search className="h-4 w-4 shrink-0 text-slate-500" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="搜索标题、标签或正文导语……"
              className="w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-600"
            />
          </div>

          {/* 三问筛选 */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs text-slate-500">三问</span>
            {QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => setQuestion(question === q ? null : q)}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                  question === q
                    ? QUESTION_META[q].pill
                    : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-slate-200'
                }`}
              >
                {QUESTION_META[q].label}
              </button>
            ))}
          </div>

          {/* 章节筛选 */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs text-slate-500">章节</span>
            {SECTIONS.map((s) => (
              <button
                key={s.value}
                onClick={() => setSection(section === s.value ? null : s.value)}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                  section === s.value
                    ? 'border-indigo-400/40 bg-indigo-500/15 text-indigo-300'
                    : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-slate-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* 结果统计 */}
          <p className="mt-8 text-xs text-slate-500">
            共 {filtered.length} 个主题
            {question && ` · ${QUESTION_META[question].label}`}
            {section && ` · ${SECTIONS.find((s) => s.value === section)?.label}`}
            {keyword.trim() && ` · 关键词「${keyword.trim()}」`}
          </p>

          {/* 分组结果 */}
          {groups.length === 0 && (
            <p className="glass mt-6 rounded-2xl p-8 text-center text-sm text-slate-500">
              没有匹配的主题。试试放宽筛选条件，或换一个关键词。
            </p>
          )}
          <div className="mt-6 space-y-12">
            {groups.map((g) => (
              <section key={g.value}>
                <h2 className="font-serif-sc mb-4 text-lg font-bold text-slate-200">{g.label}</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {g.topics.map((t) => (
                    <Link
                      key={t.id}
                      to={`/topic/${t.id}`}
                      className="glass glass-hover group rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] tracking-wider text-slate-500">{t.tag}</p>
                        <div className="flex gap-1">
                          {t.questions.map((q) => (
                            <span
                              key={q}
                              title={QUESTION_META[q].label}
                              className={`h-1.5 w-1.5 rounded-full ${QUESTION_META[q].dot}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="font-serif-sc mt-1.5 text-sm font-semibold leading-snug text-slate-200 group-hover:text-white">
                        {t.title}
                      </p>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">{t.lead}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
