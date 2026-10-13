import { ChevronDown } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { scrollToId } from '@/lib/scroll'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* 光晕背景 */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-[30%] top-2/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <Reveal>
        <p className="mb-6 text-sm font-medium tracking-[0.5em] text-violet-300/90">
          意识 · 物质 · 存在
        </p>
      </Reveal>
      <Reveal delay={120}>
        <h1 className="font-serif-sc text-5xl font-black leading-tight md:text-7xl">
          <span className="text-gradient">心物宇宙</span>
        </h1>
      </Reveal>
      <Reveal delay={240}>
        <p className="font-serif-sc mt-6 text-xl font-semibold text-slate-200 md:text-2xl">
          从「我是谁」到「宇宙从何而来」
        </p>
      </Reveal>
      <Reveal delay={360}>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          人类几千年来一直在追问三个问题：意识是什么？世界的本质是什么？
          这一切又从何而来？本页是一场跨越哲学、宗教、神经科学、
          理论物理与宇宙学的科普漫游——不讲公式，只讲思想。
        </p>
      </Reveal>
      <Reveal delay={480}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToId('map')}
            className="rounded-full bg-violet-500/90 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
          >
            开始漫游
          </button>
          <button
            onClick={() => scrollToId('finale')}
            className="rounded-full border border-white/15 px-7 py-3 text-sm text-slate-300 transition hover:border-white/35 hover:text-white"
          >
            直接看结论
          </button>
        </div>
      </Reveal>
      <Reveal delay={650} className="absolute bottom-10">
        <ChevronDown className="animate-floaty h-6 w-6 text-slate-500" />
      </Reveal>
    </section>
  )
}
