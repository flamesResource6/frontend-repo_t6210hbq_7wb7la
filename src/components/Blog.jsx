import { useEffect, useState } from 'react'

function Blog() {
  const [posts, setPosts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/blog`).then(r => r.json()).then(setPosts).catch(() => setPosts([]))
  }, [])

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">From the blog</h2>
          <p className="mt-3 text-gray-600">Product updates and fintech insights.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length === 0 && (
            <div className="sm:col-span-2 lg:col-span-3 text-center text-gray-500">No posts yet. Check back soon.</div>
          )}
          {posts.map((p) => (
            <article key={p.slug} className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.excerpt}</p>
              <div className="mt-3 text-sm text-gray-500">{p.author} {p.published_at ? '• ' + new Date(p.published_at).toLocaleDateString() : ''}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
