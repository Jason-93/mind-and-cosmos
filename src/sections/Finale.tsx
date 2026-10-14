import { Lightbulb, BookOpen } from 'lucide-react'
import { Link } from 'react-router'
import Reveal from '@/components/Reveal'
import { SectionHeading, ThoughtBox, type Accent } from '@/components/ui-bits'
import { TOPIC_MAP } from '@/data/topics'

const ROUTES: { kicker: string; title: string; desc: string; steps: string[] }[] = [
  {
    kicker: '意识线',
    title: '从“我思”到“参与”',
    desc: '沿着身心问题的主线走一遍：从笛卡尔的确定性出发，穿过实验神经科学，抵达“观测者参与造世”的激进终点。',
    steps: ['descartes', 'physicalism', 'split-brain', 'gwt', 'iit', 'evolution', 'participatory'],
  },
  {
    kicker: '物理线',
    title: '物质的骨架与深渊',
    desc: '从量子力学的基础悬念出发，经全同粒子、单电子宇宙，到延迟选择、全息原理与时空涌现——“物质”被一层层拆掉又重建。',
    steps: ['qm-foundations', 'particle-identity', 'one-electron', 'delayed-choice', 'contextuality', 'holography', 'emergent-spacetime'],
  },
  {
    kicker: '存在问题线',
    title: '“为什么是有”',
    desc: '从各文明的起源叙事出发，经斯宾诺莎与跨文明母题，走到轮回、循环宇宙与费米悖论——“存在”本身的追问链。',
    steps: ['greek', 'spinoza', 'motifs', 'recurrence', 'cyclic', 'why-anything', 'fermi'],
  },
]

const TIMELINE: { year: string; text: string; accent: Accent }[] = [
  { year: '前 6 世纪', text: '泰勒斯提出"万物源于水"，希腊自然哲学开端；同一时期，印度与中国思想传统相继成形。', accent: 'amber' },
  { year: '前 4 世纪', text: '柏拉图写下洞穴寓言；亚里士多德建立系统的自然研究；庄子梦蝶。', accent: 'amber' },
  { year: '1641', text: '笛卡尔《第一哲学沉思集》出版，身心二元论成为近代哲学的坐标原点。', accent: 'violet' },
  { year: '1687', text: '牛顿《自然哲学的数学原理》——天上与地上服从同一定律，"宇宙可理解"的信念被点燃。', accent: 'cyan' },
  { year: '1905–1915', text: '相对论与量子论相继诞生，经典世界观被彻底改写。', accent: 'cyan' },
  { year: '1929', text: '哈勃发现宇宙膨胀；十多年后，伽莫夫等人提出"大爆炸"概念。', accent: 'rose' },
  { year: '1965', text: '宇宙微波背景辐射被发现，大爆炸理论获得决定性证据。', accent: 'rose' },
  { year: '1981–1983', text: '暴胀理论与弦论兴起，宇宙学与量子引力成为前沿主战场。', accent: 'emerald' },
  { year: '1980s 起', text: '裂脑、利贝特等实验把意识问题搬进实验室；全局工作空间、IIT 等理论相继提出。', accent: 'violet' },
  { year: '2015', text: '引力波被直接探测，人类获得"倾听"宇宙的新感官。', accent: 'cyan' },
  { year: '2022', text: '诺贝尔物理学奖授予贝尔不等式检验实验，量子基础之争进入经验时代。', accent: 'emerald' },
  { year: '今天', text: '你读到了这一页——而这本身，也是 138 亿年故事的一部分。', accent: 'rose' },
]

const FURTHER: { title: string; body: string }[] = [
  { title: '《苏菲的世界》', body: '最好的哲学入门小说——以故事串起从苏格拉底到萨特的全景。' },
  { title: '《集异璧》（GEB）', body: '侯世达的奇书：从哥德尔定理一路漫游到意识与自我，难读但难忘。' },
  { title: '《意识的解释》', body: '丹尼尔·丹尼特以物理主义立场正面迎战"困难问题"的代表作。' },
  { title: '《时间简史》与《大设计》', body: '霍金的宇宙学科普：从大爆炸到无边界提案，第二本尤其讨论"为何存在"。' },
  { title: '《弦理论》教材之外的 Brian Greene 三部曲', body: '《宇宙的琴弦》《宇宙的结构》《隐藏的现实》，把前沿物理讲成史诗。' },
  { title: '斯坦福哲学百科（SEP）', body: '免费、严谨、持续更新的在线哲学辞典，每个词条都是综述级深度。' },
]

