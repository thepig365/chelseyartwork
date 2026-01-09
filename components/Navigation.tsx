'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'BIO', href: '/bio' },
  { label: 'PORTFOLIO', href: '/selected-works' },
  { label: 'EXHIBITIONS', href: '/exhibitions' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Mobile Navigation
  if (isMobile) {
    return (
      <>
        {/* Mobile Header Bar */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: '#1a1a1a',
          zIndex: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          boxSizing: 'border-box'
        }}>
          <Link href="/" style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '14px',
            letterSpacing: '0.15em',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 400
          }}>
            CHELSEY L.
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            }}
          >
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#fff',
              opacity: isMenuOpen ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#fff',
              transition: 'transform 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#1a1a1a',
          zIndex: 119,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 30px',
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMenuOpen ? 1 : 0,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '25px'
          }}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '18px',
                    letterSpacing: '0.1em',
                    textDecoration: 'none',
                    color: pathname === item.href ? '#ffffff' : 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: 'auto',
            fontFamily: "'Courier New', monospace",
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.05em'
          }}>
            Melbourne, AU
          </div>
        </div>
      </>
    )
  }

  // Desktop Navigation (Left Sidebar)
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '220px',
      height: '100vh',
      backgroundColor: '#1a1a1a',
      zIndex: 120,
      display: 'flex',
      flexDirection: 'column',
      padding: '60px 30px',
      boxSizing: 'border-box'
    }}>
      {/* Artist Name */}
      <Link href="/" style={{
        fontFamily: "'Courier New', monospace",
        fontSize: '18px',
        letterSpacing: '0.15em',
        color: '#ffffff',
        textDecoration: 'none',
        marginBottom: '60px',
        fontWeight: 400
      }}>
        CHELSEY L.
      </Link>

      {/* Nav Links */}
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '16px',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                color: pathname === item.href ? '#ffffff' : 'rgba(255,255,255,0.5)',
                transition: 'color 0.3s ease',
                textTransform: 'uppercase'
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer info */}
      <div style={{
        marginTop: 'auto',
        fontFamily: "'Courier New', monospace",
        fontSize: '13px',
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.05em'
      }}>
        Melbourne, AU
      </div>
    </nav>
  )
}
