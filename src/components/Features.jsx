import { Headphones, CalendarCheck2, Mail, ShieldCheck, Sparkles, Receipt, LineChart } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: 'AI Co‑Pilot',
    desc: 'Listens to calls, transcribes, extracts intent, and drafts bookings for human confirmation.'
  },
  {
    icon: CalendarCheck2,
    title: 'Smart Scheduling',
    desc: 'Book once‑off or recurring classes, timeslots, or events across staff and locations.'
  },
  {
    icon: Receipt,
    title: 'Payments & Invoicing',
    desc: 'Send mobile payment links, accept pre‑pay, save cards on file, and automate receipts.'
  },
  {
    icon: Mail,
    title: 'Email & SMS',
    desc: 'Confirmations, reminders, and two‑way messaging integrated into your workflow.'
  },
  {
    icon: LineChart,
    title: 'Analytics',
    desc: 'Daily summaries, conversion insights, utilisation, and follow‑up queues.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy‑first',
    desc: 'Encrypted and compliant with Australian Privacy Principles.'
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Everything you need to run bookings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
              <p className="text-blue-200/80 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
