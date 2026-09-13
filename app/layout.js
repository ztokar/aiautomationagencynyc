import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.aiautomationagencynewyork.com'),
  verification: {
    google: 'FAauTfdwpGeI0DZd2-ytX9QlUm2Jx0V3NA8lEv813ZQ',
  },
  title: 'AI Automation Agency New York | Practical AI for NYC Businesses',
  description: 'AI automation agency serving New York businesses remotely. We help NYC service businesses reduce manual workload through practical AI automation, AI agents, and workflow automation.',
  keywords: 'AI automation agency New York, AI automation NYC, AI agents New York, workflow automation NYC, AI consulting New York, business automation Manhattan, AI solutions Brooklyn, New York AI agency',
  authors: [{ name: 'AI Automation Agency New York' }],
  creator: 'AI Automation Agency New York',
  publisher: 'AI Automation Agency New York',
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'AI Automation Agency New York | Practical AI for NYC Businesses',
    description: 'AI automation agency serving New York businesses. We help NYC service businesses reduce manual workload through practical AI automation.',
    url: 'https://www.aiautomationagencynewyork.com',
    siteName: 'AI Automation Agency New York',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation Agency New York - Practical AI for NYC Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency New York | Practical AI for NYC Businesses',
    description: 'AI automation agency serving New York businesses. We help NYC service businesses reduce manual workload through practical AI automation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.aiautomationagencynewyork.com',
  },
}

// Site-wide Organization + WebSite schema (page-specific Service/FAQ schema lives on each page)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.aiautomationagencynewyork.com/#organization',
      name: 'AI Automation Agency New York',
      alternateName: 'NYC AI Automation',
      description: 'AI automation agency serving New York businesses remotely. We help NYC service businesses reduce manual workload through practical AI automation.',
      url: 'https://www.aiautomationagencynewyork.com',
      telephone: '+1-646-814-2452',
      email: 'info@aiautomationagencynewyork.com',
      sameAs: [
        'https://www.linkedin.com/in/ai-automation-agency-new-york-4564583a9/',
        'https://www.facebook.com/aiautomationagencynewyork',
        'https://x.com/aiagencynewyork',
        'https://www.instagram.com/aiautomationagencynewyork/',
      ],
      areaServed: [
        { '@type': 'City', name: 'New York City' },
        { '@type': 'AdministrativeArea', name: 'Manhattan' },
        { '@type': 'AdministrativeArea', name: 'Brooklyn' },
        { '@type': 'AdministrativeArea', name: 'Queens' },
        { '@type': 'AdministrativeArea', name: 'Bronx' },
        { '@type': 'AdministrativeArea', name: 'Staten Island' },
        { '@type': 'AdministrativeArea', name: 'Long Island' },
        { '@type': 'AdministrativeArea', name: 'Westchester County' },
        { '@type': 'AdministrativeArea', name: 'New Jersey' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.aiautomationagencynewyork.com/#website',
      url: 'https://www.aiautomationagencynewyork.com',
      name: 'AI Automation Agency New York',
      publisher: { '@id': 'https://www.aiautomationagencynewyork.com/#organization' },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
