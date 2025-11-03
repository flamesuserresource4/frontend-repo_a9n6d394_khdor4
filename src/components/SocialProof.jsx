import { useEffect, useMemo, useState } from 'react'
import { ExternalLink, MessageSquare, Play, Sparkles } from 'lucide-react'

const proof = [
  {
    title: 'ChatGPT citations',
    badge: 'LLM Surface',
    color: 'from-violet-500/30 to-blue-500/30',
  },
  {
    title: 'Subreddit discussions',
    badge: 'Community',
    color: 'from-blue-500/30 to-cyan-500/30',
  },
  {
    title: 'Influencer mentions',
    badge: 'Social Proof',
    color: 'from-fuchsia-500/30 to-pink-500/30',
  },
  {
    title: 'YouTube podcast clips',
    badge: 'Video',
    color: 'from-rose-500/30 to-orange-500/30',
  },
]

const testimonials = [
  {
    name: 'Avery Chen',
    role: 'Head of Growth, Nimbly AI',
    quote:
      'We stopped chasing keywords and started earning citations. Pipeline up 62% in 90 days.',
    avatar: 'AC',
  },
  {
    name: 'Jordan Lee',
    role: 'Founder, VectorForge',
    quote:
      'Their funnel turns content into signals. We now get sourced by LLMs in our category.',
    avatar: 'JL',
  },
  {
    name: 'Sofia Alvarez',
    role: 'CMO, Circuit Labs',
    quote:
      'Clean, premium, and effective. The most modern approach to authority I’ve seen.',
    avatar: 'SA',
  },
]

export default function SocialProof() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Proof grid */}
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
              Case Signals / Proof
            </h2>
            <p className="mt-3 text-white/70 max-w-xl">
              Evidence from the surfaces that matter — not vanity dashboards.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {proof.map((p) => (
                <div
                  key={p.title}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-white/20 transition"
                >
                  <div className={`absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br ${p.color}`} />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white/80 backdrop-blur">
                      <Sparkles className="h-3.5 w-3.5" /> {p.badge}
                    </div>
                    <div className="mt-3 h-32 rounded-lg bg-gradient-to-br from-white/5 to-white/0 border border-white/10 grid place-items-center text-white/70">
                      <span className="text-sm">{p.title}</span>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm text-violet-200/90">
                      View example <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials + CTA */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-white/20 grid place-items-center text-white font-semibold">
                  {active.avatar}
                </div>
                <div>
                  <div className="text-white font-medium">{active.name}</div>
                  <div className="text-white/60 text-sm">{active.role}</div>
                </div>
              </div>
              <p className="mt-5 text-xl text-white/90 leading-relaxed">“{active.quote}”</p>
              <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                Rotating every few seconds
              </div>
            </div>

            {/* Pricing / CTA Footer */}
            <div id="cta" className="mt-8 rounded-2xl bg-slate-900/80 border border-white/10 p-6 md:p-8 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              <div className="pointer-events-none absolute -inset-24 opacity-40 blur-3xl" style={{
                background:
                  'radial-gradient(40% 40% at 70% 30%, rgba(168,85,247,0.35) 0%, transparent 70%), radial-gradient(30% 30% at 30% 70%, rgba(59,130,246,0.25) 0%, transparent 70%)'
              }} />
              <div className="relative z-10">
                <div className="text-white text-lg md:text-xl font-medium">
                  Work with Dashboard Daddy
                </div>
                <p className="mt-2 text-white/70 max-w-md">
                  Done-with-you and done-for-you Authority Funnels for modern, AI-powered discovery.
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_0_2px_rgba(255,255,255,0.6)] transition">
                    Get Pricing
                  </a>
                  <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-medium text-white/90 backdrop-blur-md hover:border-white/50 transition">
                    Book Strategy Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
