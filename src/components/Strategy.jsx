import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    key: 'listen',
    title: 'Listen',
    text: 'Map questions, intent clusters, and influence nodes across LLMs + communities.',
  },
  {
    key: 'make',
    title: 'Make',
    text: 'Produce source-of-truth assets built to be cited: guides, data, tools, research.',
  },
  {
    key: 'distribute',
    title: 'Distribute',
    text: 'Seed into the right surfaces: subreddit AMAs, wiki PRs, guest segments, microclips.',
  },
  {
    key: 'engage',
    title: 'Engage',
    text: 'Close the loop with replies, updates, and new angles that compound authority.',
  },
]

export default function Strategy() {
  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
            The New Strategy — A Signal-First Funnel
          </h2>
          <p className="mt-3 text-white/70">
            A four-stage system engineered for citations, distribution, and community trust.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            {/* connecting line */}
            <motion.div
              className="hidden md:block absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-blue-500/20 via-violet-500/30 to-pink-500/20 rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.key}
                  className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20 transition" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-white/10 text-white grid place-items-center text-sm font-medium">
                        {i + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-white tracking-tight">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-white/70 text-sm">{s.text}</p>
                    <div className="mt-5 inline-flex items-center text-sm text-violet-200/90">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
