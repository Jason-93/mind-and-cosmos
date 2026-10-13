import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  r: number
  baseAlpha: number
  phase: number
  speed: number
}

/** 全屏星空画布：星星缓慢闪烁，鼠标移动时有轻微视差 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let stars: Star[] = []
    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: 0.5, y: 0.5 }

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(320, Math.floor((w * h) / 4200))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.3,
        baseAlpha: Math.random() * 0.55 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.9 + 0.3,
      }))
    }

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX / w
      mouse.y = e.clientY / h
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      const px = (mouse.x - 0.5) * 14
      const py = (mouse.y - 0.5) * 10
      for (const s of stars) {
        const tw = 0.5 + 0.5 * Math.sin(s.phase + (t / 1000) * s.speed)
        const alpha = s.baseAlpha * (0.35 + 0.65 * tw)
        ctx.beginPath()
        ctx.arc(s.x + px * s.r, s.y + py * s.r, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(226, 232, 255, ${alpha})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
