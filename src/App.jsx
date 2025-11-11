import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthModal from './components/AuthModal'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')

  const openAuth = (mode) => { setAuthMode(mode); setAuthOpen(true) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-800">
      <Navbar onOpenAuth={openAuth} />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-white/60 bg-white/50 backdrop-blur py-8 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} PastelPay. All rights reserved.
      </footer>
      {authOpen && <AuthModal mode={authMode} onClose={() => setAuthOpen(false)} />}
    </div>
  )
}

export default App
