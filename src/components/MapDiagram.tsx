import { scrollToId } from '@/lib/scroll'
import type { Question } from '@/data/types'
import { QUESTION_META } from '@/lib/questions'

const QUESTION_NODES: { q: Question; x: number; y: number }[] = [
  { q: 'mind', x: 450, y: 110 },
  { q: 'matter', x: 260, y: 350 },
  { q: 'origin', x: 640, y: 350 },
]

const CHIPS: { anchor: string; num: string; label: string; x: number; y: number }[] = [
  { anchor: 'philosophy', num: '01', label: '哲学', x: 306, y: 80 },
  { anchor: 'mindbody', num: '02', label: '身心', x: 600, y: 81 },
  { anchor: 'neuro', num: '03', label: '神经', x: 102, y: 313 },
  { anchor: 'physics', num: '04', label: '物理前沿', x: 798, y: 313 },
  { anchor: 'identity', num: '05', label: '量子身份', x: 103, y: 187 },
  { anchor: 'observer', num: '06', label: '观测者', x: 797, y: 187 },
  { anchor: 'cosmos', num: '07', label: '宇宙', x: 450, y: 435 },
  { anchor: 'finale', num: '08', label: '结语', x: 450, y: 65 },
]

const CHIP_W = 104
const CHIP_H = 40

const Q_COLORS: Record<Question, string> = {
  mind: '#a78bfa',
  matter: '#22d3ee',
  origin: '#fb7185',
}

export default function MapDiagram() {
  return (
    <div className="mt-16">
      <h3 className="font-serif-sc mb-2 text-center text-xl font-bold text-slate-100">章节地图</h3>
      <p className="mb-6 text-center text-xs text-slate-500">点击任意章节，跳转到对应部分</p>

      {/* 桌面端：SVG 地图 */}
      <div className="glass hidden rounded-3xl p-6 md:block">
        <svg viewBox="0 0 900 500" className="mx-auto w-full max-w-3xl select-none">
          {/* 三问之间的连线（三角） */}
          {QUESTION_NODES.map((a, i) => {
            const b = QUESTION_NODES[(i + 1) % QUESTION_NODES.length]
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(148,163,184,0.25)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            )
          })}

          {/* 章节芯片到中心的连线 */}
          {CHIPS.map((c) => (
            <line
              key={c.anchor}
              x1={c.x}
              y1={c.y}
              x2={450}
              y2={250}
              stroke="rgba(148,163,184,0.12)"
              strokeWidth="1"
            />
          ))}

          {/* 章节芯片 */}
          {CHIPS.map((c) => (
            <g
              key={c.anchor}
              onClick={() => scrollToId(c.anchor)}
              className="cursor-pointer"
              role="button"
              aria-label={`跳转到${c.label}`}
            >
              <rect
                x={c.x - CHIP_W / 2}
                y={c.y - CHIP_H / 2}
                width={CHIP_W}
                height={CHIP_H}
                rx={20}
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.18)"
                className="transition-all hover:fill-[rgba(129,140,248,0.15)] hover:stroke-[rgba(129,140,248,0.6)]"
              />
              <text
                x={c.x - CHIP_W / 2 + 16}
                y={c.y + 4}
                textAnchor="middle"
                fill="#818cf8"
                fontSize="11"
                fontWeight="700"
              >
                {c.num}
              </text>
              <text x={c.x + 10} y={c.y + 4} textAnchor="middle" fill="#cbd5e1" fontSize="13">
                {c.label}
              </text>
            </g>
          ))}

          {/* 中心：三问交汇 */}
          <circle cx={450} cy={250} r={34} fill="rgba(99,102,241,0.12)" stroke="rgba(129,140,248,0.5)" strokeWidth="1.2" />
          <text x={450} y={246} textAnchor="middle" fill="#c7d2fe" fontSize="12" fontWeight="600">
            三问
          </text>
          <text x={450} y={262} textAnchor="middle" fill="#c7d2fe" fontSize="12" fontWeight="600">
            交汇
          </text>

          {/* 三问节点 */}
          {QUESTION_NODES.map((n) => (
            <g key={n.q}>
              <circle cx={n.x} cy={n.y} r={26} fill={`${Q_COLORS[n.q]}22`} stroke={Q_COLORS[n.q]} strokeWidth="1.4" />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fill={Q_COLORS[n.q]} fontSize="13" fontWeight="700">
                {QUESTION_META[n.q].short}
              </text>
            </g>
          ))}
        </svg>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-slate-600">
          三个问题构成所有探索的骨架；八个章节是围绕它们展开的三条路径。
        </p>
      </div>

      {/* 移动端：纯链接列表 */}
      <div className="grid gap-2 md:hidden">
        {CHIPS.map((c) => (
          <button
            key={c.anchor}
            onClick={() => scrollToId(c.anchor)}
            className="glass flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition hover:text-white"
          >
            <span>
              <span className="mr-2 text-xs font-bold text-indigo-300">{c.num}</span>
              {c.label}
            </span>
            <span className="text-xs text-slate-600">↓</span>
          </button>
        ))}
      </div>
    </div>
  )
}
