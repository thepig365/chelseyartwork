export interface Artwork {
  id: string
  title: string
  year: string
  medium: string
  size: string
  image: string
  series: string
}

// Deployment-ready artwork data with professional placeholders
export const artworks: Artwork[] = [
  // 2024 Series
  {
    id: 'hero-main',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/Hero.png',
    series: '2024',
  },
  {
    id: 'meihua-main',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/meihua.png',
    series: '2024',
  },
  {
    id: 'art-9',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/9.jpg',
    series: '2024',
  },
  {
    id: 'art-10',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/10.jpg',
    series: '2024',
  },

  // 2023 Series
  {
    id: 'art-12',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/12.jpg',
    series: '2023',
  },
  {
    id: 'ocean-2023',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/ocean.jpg',
    series: '2023',
  },

  // Archive Series
  {
    id: 'cartographies',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/Cartographies of Feeling.jpg',
    series: 'Archive',
  },
  {
    id: 'rite-spring',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/The Rite of Spring.jpg',
    series: 'Archive',
  },
  {
    id: 'dancer-1',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/dancer.jpg',
    series: 'Archive',
  },
  {
    id: 'dancer-2',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/dancer 2.jpg',
    series: 'Archive',
  },
  {
    id: 'noosa-archive',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/noosa.jpg',
    series: 'Archive',
  },
  {
    id: 'tower-hill-archive',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/tower hill.jpg',
    series: 'Archive',
  },
  {
    id: 'masada-archive',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/masada mountain range1 2.jpg',
    series: 'Archive',
  },
  {
    id: 'art-8',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/8.jpg',
    series: 'Archive',
  },
  {
    id: 'art-7',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/7.jpg',
    series: 'Archive',
  },
  {
    id: 'art-6',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/6.jpg',
    series: 'Archive',
  },
  {
    id: 'art-5',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/5.jpg',
    series: 'Archive',
  },
  {
    id: 'art-4',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/4.jpg',
    series: 'Archive',
  },
  {
    id: 'art-3',
    title: 'Untitled Composition',
    year: '2025-2026',
    medium: 'Mixed media on canvas',
    size: 'Inquire for details',
    image: '/images/artworks/3.jpg',
    series: 'Archive',
  }
]

export const seriesOrder = [
  { name: '2024', slug: '2024' },
  { name: '2023', slug: '2023' },
  { name: 'Archive', slug: 'archive' },
] as const
