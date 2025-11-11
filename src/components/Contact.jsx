import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (data.ok) {
        setStatus('Thanks! We will get back to you.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong.')
      }
    } catch (e) {
      setStatus('Network error.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Contact us</h2>
          <p className="mt-3 text-gray-600">We usually respond within a day.</p>
        </div>
        <form onSubmit={submit} className="grid gap-4 bg-white/70 backdrop-blur p-6 rounded-2xl border border-white/60">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="px-4 py-3 rounded-lg border border-white/60 bg-white/80 outline-none focus:ring-2 focus:ring-purple-200" />
            <input required name="email" placeholder="Email address" type="email" className="px-4 py-3 rounded-lg border border-white/60 bg-white/80 outline-none focus:ring-2 focus:ring-purple-200" />
          </div>
          <input required name="subject" placeholder="Subject" className="px-4 py-3 rounded-lg border border-white/60 bg-white/80 outline-none focus:ring-2 focus:ring-purple-200" />
          <textarea required name="message" placeholder="Message" rows="5" className="px-4 py-3 rounded-lg border border-white/60 bg-white/80 outline-none focus:ring-2 focus:ring-purple-200" />
          <div className="flex items-center justify-between">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800 border border-white/60">Send message</button>
            <div className="text-sm text-gray-600">{status}</div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
