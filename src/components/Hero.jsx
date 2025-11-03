import Spline from '@splinetool/react-spline'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_40%,rgba(124,58,237,0.25),transparent),radial-gradient(40%_40%_at_20%_20%,rgba(14,165,233,0.25),transparent)]" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white/80 backdrop-blur-md shadow-sm">
            <Sparkles className="h-4 w-4 text-violet-300" />
            The Authority Funnel™ by Dashboard Daddy
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            SEO Has Changed. Your Strategy Needs to Change With It.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
            The Authority Funnel™ gets your brand cited & surfaced across LLMs, Reddit Communities, Industry Wikis, YouTube Channels — and every influential search surface.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#how" className="group inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-6 py-3 font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.6)] transition">
              See How It Works
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white/90 backdrop-blur-md hover:border-white/50 transition">
              Book Strategy Call
            </a>
          </div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[420px] sm:h-[520px] md:h-[600px] lg:h-[640px] rounded-2xl overflow-hidden">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* glow overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="pointer-events-none absolute -inset-10 blur-3xl opacity-40" style={{
            background:
              'radial-gradient(40% 40% at 70% 30%, rgba(168,85,247,0.35) 0%, transparent 70%), radial-gradient(30% 30% at 30% 70%, rgba(59,130,246,0.25) 0%, transparent 70%)'
          }} />
        </div>
      </div>

      {/* subtle floating orbs */}
      <div className="pointer-events-none absolute left-1/2 top-12 h-24 w-24 -translate-x-1/2 rounded-full bg-violet-500/40 blur-3xl" />
      <div className="pointer-events-none absolute right-12 bottom-12 h-20 w-20 rounded-full bg-blue-500/30 blur-3xl" />
    </section>
  )
}
