import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Demo() {
  const [query, setQuery] = useState('Book haircut Monday 10am')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const runAvailability = async () => {
    setLoading(true); setError(''); setResults(null)
    try {
      const today = new Date().toISOString().slice(0,10)
      const res = await fetch(`${BACKEND}/api/availability`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: today, days: 7, limit: 5 })
      })
      const data = await res.json()
      setResults(data.slots || [])
    } catch (e) {
      setError(e.message)
    } finally { setLoading(false) }
  }

  return (
    <section id="demo" className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ask e.g. ‘Any availability Monday?’" className="flex-1 px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 focus:outline-none" />
            <button onClick={runAvailability} className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition">Check Availability</button>
          </div>
          <div className="mt-6 text-sm text-blue-200/80">
            {loading && <p>Checking…</p>}
            {error && <p className="text-red-300">{error}</p>}
            {results && results.length === 0 && !loading && <p>No open slots found yet. Seed your database to see results.</p>}
            {results && results.length > 0 && (
              <ul className="divide-y divide-white/10">
                {results.map(s => (
                  <li key={s._id} className="py-3 flex items-center justify-between">
                    <span>{new Date(s.start_time).toLocaleString()} – {new Date(s.end_time).toLocaleTimeString()}</span>
                    <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-300">{s.status}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
