import { Link, useNavigate, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Compass, Lightbulb, MessageSquareQuote } from 'lucide-react'
import Starfield from '@/components/Starfield'
import { TOPIC_MAP, getNeighbors } from '@/data/topics'
import { QUESTION_META } from '@/lib/questions'
import { scrollToId } from '@/lib/scroll'

export default function DetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const topic = id ? TOPIC_MAP[id] : undefined

  if (!topic) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-[#060a16] px-6">
        <Starfield />
        <div className="relative z-10 text-center">
          <p className="font-serif-sc text-6xl font-black text-slate-700">404</p>
          <p className="mt-4 text-slate-400">这一页尚未被任何宇宙分支书写。</p>
          <Link
            to="/"
            className="mt-8 inline-block rounded-full border border-white/15 px-6 py-2.5 text-sm text-slate-300 transition hover:border-white/40 hover:text-white"
          >
            返回首页
          </Link>
        </div>
      </div>
    )
  }

  const { prev, next } = getNeighbors(topic.id)

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#060a16]">
      <Starfield />
      <div className="relative z-10">
        {/* 顶部导航条 */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a16]/85 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5">
            <button
              onClick={() => {
                navigate('/')
                setTimeout(() => scrollToId(topic.sectionAnchor), 120)
              }}
              className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              返回 · {topic.section.replace(/^\d+ · /, '')}
            </button>
            <Link to="/" className="font-serif-sc text-sm font-bold tracking-wide text-slate-200 hover:text-white">
              心物宇宙
            </Link>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-6 pb-24 pt-16">
          {/* 头部 */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[110px]" />
          <p className="mb-4 text-xs font-medium tracking-[0.35em] text-violet-300/80">
            {topic.section}
          </p>
          <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {topic.tag}
          </span>
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {topic.questions.map((q) => (
              <span
                key={q}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${QUESTION_META[q].pill}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${QUESTION_META[q].dot}`} />
                {QUESTION_META[q].label}
              </span>
            ))}
          </div>
          <h1 className="font-serif-sc text-3xl font-bold leading-snug md:text-5xl">{topic.title}</h1>
          <p className="mt-7 border-l-2 border-violet-400/50 pl-5 text-base leading-loose text-slate-300 md:text-lg">
            {topic.lead}
          </p>

          {/* 正文区块 */}
          <div className="mt-14 space-y-14">
            {topic.blocks.map((b) => (
              <section key={b.heading}>
                <h2 className="font-serif-sc mb-4 text-2xl font-bold text-slate-100">{b.heading}</h2>
                {b.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 text-[15px] leading-[1.95] text-slate-400">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* 争议与分析 */}
          <section className="mt-16">
            <div className="glass rounded-2xl p-7 md:p-9">
              <p className="mb-2 flex items-center gap-2 text-xs font-medium tracking-[0.3em] text-cyan-300">
                <MessageSquareQuote className="h-4 w-4" />
                {topic.debate.label}
              </p>
              <div className="mt-5 space-y-6">
                {topic.debate.points.map((pt) => (
                  <div key={pt.head}>
                    <h3 className="mb-1.5 font-semibold text-slate-100">{pt.head}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{pt.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 小结 */}
          <section className="mt-12">
            <p className="flex gap-3 text-lg font-medium leading-relaxed text-violet-200">
              <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
              {topic.takeaway}
            </p>
          </section>

          {/* 延伸阅读 */}
          <section className="mt-14">
            <h2 className="font-serif-sc mb-5 flex items-center gap-2 text-xl font-bold">
              <BookOpen className="h-5 w-5 text-indigo-300" />
              延伸阅读
            </h2>
            <ul className="space-y-3">
              {topic.reading.map((r) => (
                <li key={r.title} className="glass rounded-xl p-4">
                  <p className="text-sm font-semibold text-slate-200">{r.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{r.note}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* 相关主题 */}
          <section className="mt-14">
            <h2 className="font-serif-sc mb-5 flex items-center gap-2 text-xl font-bold">
              <Compass className="h-5 w-5 text-cyan-300" />
              相关主题
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {topic.related.map((rid) => {
                const rel = TOPIC_MAP[rid]
                if (!rel) return null
                return (
                  <Link
                    key={rid}
                    to={`/topic/${rid}`}
                    className="glass glass-hover group rounded-xl p-4"
                  >
                    <p className="text-[11px] tracking-wider text-slate-500">{rel.tag}</p>
                    <p className="font-serif-sc mt-1 text-sm font-semibold leading-snug text-slate-200 group-hover:text-white">
                      {rel.title}
                    </p>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* 上一篇 / 下一篇 */}
          <nav className="mt-16 grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                to={`/topic/${prev.id}`}
                className="glass glass-hover group rounded-2xl p-5"
              >
                <p className="mb-2 flex items-center gap-1 text-xs text-slate-500">
                  <ArrowLeft className="h-3.5 w-3.5" /> 上一篇
                </p>
                <p className="font-serif-sc font-semibold text-slate-200 group-hover:text-white">{prev.title}</p>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/topic/${next.id}`}
                className="glass glass-hover group rounded-2xl p-5 text-right"
              >
                <p className="mb-2 flex items-center justify-end gap-1 text-xs text-slate-500">
                  下一篇 <ArrowRight className="h-3.5 w-3.5" />
                </p>
                <p className="font-serif-sc font-semibold text-slate-200 group-hover:text-white">{next.title}</p>
              </Link>
            )}
          </nav>

          <div className="mt-14 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm text-slate-300 transition hover:border-white/40 hover:text-white"
            >
              返回漫游首页 <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
