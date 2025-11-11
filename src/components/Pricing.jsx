function Pricing() {
  const plans = [
    { name: 'Free', price: '$0', features: ['1 project', 'Community support', 'Basic analytics'], cta: 'Start free', highlight: false },
    { name: 'Pro', price: '$19', features: ['Unlimited projects', 'Priority support', 'Advanced analytics'], cta: 'Go Pro', highlight: true },
    { name: 'Business', price: '$49', features: ['SAML/SSO', 'Dedicated manager', 'Export & backups'], cta: 'Contact sales', highlight: false },
  ]
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Simple pricing</h2>
          <p className="mt-3 text-gray-600">Start free and scale as you grow.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl border ${p.highlight ? 'bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 border-white/60 shadow-md' : 'bg-white/70 backdrop-blur border-white/60 shadow-sm'}`}>
              <h3 className="text-xl font-semibold text-gray-800">{p.name}</h3>
              <p className="mt-2 text-4xl font-bold text-gray-900">{p.price}<span className="text-base text-gray-500 font-medium">/mo</span></p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.features.map((f) => (<li key={f}>• {f}</li>))}
              </ul>
              <a href="#contact" className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-lg border ${p.highlight ? 'bg-white/80' : 'bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
