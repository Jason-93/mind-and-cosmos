import { Gauge, Waves, Box, Brain, Scale } from 'lucide-react'
import { SectionHeading, ConceptCard, ThoughtBox, Takeaway, type Accent } from '@/components/ui-bits'

const TOPICS: { id: string; icon: typeof Gauge; tag: string; title: string; body: string; accent: Accent }[] = [
  {
    icon: Gauge,
    tag: '经典决定论',
    id: 'laplace-demon',
    title: '拉普拉斯妖：如果未来可以被计算',
    body: '1814 年，拉普拉斯设想了一个“智者”：知道所有粒子的位置与速度，就能算出全部过去与未来。宇宙如一台上紧发条的钟表——若一切已被写好，“我选择”还算什么？这个思想实验把自由意志从神学问题变成了物理学问题。',
    accent: 'cyan',
  },
  {
    icon: Waves,
    tag: '混沌与随机',
    id: 'chaos-quantum',
    title: '混沌与量子：妖死了，但自由没有复活',
    body: '混沌让预测在实践上破产（巴西的蝴蝶可能掀起德州的龙卷风），量子力学让结果在原则上随机（“上帝不掷骰子”终究输给了贝尔不等式）。但最深的陷阱在于：算不出、算不准，都不等于“由我做主”——随机不是自由的替身。',
    accent: 'amber',
  },
  {
    icon: Box,
    tag: '相对论时空',
    id: 'block-universe',
    title: '块宇宙：你的未来已经“在那里”了吗',
    body: '狭义相对论取消了全宇宙统一的“现在”：对一个观察者来说属于你的未来，对另一个观察者可能已经“发生”。块宇宙图景中，过去、现在、未来同等实在——未来不是即将到来，而是已经在那里。这是宿命论最冷峻的物理版本。',
    accent: 'violet',
  },
  {
    icon: Brain,
    tag: '神经科学战场',
    id: 'free-will-neuro',
    title: '提前七秒被读出的决定',
    body: '2008 年海恩斯团队用 fMRI 发现：受试者“感到”决定按左键或右键之前最多七秒，脑区活动就已泄露答案。但 2019 年舒格尔等人重新解读：利贝特测到的“准备电位”也许只是神经噪声的积累。而利贝特本人的结论更微妙——自由也许不在“发起”，而在“否决”。',
    accent: 'emerald',
  },
  {
    icon: Scale,
    tag: '哲学出口',
    id: 'compatibilism',
    title: '相容论：自由不是脱离因果，而是出于自己',
    body: '现代哲学的主流答案：自由从来不是“脱离因果律”，而是“不受强迫、出于自己的理由行动”。法兰克福 1969 年的思想实验进一步表明：即使没有备选可能，责任照样成立。丹尼特则给出演化论的背书——自由是控制系统的能力，知因不是自由的敌人，而是自由的前提。',
    accent: 'rose',
  },
]

export default function Freewill() {
  return (
    <section id="freewill" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="04"
        kicker="自由意志与宿命"
        title="我的决定，究竟是谁做的？"
        subtitle="利贝特实验已经叩过门，但它只是这场争论的开场。从拉普拉斯妖到块宇宙，从脑电噪声到相容论——这是心智之问与物质之问正面相撞的战场。"
        accent="amber"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t, i) => (
          <ConceptCard key={t.id} id={t.id} icon={t.icon} tag={t.tag} title={t.title} body={t.body} accent={t.accent} delay={(i % 3) * 120} />
        ))}
      </div>
      <div className="mt-14">
        <ThoughtBox label="案例" title="“否决权”实验：自由的最后阵地" accent="amber">
          <p>
            在利贝特范式的变体中，受试者被要求在产生动作冲动后、执行前尽可能多地“叫停”。
            研究发现：有意识地否决一个冲动，并不伴随那道先于意识的准备电位——
            “叫停”似乎发生在意识的实时之内。这为相容论提供了一个神经科学接口：
            意识的作用也许不是无中生有地“发起”决定，而是实时审查、否决冲动——
            自由不是自由地做，而是自由地不做。
          </p>
          <p>
            这个案例同时提醒我们把问题分层：发起（谁启动）、否决（谁叫停）、理由（为什么）
            是三件不同的事。神经科学对前两者的测量越来越精细，而“理由”仍然稳稳地留在哲学的领地上。
          </p>
        </ThoughtBox>
      </div>
      <div className="mt-14">
        <Takeaway accent="amber">
          物理学杀死了全知的预言家，却没有签发“由我做主”的证书；而哲学提醒我们：自由也许本来就不需要那张证书。
        </Takeaway>
      </div>
    </section>
  )
}
