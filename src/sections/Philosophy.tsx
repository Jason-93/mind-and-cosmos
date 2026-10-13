import { Landmark, Flower2, Moon, Church, Scale } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { SectionHeading, ConceptCard, ThoughtBox, Takeaway, type Accent } from '@/components/ui-bits'

const TRADITIONS: { icon: typeof Landmark; tag: string; title: string; body: string; accent: Accent }[] = [
  {
    icon: Landmark,
    tag: '古希腊',
    title: '逻各斯：用理性追问本原',
    body: '从泰勒斯说"万物源于水"开始，希腊人把神话问题改写成了可辩论的问题。柏拉图认为可见世界只是"理念世界"的投影；亚里士多德则回到具体事物，寻找形式与质料；斯多葛学派说，理解自然的秩序就是自由。西方哲学的整个传统，可以说就是这条理性的延长线。',
    accent: 'amber',
  },
  {
    icon: Flower2,
    tag: '印度传统',
    title: '梵与空：向内观看的意识之学',
    body: '吠檀多哲学问："世界背后那个不变者是什么？"答案是"梵"——而个体灵魂（阿特曼）与梵本是一体。佛教走了另一条路：万物依缘而生，"自我"只是五蕴的暂时聚合，并没有一个固定的"我"。印度传统把主战场放在意识内部——这恰恰也是当代意识科学的战场。',
    accent: 'rose',
  },
  {
    icon: Moon,
    tag: '中国思想',
    title: '道与天人合一：不二的直觉',
    body: '老子说"道生一，一生二，二生三，三生万物"，道的特点恰恰是"说不清"。庄子梦见自己变成蝴蝶，醒来后问：是庄周梦蝶，还是蝶梦庄周？这个两千年前的"思想实验"，预演了后来身心关系争论的核心困难——体验的"主观视角"无法被外部观察取代。',
    accent: 'emerald',
  },
  {
    icon: Church,
    tag: '亚伯拉罕宗教',
    title: '创造与逻各斯的合流',
    body: '犹太教、基督教、伊斯兰教共享"世界被造"的图景：存在不是必然的，而是被给予的。早期基督教思想家奥古斯丁把柏拉图接进信仰，托马斯·阿奎那又用亚里士多德论证上帝。值得一提的是，历史上的大学、历法与大量科学事业，正是诞生在这种"世界有秩序、值得研究"的信念里。',
    accent: 'indigo',
  },
  {
    icon: Scale,
    tag: '共同结构',
    title: '殊途同归的三个母题',
    body: '把各大传统放在一起看，会发现三个反复出现的母题：一、可见世界背后有更深的一层实在（理念、梵、道、天国）；二、人与那层实在可以建立关系（修行、信仰、求知）；三、死亡与意义问题必须被正面回答。宗教给出意义与秩序，哲学则追问这些说法能否经得起论证。',
    accent: 'violet',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="01"
        kicker="哲学与宗教"
        title="在科学之前，人类如何回答"
        subtitle="公元前 800 年至前 200 年间，希腊、印度、中国几乎同时出现了对“终极问题”的系统思考——德国哲学家雅斯贝尔斯称之为“轴心时代”。"
        accent="amber"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TRADITIONS.map((t, i) => (
          <ConceptCard key={t.title} icon={t.icon} tag={t.tag} title={t.title} body={t.body} accent={t.accent} delay={(i % 3) * 120} />
        ))}
        <Reveal className="md:col-span-2 lg:col-span-1">
          <div className="glass flex h-full flex-col justify-center rounded-2xl p-6">
            <p className="font-serif-sc text-2xl font-bold leading-relaxed text-amber-200/90">
              "惊奇是哲学家的标志，
              <br />
              也是哲学研究的起点。"
            </p>
            <p className="mt-4 text-sm text-slate-400">—— 亚里士多德</p>
          </div>
        </Reveal>
      </div>
      <div className="mt-14">
        <ThoughtBox label="思想实验" title="柏拉图的洞穴：我们看到的是真实吗？" accent="amber">
          <p>
            柏拉图设想：一群人自幼被锁在洞穴里，只能看到墙上的影子，便以为影子就是全部真实。
            如果有一天，其中一人被松绑走出洞穴，见到太阳下的真实世界——他会发现，我们日常深信不疑的"现实"，
            可能只是更高层实在投下的影子。
          </p>
          <p>
            这个比喻在今天依然锋利：我们看到的"颜色"只是电磁波的一段，听到的"声音"只是空气振动。
            感官给我们的是经过大脑深度加工的"用户界面"，不是世界本身。
            神经科学第三章会告诉你，这一点已经不只是哲学猜测。
          </p>
        </ThoughtBox>
      </div>
      <div className="mt-14">
        <Takeaway accent="amber">
          哲学与宗教不是科学的"前科学遗迹"，而是把问题本身打磨成形的地方——科学接过的是它们递来的火把。
        </Takeaway>
      </div>
    </section>
  )
}
