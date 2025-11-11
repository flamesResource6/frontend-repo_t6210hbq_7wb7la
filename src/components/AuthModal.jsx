import { useState } from 'react'

function AuthModal({ mode = 'login', onClose }) {
  const [current, setCurrent] = useState(mode)
  const [status, setStatus] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Loading...')
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    const endpoint = current === 'signup' ? '/api/auth/signup' : '/api/auth/login'
    try {
      const res = await fetch(`${baseUrl}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      if (res.ok && data.ok) {
        setStatus(current === 'signup' ? 'Account created!' : 'Welcome back!')
        setTimeout(onClose, 900)
      } else {
        setStatus(data.detail || 'Something went wrong')
      }
    } catch (err) {
      setStatus('Network error')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div className="relative w-full max-w-md mx-auto bg-white rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{current === 'signup' ? 'Create account' : 'Welcome back'}</h3>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>
        <div className="flex gap-2 mb-4">
          <button onClick={() => setCurrent('login')} className={`flex-1 px-4 py-2 rounded-lg border ${current==='login' ? 'bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800' : 'bg-white'}`}>Log in</button>
          <button onClick={() => setCurrent('signup')} className={`flex-1 px-4 py-2 rounded-lg border ${current==='signup' ? 'bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800' : 'bg-white'}`}>Sign up</button>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-3">
          {current === 'signup' && (
            <input name="name" placeholder="Full name" className="px-4 py-3 rounded-lg border" required />
          )}
          <input type="email" name="email" placeholder="Email address" className="px-4 py-3 rounded-lg border" required />
          <input type="password" name="password_hash" placeholder="Password" className="px-4 py-3 rounded-lg border" required />
          {current === 'signup' && (
            <select name="plan" className="px-4 py-3 rounded-lg border">
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="business">Business</option>
            </select>
          )}
          <button className="mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-300 to-blue-300 text-gray-800 border">{current === 'signup' ? 'Create account' : 'Log in'}</button>
          <div className="text-sm text-gray-600">{status}</div>
        </form>
      </div>
    </div>
  )
}

export default AuthModal
