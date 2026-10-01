import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { footerLegalLinks, footerLinkColumns } from '../data/footerLinks.js'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!emailPattern.test(email.trim())) {
      setError(email.trim() ? 'Enter a valid email address.' : 'Email is required.')
      setSubscribed(false)
      return
    }

    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-line bg-white">
      <div className="container mx-auto px-6 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1.25fr] lg:gap-16">
          <div className="max-w-[440px]">
            <Link to="/" aria-label="ByteSpace home"><Logo /></Link>
            <p className="mt-5 font-body text-base leading-7 text-muted">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="mt-5" noValidate onSubmit={handleSubmit}>
              <div className="flex min-w-0 flex-col gap-2 rounded-[28px] border border-line p-1.5 sm:flex-row sm:rounded-pill">
                <input
                  aria-label="Newsletter email address"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'newsletter-error' : undefined}
                  autoComplete="email"
                  className={`min-h-11 min-w-0 flex-1 rounded-pill border px-4 font-body text-sm text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-blue ${error ? 'border-red-600 text-red-700' : 'border-transparent'}`}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (error) setError('')
                    setSubscribed(false)
                  }}
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                />
                {/* The reference labels this newsletter action “Search”; “Subscribe” is the intended action. */}
                <button className="min-h-11 shrink-0 rounded-pill bg-lime px-6 font-body text-sm font-bold text-ink transition-colors duration-200 hover:bg-[#b7e600] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue active:scale-[0.98]" type="submit">
                  Subscribe
                </button>
              </div>
              {error && <p id="newsletter-error" className="mt-2 font-body text-sm font-semibold text-red-700" role="alert">{error}</p>}
              {subscribed && <p className="mt-2 font-body text-sm font-semibold text-blue" role="status">Thanks for subscribing!</p>}
            </form>
            <p className="mt-4 font-body text-xs leading-5 text-muted">
              By subscribing, you agree to our <Link className="underline underline-offset-2" to="/#">Privacy Policy</Link> and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-8">
            {footerLinkColumns.map((column, index) => (
              <ul key={index} className="space-y-4">
                {column.map((item) => (
                  <li key={item.label}>
                    <Link className="rounded-sm font-body text-sm font-semibold text-ink transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs font-medium text-muted">© 2023 ByteSpace. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLegalLinks.map((item) => (
              <Link key={item.label} className="rounded-sm font-body text-xs font-medium text-muted hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue" to={item.to}>{item.label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer