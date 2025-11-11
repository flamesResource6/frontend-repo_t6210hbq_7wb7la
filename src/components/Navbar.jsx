import { useState } from 'react'

function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 border border-white/60 shadow-sm" />
          <span className="font-semibold text-gray-800">PastelPay</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#blog" className="hover:text-gray-900">Blog</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => onOpenAuth('login')} className="px-4 py-2 text-gray-700 hover:text-gray-900">Log in</button>
          <button onClick={() => onOpenAuth('signup')} className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800 border border-white/60 shadow-sm hover:shadow md:transition">
            Get started
          </button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle</span>
          <div className="w-6 h-[2px] bg-gray-700 mb-1"/>
          <div className="w-6 h-[2px] bg-gray-700 mb-1"/>
          <div className="w-6 h-[2px] bg-gray-700"/>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/50 bg-white/70 backdrop-blur px-4 py-3 space-y-2">
          <a href="#features" className="block">Features</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#blog" className="block">Blog</a>
          <a href="#contact" className="block">Contact</a>
          <div className="pt-2 flex gap-2">
            <button onClick={() => onOpenAuth('login')} className="flex-1 px-4 py-2 rounded-lg border border-white/60 bg-white/70">Log in</button>
            <button onClick={() => onOpenAuth('signup')} className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800 border border-white/60">Get started</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
