'use client'

import Navigation from '../../components/Navigation'

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#000' }}>
      <div className="grain-overlay" style={{ opacity: 0.02 }} />
      <Navigation />

      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: 'clamp(100px, 15vw, 180px) clamp(20px, 5vw, 60px) clamp(60px, 10vw, 120px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(40px, 8vw, 120px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
          marginBottom: '60px',
          textAlign: 'center'
        }}>
          Contact
        </h1>

        <div style={{ textAlign: 'center' }}>
          <p style={{ 
            fontSize: '14px', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            color: '#999',
            marginBottom: '20px'
          }}>
            Studio Enquiries
          </p>
          <a 
            href="mailto:studio@chelseyartwork.com"
            style={{ 
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: 'clamp(18px, 4vw, 32px)',
              color: '#000',
              textDecoration: 'none',
              borderBottom: '1px solid #000',
              paddingBottom: '5px',
              wordBreak: 'break-all'
            }}
          >
            studio@chelseyartwork.com
          </a>
        </div>
      </div>
    </div>
  )
}
