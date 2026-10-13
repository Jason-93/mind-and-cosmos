import { Scissors, Timer, RadioTower, Sigma, Radar } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { SectionHeading, ConceptCard, ThoughtBox, Takeaway, type Accent } from '@/components/ui-bits'

const FINDINGS: { id: string; icon: typeof Scissors; tag: string; title: string; body: string; accent: Accent }[] = [
  {
    icon: Scissors,
    tag: '经典实验',
    id: 'split-brain',
    title: '裂脑实验：一个脑，两个"我"？',
    body: '为治疗癫痫而被切断胼胝体的患者，左右脑失去沟通。实验发现：让右脑（控制左眼）看到一把勺子，患者能正确挑出勺子，却坚持说"我不知道为什么选它"——左脑的语言中枢会现场编造理由。这说明"自我叙事"可以是一种事后补全，而体验的分裂真实地发生在同一个头颅里。斯佩里因此获 1981 年诺贝尔奖。',
    accent: 'emerald',
  },
  {
    icon: Timer,
    tag: '自由意志之争',
    id: 'libet',
    title: '利贝特实验：决定先于"决定感"',
    body: '1980 年代，本杰明·利贝特发现：当人"决定"动手腕时，脑内准备电位比主观决意感早约 300~500 毫秒出现。后来更精细的实验把这一"前兆信号"提前到数秒。一种解读是：自由意志是幻觉，脑先行动，"我"只是观后感。另一种解读则认为，把复杂的"自由"压缩到手腕翻转这一个动作，本来就在测量错误的东西——"否决权"可能仍握在有意识的自我手中。',
    accent: 'cyan',
  },
  {
    icon: RadioTower,
    tag: '理论之一',
    id: 'gwt',
    title: '全局工作空间：意识像"发布会"',
    body: '巴尔斯与迪昂提出的全局工作空间理论（GWT）认为：脑中有大量并行运算在无意识地进行，只有少数信息会被"广播"到全脑，成为可报告、可使用的意识内容。2023 年，该理论与对手 IIT 获得"对抗性合作"研究项目的资助——双方约定用同一个实验、同一批数据检验彼此，这是科学自我纠错的漂亮示范。',
    accent: 'violet',
  },
  {
    icon: Sigma,
    tag: '理论之二',
    id: 'iit',
    title: '整合信息论：意识 = Φ',
    body: '托诺尼的整合信息论（IIT）给出了一个惊人的主张：意识不是"脑的输入输出"，而是系统内部因果结构本身的内在属性，可用量 Φ 粗略衡量——信息整合度越高，体验越丰富。它甚至推出反直觉结论：小脑神经元极多但结构松散，Φ 很低；而一些无机系统若整合结构足够，原则上也可能有微弱体验。这令它充满争议，也令它无法被忽视。',
    accent: 'rose',
  },
  {
    icon: Radar,
    tag: '理论之三',
    id: 'predictive',
    title: '预测处理：大脑是台"猜测机器"',
    body: '自由能原理与预测加工理论认为：大脑从不被动接收世界，而是持续生成关于世界的预测，再用感官误差修正自己。你"看到"的，更多是脑的期望，而非视网膜的输入。这条思路统一解释了大量现象——从幻觉、错觉到注意与动作——还把"自我意识"解释成大脑对自身预测活动的建模。',
    accent: 'amber',
  },
]

export default function Neuroscience() {
  return (
    <section id="neuro" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="03"
        kicker="神经科学素材"
        title="当实验室接手“灵魂”问题"
        subtitle="意识的“困难问题”尚未解决，但意识与脑之间的关联早已可以被测量。以下是几条最重要的证据与理论线索。"
        accent="emerald"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FINDINGS.map((f, i) => (
          <ConceptCard key={f.title} id={f.id} icon={f.icon} tag={f.tag} title={f.title} body={f.body} accent={f.accent} delay={(i % 3) * 120} />
        ))}
        <Reveal className="md:col-span-2 lg:col-span-1">
          <div className="glass flex h-full flex-col justify-center rounded-2xl p-6">
            <p className="text-sm leading-relaxed text-slate-400">
              关于脑的三个冷知识
            </p>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
              <li>· 你的脑约 860 亿个神经元，突触连接数以万亿计，而整体功耗只相当于一盏 20 瓦的灯泡。</li>
              <li>· 麻醉剂可以让体验整体"关闭"又可靠地"重启"——这强烈暗示体验依赖脑的物理状态。</li>
              <li>· 盲视患者声称"看不见"，却能准确"猜中"视野盲区里的物体——体验与信息处理可以分离。</li>
            </ul>
          </div>
        </Reveal>
      </div>
      <div className="mt-14">
        <ThoughtBox label="案例" title="麻醉、睡眠与“体验开关”" accent="emerald">
          <p>
            全身麻醉不是简单的"睡着"：在药物作用下，大脑各区域之间的长距离通信被显著削弱，
            意识体验随之消失；药效退去，通信恢复，"有人在家"的感觉重新点亮。
            深睡眠的做梦阶段（REM）则展示了另一面：大脑活动与清醒时几乎同样活跃，
            体验却完全是内在的、自生成的。清醒梦研究甚至发现，做梦者可以按约定信号与实验者沟通——
            体验的内容，第一次被"实时读取"。
          </p>
          <p>
            这些素材共同指向一个谨慎的结论：我们还不知道意识"为何"存在，
            但我们越来越清楚它"何时、何处、依赖什么"存在——而这正是二元论最难自圆其说的地方。
          </p>
        </ThoughtBox>
      </div>
      <div className="mt-14">
        <Takeaway accent="emerald">
          神经科学尚未解释体验为何存在，但它已经证明：体验被脑的物理状态精确地开关、调制与塑造。
        </Takeaway>
      </div>
    </section>
  )
}
