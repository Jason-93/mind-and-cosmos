import { Split, Box, Eye, Infinity as InfinityIcon, Layers } from 'lucide-react'
import { SectionHeading, ConceptCard, ThoughtBox, Takeaway, type Accent } from '@/components/ui-bits'

const POSITIONS: { icon: typeof Split; tag: string; title: string; body: string; accent: Accent }[] = [
  {
    icon: Split,
    tag: '二元论',
    title: '笛卡尔：心与物是两种实体',
    body: '1640 年代，笛卡尔用极端怀疑逼近结论："我思故我在"——那个在怀疑的"我"必然存在，而"我"的本质只是思考，不占空间。于是世界被切成两半：会思考的心灵（res cogitans）与占有广延的物质（res extensa）。但新问题随之而来：如果心不占空间，它如何推动占空间的脑？这就是著名的"交互难题"，松果体是他当年认真的候选答案。',
    accent: 'violet',
  },
  {
    icon: Box,
    tag: '一元论 · 唯物',
    title: '物理主义：只有物质，没有别的',
    body: '现代科学图景下最主流的一元论：宇宙里只有物理过程，心智只是大脑这台生物计算机的运行。意识不是额外的东西，而是信息处理达到一定复杂度时的"呈现方式"。它最大的优势是与神经科学的发现无缝衔接；最大的负担是解释"为什么脑活动会‘感觉起来像什么’"。',
    accent: 'cyan',
  },
  {
    icon: Eye,
    tag: '一元论 · 唯心',
    title: '唯心论：存在即被感知',
    body: '贝克莱把问题整个倒了过来：我们从未接触过"物质本身"，直接接触的一直只有感知。既然如此，与其假设一个永远接触不到的底层物质，不如说"存在即被感知"——是心智在最底层，物质是它的表象。当代的"模拟假说""宇宙即信息"等猜想，与这条思路意外遥相呼应。',
    accent: 'emerald',
  },
  {
    icon: InfinityIcon,
    tag: '一元论 · 中性',
    title: '斯宾诺莎：身心是同一实体的两面',
    body: '斯宾诺莎的解决方案更大胆：心与物不是两个东西，而是唯一实体（他称之为"神或自然"）的两种属性——像同一枚硬币的两面。身体发生什么，心智就"平行地"呈现什么，二者不需要互相推动。这套"两面论"今天以"中立一元论"的名义复活，试图绕过交互难题。',
    accent: 'rose',
  },
  {
    icon: Layers,
    tag: '当代变体',
    title: '泛心论：意识是物质的基本属性',
    body: '物理学描述物质时会描述质量、电荷、自旋，却从不描述"感觉"。泛心论说：也许我们从一开始就漏掉了一种基本属性——极微的意识。就像质量是基本粒子的属性一样，体验也可能在最底层就存在，复杂系统的意识只是它的组合与放大。这听起来离奇，但一些顶尖哲学家与神经科学家（如伽利略计划的发起者）认为，物理主义解释不了体验，泛心论至少诚实面对了问题。',
    accent: 'amber',
  },
]

export default function MindBody() {
  return (
    <section id="mindbody" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="02"
        kicker="身心一元论与二元论"
        title="一个世界，还是两个世界？"
        subtitle="你脑中的神经元放电与“你感到痛”，是同一件事的两种说法，还是两件不同的事？这里是人类思想史上最持久的拉锯战。"
        accent="violet"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSITIONS.map((p, i) => (
          <ConceptCard key={p.title} icon={p.icon} tag={p.tag} title={p.title} body={p.body} accent={p.accent} delay={(i % 3) * 120} />
        ))}
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <ThoughtBox label="核心区分" title="简单问题与困难问题" accent="violet">
          <p>
            哲学家查尔默斯把意识研究一分为二：<strong className="text-slate-100">"简单问题"</strong>是解释大脑
            如何辨别颜色、控制注意、报告体验——这些神经科学正在稳步攻克；
            <strong className="text-slate-100">"困难问题"</strong>是：为什么这一切会伴随"主观体验"本身？
            为什么红光不只是被分类为 700 纳米，而是"看起来红"？
          </p>
          <p>
            批评者认为"困难问题"是把语言表达误当成了自然现象；支持者则认为，否认体验的特殊性，
            恰恰说明我们还没理解问题在哪。这场争论本身，就是当代身心问题的现场。
          </p>
        </ThoughtBox>
        <ThoughtBox label="思想实验" title="玛丽的房间与哲学僵尸" accent="rose">
          <p>
            <strong className="text-slate-100">玛丽的房间</strong>：一位色彩科学家知道关于红色的一切物理知识，
            但她一生住在黑白房间。当她第一次看见红色时，她学到新东西了吗？如果学到了，
            说明体验包含物理知识之外的内容——物理主义似乎漏掉了什么。
          </p>
          <p>
            <strong className="text-slate-100">哲学僵尸</strong>：想象一个与你在所有物理层面完全相同、
            行为毫无差别，但"内在一片黑暗"（没有任何体验）的人可能存在吗？
            泛心论者说这种设想自相矛盾，物理主义者说它只是想象力开的空头支票。
          </p>
        </ThoughtBox>
      </div>
      <div className="mt-14">
        <Takeaway accent="violet">
          一元论说"根本上只有一个东西"，二元论说"心与物无法互相还原"——双方的僵局，恰恰标出了人类知识地图上最大的一块空白。
        </Takeaway>
      </div>
    </section>
  )
}
