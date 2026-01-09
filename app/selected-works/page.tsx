'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import ArtworkModal from '../../components/ArtworkModal'
import { artworks } from '../../content/artworks'

export default function Portfolio() {
  const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[number] | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#000' }}>
      <div className="grain-overlay" style={{ opacity: 0.02 }} />
      <Navigation />
      
      <ArtworkModal
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        artwork={
          selectedArtwork || { id: '', title: '', year: '', medium: '', size: '', image: '' }
        }
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(100px, 15vw, 160px) clamp(20px, 5vw, 60px) clamp(60px, 10vw, 120px)' }}>
        {/* Page Title - Jadé Style */}
        <h1 style={{ 
          fontSize: '11px', 
          letterSpacing: '0.4em', 
          color: '#000', 
          marginBottom: '80px', 
          textTransform: 'uppercase', 
          fontWeight: 500,
          textAlign: 'center',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
        }}>
          Portfolio
        </h1>

        {/* Artwork List - Single Column, Same Size */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '100px'
        }}>
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => setSelectedArtwork(artwork)}
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ 
                cursor: 'pointer', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'opacity 0.4s ease',
                opacity: hoveredId && hoveredId !== artwork.id ? 0.5 : 1
              }}
            >
              {/* Artwork Image Container - Natural Aspect Ratio */}
              <div style={{ 
                width: '100%',
                backgroundColor: '#fafafa', 
                marginBottom: '24px', 
                overflow: 'hidden',
              }}>
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    display: 'block',
                    imageRendering: '-webkit-optimize-contrast',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: hoveredId === artwork.id ? 'scale(1.02)' : 'scale(1)'
                  }}
                />
              </div>

              {/* Artwork Info - Centered, Elegant Placeholders */}
              <div style={{ 
                textAlign: 'center', 
                width: '100%',
                paddingTop: '8px'
              }}>
                <p style={{ 
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: '22px', 
                  fontStyle: 'italic',
                  fontWeight: 400, 
                  margin: '0 0 16px 0',
                  color: '#000',
                  letterSpacing: '0.01em'
                }}>
                  {artwork.title}
                </p>
                <p style={{ 
                  fontSize: '13px', 
                  letterSpacing: '0.08em', 
                  color: '#888', 
                  fontWeight: 400, 
                  margin: '0 0 8px 0',
                  fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
                }}>
                  {artwork.year}
                </p>
                <p style={{ 
                  fontSize: '13px', 
                  letterSpacing: '0.03em', 
                  color: '#888', 
                  fontWeight: 400, 
                  margin: '0 0 8px 0',
                  fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
                }}>
                  {artwork.medium}
                </p>
                <p style={{ 
                  fontSize: '13px', 
                  letterSpacing: '0.03em', 
                  color: '#888', 
                  fontWeight: 400, 
                  margin: 0,
                  fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
                }}>
                  {artwork.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
