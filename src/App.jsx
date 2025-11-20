import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-white font-semibold">FacilityAI</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-200">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="/test" className="text-xs px-3 py-1 rounded bg-white/10 text-white border border-white/10">System Test</a>
        </div>
      </header>
      <main className="pt-14">
        <Hero />
        <Features />
        <Demo />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950 text-blue-300/70">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <p>© {new Date().getFullYear()} FacilityAI. All rights reserved.</p>
          <p>Privacy‑first • Works with Twilio & Gmail • APP compliant</p>
        </div>
      </footer>
    </div>
  )
}

export default App
