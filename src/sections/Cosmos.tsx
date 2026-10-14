import { Rocket, Wind, Recycle, Compass, Percent, Leaf, Satellite } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { SectionHeading, ConceptCard, ThoughtBox, Takeaway, type Accent } from '@/components/ui-bits'

const STORIES: { id: string; icon: typeof Rocket; tag: string; title: string; body: string; accent: Accent }[] = [
  {
    icon: Rocket,
    tag: '主流图景',
    id: 'bigbang',
    title: '大爆炸：一场没有"中心"的膨胀',
    body: '1929 年哈勃发现星系在彼此远离——不是飞向某个远方，而是空间本身在均匀膨胀，就像葡萄干面包发酵时彼此远离的葡萄干。追溯回去，宇宙曾处于一个极端高温高密的初始状态。1965 年发现的宇宙微波背景辐射（CMB）是它的"婴儿照"：一场 138 亿年前的光，至今仍在我们的收音机上沙沙作响。',
    accent: 'rose',
  },
  {
    icon: Wind,
    tag: '补丁与深化',
    id: 'inflation',
    title: '暴胀：把种子吹成星系',
    body: '标准大爆炸理论有几个麻烦（如"视界问题"：宇宙各处温度为何如此均匀？）。暴胀理论说：宇宙在最初的极瞬间以远超光速的节奏指数膨胀——这里的"超光速"不违反相对论，因为膨胀的是空间本身。这一瞬的量子涨落被放大到天文尺度，成为后来星系、甚至你我身体原子的分布"种子"。2010 年代的 BICEP 与普朗克卫星数据支持了这一图景的关键一环。',
    accent: 'cyan',
  },
  {
    icon: Percent,
    tag: '成分之谜',
    id: 'dark',
    title: '95% 是"暗"的：我们只是一层薄纱',
    body: '通过对超新星、CMB 与大尺度结构的测量，宇宙学得出一个近乎荒诞的结论：普通物质（你我、恒星、行星）只占约 5%；约 27% 是不可见的"暗物质"，它产生引力却不发光；约 68% 是更离奇的"暗能量"，推动宇宙加速膨胀。它们的本质完全未知——宇宙学标准模型在极其成功的同时，坦承自己描述了绝大多数未解成分。',
    accent: 'amber',
  },
  {
    id: 'abiogenesis',
    icon: Leaf,
    tag: '生命起源',
    title: '生命的起源：从化学到生物学的断裂带',
    body: '元素来源已基本查明，但从原子到第一个细胞的跨越至今无一条被证实的路径。RNA 世界、代谢优先、膜优先三条路线各困于各自的“鸡生蛋”——而它决定了我们在宇宙中是否孤独。',
    accent: 'emerald',
  },
  {
    id: 'fermi',
    icon: Satellite,
    tag: '费米悖论',
    title: '费米悖论：宇宙为何如此寂静',
    body: '1950 年费米一句“他们在哪”悬置至今：行星比比皆是，文明却无声无息。一百个候选解答——大过滤器、自我毁灭、内卷、动物园——每一个都指向人类不同的命运。',
    accent: 'indigo',
  },
  {
    icon: Recycle,
    tag: '替代图景',
    id: 'cyclic',
    title: '循环宇宙：没有开始，也没有结束？',
    body: '如果"大爆炸之前"这个问题让你不舒服，你不是一个人。彭罗斯的"共形循环宇宙学"（CCC）提出：宇宙经历无限多轮，遥远的未来与新的起点在数学上可以无缝焊接。另一类"大反弹"模型（与圈量子引力天然契合）认为，到达极致密度时引力会反转排斥，宇宙从坍缩中"反弹"重生。它们共同废除了"时间起点"这个概念。',
    accent: 'emerald',
  },
  {
    icon: Compass,
    tag: '终极之问',
    id: 'why-anything',
    title: '"无"中何以生"有"？',
    body: '霍金与哈特尔的无边界提案尝试取消"之前"这个问题：就像问"地球北极以北是什么"没有意义，时间在大爆炸处光滑闭合，根本不存在"之前"。另一思路来自量子场论："真空"并不空——它充满沸腾的量子涨落，一个极小区域的能量借据可以"凭空"扩张成整个宇宙。这些方案在数学上精巧，却共同触到一个哲学深水区："为什么存在任何东西，而不是一无所有？"——莱布尼茨 300 年前的提问，至今悬置。',
    accent: 'violet',
  },
]

export default function Cosmos() {
  return (
    <section id="cosmos" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="07"
        kicker="宇宙起源的解释"
        title="138 亿年前的第一秒"
        subtitle="宇宙学大概是人类最“年轻也最古老”的学科：它用几十年的精密仪器，回答创世神话问了几千年的问题。"
        accent="rose"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {STORIES.map((s, i) => (
          <ConceptCard key={s.title} id={s.id} icon={s.icon} tag={s.tag} title={s.title} body={s.body} accent={s.accent} delay={(i % 3) * 120} />
        ))}
        <Reveal className="md:col-span-2 lg:col-span-1">
          <div className="glass flex h-full flex-col justify-center rounded-2xl p-6">
            <p className="text-sm leading-relaxed text-slate-400">宇宙年龄书签</p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
              <li>· 138 亿年前：大爆炸 / 暴胀</li>
              <li>· 38 万年后：第一批原子诞生，CMB 释放</li>
              <li>· 约 2 亿年：第一代恒星点亮</li>
              <li>· 约 46 亿年前：太阳系形成</li>
              <li>· 你在这里：宇宙自我认识的时刻</li>
            </ul>
          </div>
        </Reveal>
      </div>
      <div className="mt-14">
        <ThoughtBox label="哲学余震" title="精细调节：巧合，还是线索？" accent="rose">
          <p>
            宇宙的几个基本常数（如精细结构常数、宇宙学常数）若略有不同，
            原子无法形成、恒星不会燃烧、生命无从谈起。这引出三个候选答案：
            人择原理（我们在这里，因为不在这里的人无从发问）、多重宇宙（无数个宇宙各取常数，我们只是中了彩票的那个），
            或第三种可能——常数背后还有更深的理论。
          </p>
          <p>
            值得留意的是：三个答案分别对应着"观察者视角""统计视角"与"统一理论视角"。
            起源问题的尽头，竟然又绕回了观察者——绕回了第一章庄子的蝴蝶与第三章的实验室。
          </p>
        </ThoughtBox>
      </div>
      <div className="mt-14">
        <Takeaway accent="rose">
          大爆炸理论精确地描述了宇宙如何从极热极密演化至今，但"最初那一刻发生了什么、为什么有东西存在"，仍然是科学与哲学共享的开放问题。
        </Takeaway>
      </div>
    </section>
  )
}
