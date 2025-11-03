import { AlertTriangle, Bot, ShieldCheck, Share2 } from 'lucide-react'

const items = [
  {
    icon: AlertTriangle,
    title: "Keyword chasing is noisy",
    text: "Everyone targets the same terms. It’s a race to the bottom with thinner content and lower trust.",
  },
  {
    icon: Bot,
    title: "Search is now multi-surface",
    text: "LLMs, forums, wikis, podcasts, newsletters — discovery is fragmented and algorithmic.",
  },
  {
    icon: Share2,
    title: "Links alone don't move the needle",
    text: "Signals, citations, and real distribution drive authority in 2025 — not just backlinks.",
  },
  {
    icon: ShieldCheck,
    title: "Brands need defensible authority",
    text: "Be the source LLMs cite and communities trust. That’s an Authority Funnel, not an SEO checklist.",
  },
]

export default function Problems() {
  return (
    <section id="broken" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
          What’s Broken About Current SEO
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Old playbooks optimize pages. New playbooks engineer signals. Here’s why the old way stalls.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{
                background:
                  'radial-gradient(40% 40% at 10% 0%, rgba(168,85,247,0.25), transparent 60%)'
              }} />
              <div className="relative z-10 flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-200 border border-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
