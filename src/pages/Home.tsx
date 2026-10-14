import Starfield from '@/components/Starfield'
import Nav from '@/components/Nav'
import Hero from '@/sections/Hero'
import Map from '@/sections/Map'
import Philosophy from '@/sections/Philosophy'
import MindBody from '@/sections/MindBody'
import Neuroscience from '@/sections/Neuroscience'
import Physics from '@/sections/Physics'
import Identity from '@/sections/Identity'
import Cosmos from '@/sections/Cosmos'
import Finale from '@/sections/Finale'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#060a16]">
      <Starfield />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Map />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Philosophy />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <MindBody />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Neuroscience />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Physics />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Identity />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Cosmos />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Finale />
        <footer className="border-t border-white/10 py-10 text-center text-xs text-slate-500">
          心物宇宙 · 本页内容为面向公众的科普介绍，学派观点均以公开学术资料为准
        </footer>
      </main>
    </div>
  )
}