export default function Finale() {
  return (
    <section id="finale" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="09"
        kicker="结语"
        title="所有道路，都通回那个提问的人"
        subtitle="漫游结束。把所有问题叠在一起看，会出现一幅完整的图：观察者、物质与起源，互为镜像。"
        accent="indigo"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <ThoughtBox label="这次漫游的收获" title="三条谨慎的共识" accent="indigo">
          <p>
            <strong className="text-slate-100">一、体验依赖脑。</strong>
            无论意识的最终解释是什么，神经科学已确认：体验被神经活动的物理状态精确调制——这是所有立场都必须面对的硬事实。
          </p>
          <p>
            <strong className="text-slate-100">二、"常识实在"正在让位。</strong>
            前沿物理一致表明：时空、物质、因果这些直觉底层构件，可能都是更深结构的近似与涌现。
          </p>
          <p>
            <strong className="text-slate-100">三、起源问题仍然开放。</strong>
            大爆炸描述了"之后"，却没有回答"为何有物存在"；循环宇宙、无边界提案、多重宇宙各自拆除了"起点"，又各自动摇了别的直觉。
          </p>
        </ThoughtBox>
        <ThoughtBox label="诚实的清单" title="我们真正不知道的" accent="violet">
          <p>· 主观体验为何存在（困难问题）——未知。</p>
          <p>· 暗物质与暗能量的本质——未知。</p>
          <p>· 量子力学哪种诠释正确（如果"正确"这个词适用）——未知。</p>
          <p>· 量子引力如何统一、时空是否基本——未知。</p>
          <p>· 大爆炸"之前"或"为何有物"——未知，甚至可能永远超出经验可及。</p>
          <p className="text-slate-400">
            这不是失败的清单，而是一张绘制中的地图——空白处，正是下一次惊奇将发生的地方。
          </p>
        </ThoughtBox>
      </div>

      {/* 时间线 */}
      <Reveal className="mt-20">
        <h3 className="font-serif-sc mb-10 text-center text-3xl font-bold">一条 2500 年的追问时间线</h3>
      </Reveal>
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-4 left-[7px] top-2 w-px bg-white/15 md:left-1/2" />
        <div className="space-y-8">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 40}>
              <div className={`relative flex gap-6 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                <span className="absolute -left-[5px] top-1.5 h-3 w-3 rounded-full bg-violet-400/80 md:left-auto md:right-[-6px]" style={i % 2 === 1 ? { right: 'auto', left: '-6px' } : undefined} />
                <div className="glass rounded-xl p-4">
                  <p className="mb-1 text-sm font-semibold text-violet-300">{t.year}</p>
                  <p className="text-sm leading-relaxed text-slate-300">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* 三条重走路线 */}
      <Reveal className="mt-24">
        <h3 className="font-serif-sc mb-3 text-center text-3xl font-bold">三条重走路线</h3>
        <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-slate-400">
          如果不想按章节顺序重读，可以沿着下面三条线索，把散布在全站的主题串成各自的论证链。
        </p>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {ROUTES.map((r, i) => (
          <Reveal key={r.title} delay={i * 120} className="h-full">
            <div className="glass flex h-full flex-col rounded-2xl p-6">
              <p className="mb-1 text-xs font-medium tracking-[0.3em] text-indigo-300">{r.kicker}</p>
              <h4 className="font-serif-sc mb-2 text-lg font-semibold">{r.title}</h4>
              <p className="mb-5 text-sm leading-relaxed text-slate-400">{r.desc}</p>
              <ol className="mt-auto space-y-1">
                {r.steps.map((sid, idx) => {
                  const t = TOPIC_MAP[sid]
                  if (!t) return null
                  return (
                    <li key={sid}>
                      <Link
                        to={`/topic/${sid}`}
                        className="group flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                      >
                        <span className="w-4 shrink-0 text-xs text-slate-600">{idx + 1}.</span>
                        <span className="leading-snug group-hover:underline">{t.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 延伸阅读 */}
      <Reveal className="mt-24">
        <h3 className="font-serif-sc mb-10 text-center text-3xl font-bold">如果这场漫游勾起了你</h3>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FURTHER.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 100} className="h-full">
            <div className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
              <BookOpen className="mb-3 h-5 w-5 text-indigo-300" />
              <h4 className="font-serif-sc mb-2 text-lg font-semibold">{f.title}</h4>
              <p className="text-sm leading-relaxed text-slate-400">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 text-center">
        <Lightbulb className="mx-auto mb-5 h-8 w-8 text-amber-300" />
        <p className="font-serif-sc mx-auto max-w-2xl text-2xl font-bold leading-relaxed md:text-3xl">
          宇宙用了 138 亿年，造出一个
          <br />
          能回头追问这一切的物种。
        </p>
        <p className="mt-4 text-sm text-slate-500">
          心物宇宙 · 一场科普漫游 · 问题尚未结束
        </p>
      </Reveal>
    </section>
  )
}
