'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ArtworkModalProps {
  isOpen: boolean
  onClose: () => void
  artwork: {
    id: string
    title: string
    year: string
    medium: string
    size: string
    image: string
  }
}

export default function ArtworkModal({ isOpen, onClose, artwork }: ArtworkModalProps) {
  const router = useRouter()
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [panStart, setPanStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Reset zoom/pan when modal opens or artwork changes
  useEffect(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }, [artwork.id, isOpen])

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const zoomSpeed = 0.15
    const newZoom = e.deltaY > 0 ? zoom - zoomSpeed : zoom + zoomSpeed
    setZoom(Math.max(1, Math.min(newZoom, 5)))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsPanning(true)
      setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return
    setPan({
      x: e.clientX - panStart.x,
      y: e.clientY - panStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsPanning(false)
  }

  const handleImageClick = () => {
    if (zoom === 1) {
      setZoom(2)
    } else {
      setZoom(1)
      setPan({ x: 0, y: 0 })
    }
  }

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        backgroundColor: '#ffffff', 
        zIndex: 200, 
        display: 'flex', 
        overflow: 'hidden' 
      }} 
      onClick={onClose}
    >
      {/* Close button - Jadé Style */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#000',
          fontSize: '11px',
          letterSpacing: '0.2em',
          cursor: 'pointer',
          zIndex: 210,
          textTransform: 'uppercase',
          fontWeight: 400,
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
        }}
      >
        Close
      </button>

      {/* Main Image Viewport - Jadé Style: Large, centered */}
      <div 
        style={{ 
          flex: 1, 
          position: 'relative', 
          overflow: 'hidden', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          cursor: zoom > 1 ? (isPanning ? 'grabbing' : 'grab') : 'zoom-in',
          padding: '60px'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={containerRef}
          style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={handleImageClick}
        >
          <img
            src={artwork.image}
            alt={artwork.title}
            draggable={false}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              userSelect: 'none',
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              transition: isPanning ? 'none' : 'transform 0.3s ease-out',
              imageRendering: '-webkit-optimize-contrast'
            }}
          />
        </div>
      </div>

      {/* Metadata Side Column - Jadé Style */}
      <div 
        style={{ 
          width: '380px', 
          height: '100%', 
          borderLeft: '1px solid #eee', 
          backgroundColor: '#ffffff', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '60px 50px', 
          color: '#000' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Title - Jadé Style: Italic serif */}
          <div>
            <p style={{ 
              fontFamily: '"Times New Roman", Times, serif', 
              fontSize: '28px', 
              fontStyle: 'italic',
              fontWeight: 400, 
              margin: 0,
              lineHeight: 1.3
            }}>
              {artwork.title}
            </p>
          </div>

          {/* Year */}
          <div>
            <p style={{ 
              fontSize: '14px', 
              letterSpacing: '0.05em', 
              margin: 0,
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
            }}>
              {artwork.year}
            </p>
          </div>

          {/* Medium */}
          <div>
            <p style={{ 
              fontSize: '13px', 
              color: '#666',
              letterSpacing: '0.02em', 
              lineHeight: '1.6', 
              margin: 0,
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
            }}>
              {artwork.medium}
            </p>
          </div>

          {/* Dimensions */}
          <div>
            <p style={{ 
              fontSize: '13px', 
              color: '#666',
              letterSpacing: '0.02em', 
              margin: 0,
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
            }}>
              {artwork.size}
            </p>
          </div>

          {/* Inquire Button - Jadé Style */}
          <div style={{ marginTop: '40px' }}>
            <button style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid #000', 
              color: '#000', 
              fontSize: '10px', 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase', 
              fontWeight: 500,
              cursor: 'pointer',
              padding: '14px 28px',
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#000'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#000'
            }}
            onClick={() => router.push('/contact')}
            >
              Inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
