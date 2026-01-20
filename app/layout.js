import './globals.css'

export const metadata = {
  metadataBase: new URL('https://aiautomationagencynewyork.com'),
  title: 'AI Automation Agency New York | Transform Your NYC Business with AI',
  description: 'NYC\'s trusted AI automation agency. We help New York businesses automate workflows, deploy AI agents, and cut costs by up to 60%. Free consultation for Manhattan, Brooklyn, Queens & beyond.',
  keywords: 'AI automation agency New York, AI automation NYC, AI agents New York, workflow automation NYC, AI consulting New York, business automation Manhattan, AI solutions Brooklyn, New York AI agency',
  authors: [{ name: 'Shimon Carroll' }],
  creator: 'Own The Climb',
  publisher: 'AI Automation Agency New York',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'AI Automation Agency New York | Transform Your NYC Business with AI',
    description: 'NYC\'s trusted AI automation agency. We help New York businesses automate workflows, deploy AI agents, and cut costs by up to 60%.',
    url: 'https://aiautomationagencynewyork.com',
    siteName: 'AI Automation Agency New York',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Automation Agency New York - Transform Your Business with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency New York | Transform Your NYC Business with AI',
    description: 'NYC\'s trusted AI automation agency. We help New York businesses automate workflows and cut costs by up to 60%.',
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
    canonical: 'https://aiautomationagencynewyork.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// LocalBusiness + Service Schema for NYC AI Automation
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://aiautomationagencynewyork.com/#business',
      name: 'AI Automation Agency New York',
      alternateName: 'NYC AI Automation',
      description: 'New York City\'s trusted AI automation agency helping businesses automate workflows, deploy AI agents, and transform operations with artificial intelligence.',
      url: 'https://aiautomationagencynewyork.com',
      telephone: '+1-443-265-2667',
      email: 'info@owntheclimb.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New York',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.7128,
        longitude: -74.0060,
      },
      areaServed: [
        { '@type': 'City', name: 'New York City' },
        { '@type': 'Borough', name: 'Manhattan' },
        { '@type': 'Borough', name: 'Brooklyn' },
        { '@type': 'Borough', name: 'Queens' },
        { '@type': 'Borough', name: 'Bronx' },
        { '@type': 'Borough', name: 'Staten Island' },
        { '@type': 'AdministrativeArea', name: 'Long Island' },
        { '@type': 'AdministrativeArea', name: 'Westchester County' },
        { '@type': 'AdministrativeArea', name: 'New Jersey' },
      ],
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '9',
      },
      sameAs: [
        'https://www.linkedin.com/in/shimon-carroll/',
        'https://owntheclimb.com',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://aiautomationagencynewyork.com/#service',
      name: 'AI Automation Services',
      serviceType: 'AI Automation Consulting',
      provider: {
        '@id': 'https://aiautomationagencynewyork.com/#business',
      },
      areaServed: {
        '@type': 'City',
        name: 'New York City',
      },
      description: 'Comprehensive AI automation services including AI agents, workflow automation, custom AI solutions, and AI training for New York businesses.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
        },
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aiautomationagencynewyork.com/#webpage',
      url: 'https://aiautomationagencynewyork.com',
      name: 'AI Automation Agency New York | Transform Your NYC Business with AI',
      description: 'NYC\'s trusted AI automation agency. We help New York businesses automate workflows, deploy AI agents, and cut costs by up to 60%.',
      isPartOf: {
        '@id': 'https://aiautomationagencynewyork.com/#website',
      },
      about: {
        '@id': 'https://aiautomationagencynewyork.com/#business',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://aiautomationagencynewyork.com',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://aiautomationagencynewyork.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does AI automation cost for New York businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI automation projects for NYC businesses typically range from $3,500 for basic workflow automation to $25,000+ for enterprise AI agent deployments. We offer free consultations to assess your specific needs and provide accurate estimates.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to implement AI automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most AI automation projects are completed within 2-8 weeks. Simple workflow automations can be live within days, while complex AI agent systems may take 4-8 weeks. We prioritize quick wins so you see ROI fast.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with businesses outside Manhattan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We serve all five NYC boroughs—Manhattan, Brooklyn, Queens, the Bronx, and Staten Island—plus Long Island, Westchester, and New Jersey. Most of our work is done remotely with on-site visits as needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries do you specialize in for AI automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work with NYC businesses across finance, healthcare, real estate, legal, e-commerce, and professional services. Our AI solutions are customized to your industry\'s specific workflows and compliance requirements.',
          },
        },
      ],
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
        {children}
      </body>
    </html>
  )
}
