'use client'

import Navigation from '../../components/Navigation'

export default function Biography() {
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
        alignItems: 'center'
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
          Biography
        </h1>

        <div style={{ 
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: '18px',
          lineHeight: '1.9',
          letterSpacing: '0.01em',
          color: '#333',
          textAlign: 'left'
        }}>
          {/* About the Artist */}
          <h2 style={{ 
            fontSize: '14px', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
            fontWeight: 600,
            marginBottom: '30px',
            color: '#000'
          }}>
            About the Artist
          </h2>

          <p style={{ marginBottom: '40px' }}>
            Chelsey L. is a conceptual abstract artist based in Melbourne. Her practice operates at the intersection of Eastern meditative discipline and Western Abstract Expressionism. Drawing from her background in Chinese calligraphy, Chelsey treats the canvas as a space for "emotional archaeology," constructing layered psychological landscapes where memory, faith, and identity are built, erased, and rebuilt.
          </p>

          <p style={{ marginBottom: '40px' }}>
            Navigating a hybrid cultural existence, Chelsey explores the concept of "the other." Her paintings are not merely observations of nature, but rigorous inquiries into the human spirit.
          </p>

          {/* Philosophy: The Architecture of Silence */}
          <h2 style={{ 
            fontSize: '14px', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
            fontWeight: 600,
            marginTop: '60px',
            marginBottom: '30px',
            color: '#000'
          }}>
            Philosophy: The Architecture of Silence
          </h2>

          <p style={{ marginBottom: '40px' }}>
            Chelsey does not paint to describe the world, but to structure the experience of it. Her recent work explores the tension between "visual noise"—the frantic, asemic lines of modern anxiety—and the structured fields of color that seek to contain them.
          </p>

          <p style={{ marginBottom: '40px' }}>
            In her signature series, The Architecture of Silence, she creates a dialogue between chaos and order. Her art serves as a sanctuary, inviting viewers to step out of the relentless flow of the digital age and into a space of contemplation and resonance.
          </p>

          {/* Academic Recognition & Community */}
          <h2 style={{ 
            fontSize: '14px', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
            fontWeight: 600,
            marginTop: '60px',
            marginBottom: '30px',
            color: '#000'
          }}>
            Academic Recognition & Community
          </h2>

          <p style={{ marginBottom: '40px' }}>
            In addition to her solo practice, Chelsey is an active contributor to Victoria's historic art community. Her work has been recognized by the Victorian Artists Society (VAS), Australia's oldest and most prestigious art institution (est. 1870).
          </p>

          <p>
            Chelsey's paintings were jury-selected for inclusion in both the 2025 Winter Select Exhibition and the 2025 Spring Select Exhibition. These competitive showcases place her contemporary abstract practice in dialogue with the region's established artistic traditions, validating her unique visual language within the broader academic framework.
          </p>
        </div>
      </div>
    </div>
  )
}
