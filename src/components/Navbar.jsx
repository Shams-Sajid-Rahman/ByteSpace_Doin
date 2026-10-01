import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import shoppingBagIcon from '../assets/Shoping-Bag.svg'
import { accountNavigation, primaryNavigation } from '../data/navigation.js'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-50 w-full">
      <div className="container flex items-center justify-between gap-5 py-6">
        <Link to="/" aria-label="ByteSpace home" onClick={closeMenu}>
          <Logo variant="light" />
        </Link>

        <nav aria-label="Primary navigation" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              aria-current={item.active ? 'page' : undefined}
              className={`rounded-sm font-body text-base text-white transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${item.active ? 'font-bold' : 'font-medium'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-6 md:flex">
          {accountNavigation.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={item.prominent
                ? 'inline-flex min-h-11 items-center justify-center rounded-pill bg-lime px-6 font-body text-sm font-bold text-ink transition-colors hover:bg-[#b7e600] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                : 'rounded-sm font-body text-sm font-semibold text-white transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Shopping bag"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <img aria-hidden="true" className="h-5 w-5" src={shoppingBagIcon} alt="" width="20" height="20" />
          </button>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
        >
          {menuOpen
            ? <X aria-hidden="true" size={23} />
            : <Menu aria-hidden="true" size={23} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full border-t border-white/15 bg-blue px-6 pb-5 shadow-soft md:hidden"
      >
        <div className="mx-auto flex max-w-container flex-col">
          {primaryNavigation.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              aria-current={item.active ? 'page' : undefined}
              onClick={closeMenu}
              className={`border-b border-white/15 py-4 font-body text-base text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${item.active ? 'font-bold' : 'font-medium'}`}
            >
              {item.label}
            </Link>
          ))}
          {accountNavigation.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={closeMenu}
              className={item.prominent
                ? 'mt-4 inline-flex min-h-11 items-center justify-center rounded-pill bg-lime px-6 font-body text-sm font-bold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                : 'border-b border-white/15 py-4 font-body text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar