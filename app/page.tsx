'use client'

import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import { artworks } from '../content/artworks'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Show all high-res paintings on the home page for a full "floating" experience
  const images = artworks.map(a => a.image)

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  if (images.length === 0) {
    return (
      <div style={{ backgroundColor: '#000', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Loading Artwork...
      </div>
    )
  }

  return (
    <div style={{ 
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      overflow: 'hidden'
    }}>
      {/* Texture Grain Overlay to improve perceived resolution */}
      <div className="grain-overlay" />

      {/* Navigation Overlay */}
      <Navigation />

      {/* Hero Slideshow - Full Bleed */}
      {images.map((src, index) => {
        // Hero.png has internal white borders - apply extra zoom
        const isHeroImage = src.includes('Hero.png')
        const scaleAmount = isHeroImage ? 1.35 : 1.15
        
        return (
          <div
            key={src}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              zIndex: index === currentIndex ? 1 : 0,
              overflow: 'hidden'
            }}
          >
            <img
              src={src}
              alt="Chelsey L. Artwork"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transform: `scale(${scaleAmount})`,
                filter: 'contrast(1.02) brightness(1.02)', 
                imageRendering: '-webkit-optimize-contrast'
              }}
            />
          </div>
        )
      })}

      {/* Optional: Dark Overlay for text legibility if needed, 
          but Jade's site is very raw full-bleed */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
        zIndex: 5,
        pointerEvents: 'none'
      }} />
    </div>
  )
}
