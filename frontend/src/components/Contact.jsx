import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white rounded-lg font-medium transition-colors"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="text-green-400 text-sm">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  )
}
