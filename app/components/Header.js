'use client'

import { useState, useEffect } from 'react'

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'How It Works' },
    { href: '#faq', label: 'FAQ' },
    { href: '#about', label: 'About' },
  ]

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <a
            href="/"
            style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color var(--transition-base)',
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
          >
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>&lt;AI/&gt;</span>
            <span style={{ letterSpacing: '-0.02em' }}>Automation Agency NYC</span>
          </a>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: '500',
                      color: 'var(--text-secondary)',
                      transition: 'color var(--transition-base)',
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="btn btn-primary desktop-cta"
              style={{
                padding: '0.625rem 1.5rem',
                fontSize: '0.875rem',
                minHeight: 'auto',
              }}
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'none',
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          background: 'rgba(10, 10, 10, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-subtle)',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 999,
          padding: '1.5rem',
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.href} style={{ marginBottom: '1rem' }}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  fontSize: '1.125rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)',
                  borderRadius: '8px',
                  transition: 'all var(--transition-base)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--bg-tertiary)'
                  e.target.style.color = 'var(--accent-primary)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = 'var(--text-primary)'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '1.5rem' }}>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ width: '100%' }}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-cta {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}
