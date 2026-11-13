import { Activity, ArrowUpRight, Info } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import CallLink from './CallLink'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef(pathname)
  useEffect(() => {
    const destination = `${pathname}${hash}`
    if (previousPath.current !== destination) {
      const target = document.getElementById(hash ? hash.slice(1) : 'main-content')
      if (hash && target) target.scrollIntoView()
      else window.scrollTo(0, 0)
      target?.focus({ preventScroll: true })
      previousPath.current = destination
    }
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="First Aid Hero home">
            <span className="brand-mark">
              <Activity size={24} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span>
              First Aid <strong>Hero</strong>
            </span>
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/guides">Guides</NavLink>
            <NavLink to="/learn">Learn</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          <CallLink />
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-notice">
            <Info size={18} aria-hidden="true" />
            <p>
              For education and quick reference. This site does not replace emergency services or
              hands-on first-aid training. In an emergency in India, call <a href="tel:112">112</a>.
            </p>
          </div>
          <div className="footer-bottom">
            <div>
              <Link className="footer-name" to="/">
                First Aid Hero
              </Link>
              <p>An independent educational project for SSN Youth Red Cross.</p>
            </div>
            <div className="footer-links">
              <Link to="/about#sources">
                Sources & limitations
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <span>Not an official Red Cross service.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
