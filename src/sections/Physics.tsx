import { Waves, CircuitBoard, Layers2, Frame, GitFork } from 'lucide-react'
import { SectionHeading, ConceptCard, ThoughtBox, Takeaway, type Accent } from '@/components/ui-bits'

const SCHOOLS: { id: string; icon: typeof Waves; tag: string; title: string; body: string; accent: Accent }[] = [
  {
    icon: Waves,
    tag: '量子基础',
    id: 'qm-foundations',
    title: '测量问题：四个学派同台',
    body: '量子力学百年来"算得极准、解释打架"。哥本哈根学派说：测量让可能性"坍缩"为现实；多世界解释（埃弗里特）说：没有坍缩，所有分支都真实发生，你只是其中一个"你"；隐变量理论（玻姆）说：粒子背后有看不见的"导波"在指挥；GRW 等坍缩模型则干脆修改方程，让宏观物体自发定域。2022 年诺贝尔物理学奖授予检验贝尔不等式的实验——定域实在论被排除，但竞争仍未终结。',
    accent: 'cyan',
  },
  {
    icon: CircuitBoard,
    tag: '量子引力 A',
    id: 'string',
    title: '弦论：把粒子换成"琴弦"',
    body: '弦论用一维振动的"弦"取代点粒子：不同的振动模式就是不同的粒子——电子、夸克、光子，本质上是同一根弦的不同音符。为了让方程自洽，时空需要 10 或 11 维，多余的维度蜷缩在微观尺度。它的引力子自然出现，并与全息原理、黑洞物理深度咬合；代价是暂时缺乏可直接检验的预言，且"景观"问题（可能的解多到天文数字）引发了是否存在科学性的激烈争论。',
    accent: 'violet',
  },
  {
    icon: GitFork,
    tag: '量子引力 B',
    id: 'lqg',
    title: '圈量子引力：把时空本身切碎',
    body: '如果不愿意外加维度，另一条路是"量化时空本身"。圈量子引力（LQG）用"自旋网络"描绘空间的最小单元——面积与体积都存在最小不可分割的"量子"，就像物质有原子。由此推出的惊人图景：时空在普朗克尺度下不是光滑的连续体，而是由离散的"原子"织成；大爆炸处或许不是奇点，而是上一个宇宙"大坍缩"后的反弹。',
    accent: 'emerald',
  },
  {
    icon: Frame,
    tag: '全息原理',
    id: 'holography',
    title: '宇宙可能是一张"全息图"',
    body: '黑洞热力学暗示：一个区域的最高信息量由它的边界面积决定，而非体积。这催生了全息原理：体（volume）内的物理，可以完全编码在其边界上。1997 年马尔达西纳提出的 AdS/CFT 对偶给出了严格的数学实例——一个高维引力宇宙，等价于边界上一个低维无引力量子理论。黑洞信息悖论由此获得迄今最有力的解决线索。',
    accent: 'rose',
  },
  {
    icon: Layers2,
    tag: '时空涌现',
    id: 'emergent-spacetime',
    title: '时空也许不是舞台，而是演员',
    body: '2010 年范拉姆斯东克等人的研究暗示：时空的几何本身可能从量子纠缠的织体中"涌现"——减少纠缠，时空甚至会裂解。若方向正确，爱因斯坦的时空就类似热力学定律：不是基本构件，而是深层实在的统计近似。最前沿的口号正在反转：过去问"量子力学在时空中如何演化"，现在问"时空如何从量子结构中生成"。',
    accent: 'amber',
  },
]

export default function Physics() {
  return (
    <section id="physics" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="04"
        kicker="理论物理前沿学派"
        title="物质、时空与量子：基础正在重写"
        subtitle="广义相对论与量子力学是人类最成功的两个理论，却在彼此最核心的地带（黑洞、大爆炸）直接冲突。以下是试图缝合裂缝的几条主战线。"
        accent="cyan"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SCHOOLS.map((s, i) => (
          <ConceptCard key={s.title} id={s.id} icon={s.icon} tag={s.tag} title={s.title} body={s.body} accent={s.accent} delay={(i % 3) * 120} />
        ))}
      </div>
      <div className="mt-14">
        <ThoughtBox label="为什么重要" title="基础物理学正在“自反”" accent="cyan">
          <p>
            注意这些学派的一个共同转向：它们处理的对象不再是"什么粒子"，
            而是"什么是现实的最底层"。时空是否连续？观察者是否特殊？"定律"是否在宇宙各处与各处时代相同？
          </p>
          <p>
            这与第一、二章的古老问题产生了奇妙的呼应——当物理学说"时空可能涌现"，它实际上在说：
            我们直觉中最坚实的"容器"也许和柏拉图的影子一样，是更深实在的投影。
            科学与哲学在最前沿重新坐到了同一张桌子前。
          </p>
        </ThoughtBox>
      </div>
      <div className="mt-14">
        <Takeaway accent="cyan">
          前沿物理没有统一的答案，但它已经一致地拆掉了几个"常识支柱"：时空不一定是基本的，现实未必是定域的，确定性可能只是宏观错觉。
        </Takeaway>
      </div>
    </section>
  )
}
