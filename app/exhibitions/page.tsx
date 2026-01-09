'use client'

import Navigation from '../../components/Navigation'

export default function Exhibitions() {
  const exhibitions = [
    { 
      year: 2026, 
      title: 'Echo and Resonance', 
      location: 'Town Hall Gallery, Boroondara', 
      type: 'Solo',
      link: 'https://www.boroondara.vic.gov.au/events/echo-and-resonance-chelsey-liu'
    },
    { year: 2025, title: 'VAS Spring Select Exhibition (Jury Selected)', location: 'Victorian Artists Society Galleries, East Melbourne, VIC', type: 'Group' },
    { year: 2025, title: 'VAS Winter Select Exhibition (Jury Selected)', location: 'Victorian Artists Society Galleries, East Melbourne, VIC', type: 'Group' },
  ]

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#000' }}>
      <div className="grain-overlay" style={{ opacity: 0.02 }} />
      <Navigation />

      <div style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        padding: 'clamp(100px, 15vw, 180px) clamp(20px, 5vw, 60px) clamp(60px, 10vw, 120px)'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(40px, 8vw, 120px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
          marginBottom: '80px',
          textAlign: 'center'
        }}>
          Exhibitions
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {exhibitions.map((ex, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              flexDirection: 'column',
              borderBottom: '1px solid #eee',
              paddingBottom: '20px',
              gap: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '13px', letterSpacing: '0.1em', color: '#999' }}>{ex.year}</span>
                <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666' }}>{ex.type}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {ex.link ? (
                  <a 
                    href={ex.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      fontFamily: '"Times New Roman", Times, serif',
                      fontSize: '24px', 
                      fontStyle: 'italic',
                      color: '#000',
                      textDecoration: 'none',
                      borderBottom: '1px solid #000',
                      paddingBottom: '2px',
                      width: 'fit-content'
                    }}
                  >
                    {ex.title}
                  </a>
                ) : (
                  <span style={{ 
                    fontFamily: '"Times New Roman", Times, serif',
                    fontSize: '24px', 
                    fontStyle: 'italic' 
                  }}>{ex.title}</span>
                )}
                <span style={{ fontSize: '13px', color: '#666', marginTop: '5px' }}>{ex.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
