import { Fingerprint, Orbit, Repeat } from 'lucide-react'
import { SectionHeading, ConceptCard, ThoughtBox, Takeaway, type Accent } from '@/components/ui-bits'

const IDEAS: { id: string; icon: typeof Orbit; tag: string; title: string; body: string; accent: Accent }[] = [
  {
    id: 'particle-identity',
    icon: Fingerprint,
    tag: '量子统计',
    title: '粒子全同性：自然禁止贴标签',
    body: '任意两个电子在所有属性上绝对、原则上地不可区分——这不是测量精度问题，而是自然律本身。“这一个”与“那一个”的区分在最底层不存在，全同性支撑了化学、激光、超导体与白矮星，也摧毁了朴素的个体性形而上学。',
    accent: 'cyan',
  },
  {
    id: 'one-electron',
    icon: Orbit,
    tag: '惠勒—费曼',
    title: '单粒子假说：宇宙只有一个电子',
    body: '1940 年惠勒打电话给费曼：“所有电子都相同，因为宇宙里只有一个电子。”正电子是它在时间中逆行留下的折返。假说因正反物质不对称而被放弃，却催生了路径积分与费曼图——物理学史上最高产的错误之一。',
    accent: 'violet',
  },
  {
    id: 'recurrence',
    icon: Repeat,
    tag: '复现与轮回',
    title: '轮回假说：庞加莱复现与永恒轮回',
    body: '时间无限而状态有限，一切终将重演——这是定理而非玄学。从庞加莱复现到尼采的永恒轮回试炼，再到佛教“无我”的因果之流，三种轮回共用一个拷问：重复之中，个体性如何维持？',
    accent: 'rose',
  },
]

export default function Identity() {
  return (
    <section id="identity" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="06"
        kicker="量子身份之谜"
        title="全同、唯一与轮回：个体性的三重崩解"
        subtitle="量子力学在最深处松动了“这一个”的概念——三张卡片从三个方向逼近同一个问题：自然界真的保存“个体”吗？"
        accent="indigo"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {IDEAS.map((idea, i) => (
          <ConceptCard
            key={idea.id}
            id={idea.id}
            icon={idea.icon}
            tag={idea.tag}
            title={idea.title}
            body={idea.body}
            accent={idea.accent}
            delay={i * 120}
          />
        ))}
      </div>
      <div className="mt-14">
        <ThoughtBox label="三题连环" title="个体性的三重崩解" accent="indigo">
          <p>
            全同性摧毁了<strong className="text-slate-100">空间中的个体性</strong>——没有“这一个”电子；
            单粒子假说把它推到极致——所有电子也许是<strong className="text-slate-100">同一个</strong>；
            轮回追问<strong className="text-slate-100">时间中的个体性</strong>——两次出现的“你”是否同一个。
            三段旅程在逼问同一句话：莱布尼茨的“这个性”（haecceity）在自然界中真的有对应物吗？
          </p>
          <p>
            值得注意的是，这三个问题恰好是本站三问的微观镜像：心智之问在追问“这一个体验者”，
            物质之问在追问“这一个物体”，起源之问在追问“这一个宇宙”——而量子的回答是：
            “这一个”也许从来只是统计学的方便说法。
          </p>
        </ThoughtBox>
      </div>
      <div className="mt-14">
        <Takeaway accent="indigo">
          在最底层，自然似乎只保存种类、模式与因果，不保存个体——我们所以为的“这一个”，是宏观世界的温柔虚构。
        </Takeaway>
      </div>
    </section>
  )
}
