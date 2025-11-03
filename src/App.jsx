import Hero from './components/Hero'
import Problems from './components/Problems'
import Strategy from './components/Strategy'
import SocialProof from './components/SocialProof'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* luminous backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(30,64,175,0.2),transparent),radial-gradient(40%_40%_at_100%_0%,rgba(124,58,237,0.2),transparent)]" />

      <header className="relative">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500" />
            <span className="text-sm tracking-widest text-white/70">DASHBOARD DADDY</span>
          </div>
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-md hover:border-white/40"
          >
            Book Strategy Call
          </a>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Problems />
        <Strategy />
        <SocialProof />
      </main>

      <footer className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <div>© {new Date().getFullYear()} Dashboard Daddy — The Authority Funnel™</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
