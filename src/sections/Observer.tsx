import { Aperture, Eraser, Users, Network, Shapes, type LucideIcon } from 'lucide-react'
import { SectionHeading, ConceptCard, ThoughtBox, Takeaway, type Accent } from '@/components/ui-bits'

const EXPERIMENTS: { id: string; icon: LucideIcon; tag: string; title: string; body: string; accent: Accent }[] = [
  {
    id: 'delayed-choice',
    icon: Aperture,
    tag: '惠勒 1978',
    title: '延迟选择：决定发生在过去之后',
    body: '让光子先通过仪器，再随机决定是否探测路径——结局与提前决定完全一致。类空间隔的实现（2007 单光子实验、2012 纠缠交换）排除了“光子偷看设置”的最后退路。',
    accent: 'violet',
  },
  {
    id: 'eraser',
    icon: Eraser,
    tag: '量子信息',
    title: '量子擦除：销毁信息，干涉归来',
    body: '路径信息本身就会摧毁干涉——哪怕获取信息时根本没碰到粒子（1982 思想实验，1999 年实现）。把信息擦除，干涉在符合计数中复活；但你无法借此向过去发送信号。',
    accent: 'cyan',
  },
  {
    id: 'participatory',
    icon: Users,
    tag: 'it from bit',
    title: '参与性宇宙：宇宙是自激回路',
    body: '惠勒的终极主张：宇宙通过观察—应答回路被“带入存在”——“我们参与创生的不仅是此时此地，还有遥远的过去。”QBism 与关系性诠释是它的现代后裔，黑洞熵是它的第一个定量化身。',
    accent: 'rose',
  },
  {
    id: 'relational',
    icon: Network,
    tag: '关系性诠释',
    title: '观察者是什么？——关系性诠释',
    body: '如果观察者不需要意识呢？罗韦利：量子态不描述孤立系统，只描述系统间的关系。任何系统都可以是任何其他系统的观察者——“观察”只是物理相互作用的别名。',
    accent: 'emerald',
  },
  {
    id: 'contextuality',
    icon: Shapes,
    tag: 'Kochen-Specker',
    title: '互文性：连“内在属性”都不存在',
    body: '贝尔定理排除定域实在论；KS 定理更进一步——单个粒子的属性也无法在一切语境下预先确定。半个世纪后，互文性成了量子计算的资源：量子加速有一部分正是这个逻辑矛盾的物理实现。',
    accent: 'amber',
  },
]

export default function Observer() {
  return (
    <section id="observer" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="06"
        kicker="观测者的物理学"
        title="观察不是偷看，而是参与"
        subtitle="延迟选择、量子擦除、参与性宇宙——“it from bit”最激进的部分不是哲学宣言，而是一系列可以精确完成的实验。"
        accent="rose"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {EXPERIMENTS.map((e, i) => (
          <ConceptCard
            key={e.id}
            id={e.id}
            icon={e.icon}
            tag={e.tag}
            title={e.title}
            body={e.body}
            accent={e.accent}
            delay={(i % 3) * 120}
          />
        ))}
      </div>
      <div className="mt-14">
        <ThoughtBox label="共同语法" title="三个实验，一条教训" accent="rose">
          <p>
            延迟选择与量子擦除表明：<strong className="text-slate-100">“测量之前发生了什么”在量子力学中不是事实</strong>，
            而是与提问方式绑定的问题；互文性表明这种相关性是任何“预先赋值”模型都无法消除的。
            惠勒把它们概括为一句话：“没有任何基本现象是一个现象，直到它是一个被记录（被观察）的现象。”
          </p>
          <p>
            而关系性诠释补上了最后一块：这里的“观察者”不需要意识、不需要人类——
            任何一次物理相互作用都是一次观察。被驱逐的不是实在，而是<strong className="text-slate-100">绝对视角的幻觉</strong>：
            物理学不再描述“世界本身如何”，而描述“世界对彼此如何应答”。
          </p>
        </ThoughtBox>
      </div>
      <div className="mt-14">
        <Takeaway accent="rose">
          宇宙允许你提出任何问题，但答案只在问题被问出的那一刻开始凝固——这不是意识的魔法，而是实在的语法。
        </Takeaway>
      </div>
    </section>
  )
}
