function Features() {
  const items = [
    { title: 'Cards & Issuing', desc: 'Virtual and physical cards with spend controls.' },
    { title: 'Simple Payments', desc: 'One-time and recurring billing out of the box.' },
    { title: 'Analytics', desc: 'Understand revenue and churn with clear insights.' },
  ]
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Built for fintech SaaS</h2>
          <p className="mt-3 text-gray-600">Clean APIs, elegant UI, and thoughtful defaults.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
