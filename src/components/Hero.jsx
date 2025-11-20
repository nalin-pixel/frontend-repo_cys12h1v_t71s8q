import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-blue-200 text-xs mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Live AI Co‑Pilot for Bookings & Communications
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          FacilityAI — Reception made effortless
        </h1>
        <p className="text-blue-200/90 text-lg md:text-xl max-w-2xl mx-auto">
          Pair human receptionists with a real‑time AI assistant that listens, transcribes, and pre‑fills bookings across calls, emails, and chat.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#demo" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white shadow transition">See Quick Demo</a>
          <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">Talk to us</a>
        </div>
      </div>
    </section>
  )
}
