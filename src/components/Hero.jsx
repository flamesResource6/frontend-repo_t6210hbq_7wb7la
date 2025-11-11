import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-24" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col items-center text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
        <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-800">
          Modern finance, pastel simple
        </h1>
        <p className="relative mt-6 max-w-2xl text-lg text-gray-600">
          Accept payments, issue cards, and manage cash flow with a clean, minimalist dashboard.
        </p>
        <div className="relative mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#pricing" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800 border border-white/60 shadow-sm">See pricing</a>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-white/80 backdrop-blur text-gray-800 border border-white/60 shadow-sm">Talk to sales</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
