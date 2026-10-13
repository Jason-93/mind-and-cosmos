import { Brain, Atom, Sparkles, HelpCircle } from 'lucide-react'
import { SectionHeading, ConceptCard, ThoughtBox, type Accent } from '@/components/ui-bits'

const QUESTIONS: { icon: typeof Brain; title: string; body: string; accent: Accent }[] = [
  {
    icon: Brain,
    title: '心智之问',
    body: '颜色的"红"、疼痛的"痛"、深夜的"我"，这些主观体验（哲学家称之为"感质"）为什么会存在？一团约 1.4 千克的脑组织，凭什么能产生"有人在家"的感觉？',
    accent: 'violet',
  },
  {
    icon: Atom,
    title: '物质之问',
    body: '桌子、星星、我们的身体，归根结底由原子构成；而原子 99.9999999% 是空的，其余是些听名字就像咒语的粒子。物质真的是"实心"的吗？还是关系与场的编织物？',
    accent: 'cyan',
  },
  {
    icon: Sparkles,
    title: '起源之问',
    body: '宇宙大约 138 亿年前诞生于一场大爆炸。但"之前"发生了什么？"爆炸"之外又是什么？为什么"无"中会"有"——而且是一个有规则、可理解的"有"？',
    accent: 'rose',
  },
]

export default function Map() {
  return (
    <section id="map" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        index="00"
        kicker="导读"
        title="一张人类最深的问题地图"
        subtitle="所有玄想都始于同一次惊奇。先看清这三个问题，后面的每一段旅程都是在给它们拼图。"
        accent="indigo"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {QUESTIONS.map((q, i) => (
          <ConceptCard key={q.title} icon={q.icon} title={q.title} body={q.body} accent={q.accent} delay={i * 120} />
        ))}
      </div>
      <div className="mt-14">
        <ThoughtBox label="漫游须知" title="请带着三个问题往下读" accent="indigo">
          <p>
            哲学与宗教（第一章）记录了人类最初的答案；身心一元与二元论（第二章）是这些答案的逻辑骨架；
            神经科学（第三章）用实验检验"心智是否只是脑"；理论物理前沿（第四章）追问"物质与时空到底是什么"；
            宇宙学（第五章）直面起源本身。每一章结尾都有一句话小结——但真正的答案，留给你自己拼合。
          </p>
          <p className="flex items-start gap-2 text-slate-400">
            <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />
            提示：这不是一门宣称有标准答案的课，而是一场"问题比答案更重要"的展览。
          </p>
        </ThoughtBox>
      </div>
    </section>
  )
}
