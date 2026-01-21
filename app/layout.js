import './globals.css'

export const metadata = {
  metadataBase: new URL('https://aiautomationagencynewyork.com'),
  verification: {
    google: 'FAauTfdwpGeI0DZd2-ytX9QlUm2Jx0V3NA8lEv813ZQ',
  },
  title: 'AI Automation Agency New York | Practical AI for NYC Businesses',
  description: 'AI automation agency serving New York businesses remotely. We help NYC service businesses reduce manual workload through practical AI automation, AI agents, and workflow automation.',
  keywords: 'AI automation agency New York, AI automation NYC, AI agents New York, workflow automation NYC, AI consulting New York, business automation Manhattan, AI solutions Brooklyn, New York AI agency',
  authors: [{ name: 'AI Automation Agency New York' }],
  creator: 'AI Automation Agency New York',
  publisher: 'AI Automation Agency New York',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'AI Automation Agency New York | Practical AI for NYC Businesses',
    description: 'AI automation agency serving New York businesses. We help NYC service businesses reduce manual workload through practical AI automation.',
    url: 'https://aiautomationagencynewyork.com',
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
    canonical: 'https://aiautomationagencynewyork.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// Organization + Service Schema for NYC AI Automation (remote-first)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://aiautomationagencynewyork.com/#organization',
      name: 'AI Automation Agency New York',
      alternateName: 'NYC AI Automation',
      description: 'AI automation agency serving New York businesses remotely. We help NYC service businesses reduce manual workload through practical AI automation.',
      url: 'https://aiautomationagencynewyork.com',
      telephone: '+1-646-814-2452',
      email: 'info@owntheclimb.com',
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
      '@type': 'Service',
      '@id': 'https://aiautomationagencynewyork.com/#service-ai-agents',
      name: 'AI Agents & Chatbots',
      serviceType: 'AI Agent Development',
      provider: {
        '@id': 'https://aiautomationagencynewyork.com/#organization',
      },
      areaServed: { '@type': 'City', name: 'New York City' },
      description: 'AI agents and chatbots for lead qualification, customer support automation, and appointment scheduling for NYC businesses.',
      url: 'https://aiautomationagencynewyork.com/ai-agents-nyc/',
    },
    {
      '@type': 'Service',
      '@id': 'https://aiautomationagencynewyork.com/#service-workflow',
      name: 'Workflow Automation',
      serviceType: 'Business Process Automation',
      provider: {
        '@id': 'https://aiautomationagencynewyork.com/#organization',
      },
      areaServed: { '@type': 'City', name: 'New York City' },
      description: 'Workflow automation including CRM sync, document processing, and data entry elimination for New York businesses.',
      url: 'https://aiautomationagencynewyork.com/workflow-automation-nyc/',
    },
    {
      '@type': 'Service',
      '@id': 'https://aiautomationagencynewyork.com/#service-custom',
      name: 'Custom AI Solutions',
      serviceType: 'Custom AI Development',
      provider: {
        '@id': 'https://aiautomationagencynewyork.com/#organization',
      },
      areaServed: { '@type': 'City', name: 'New York City' },
      description: 'Bespoke AI applications, custom dashboards, private GPT deployments, and industry-specific AI tools for NYC businesses.',
      url: 'https://aiautomationagencynewyork.com/custom-ai-solutions-nyc/',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://aiautomationagencynewyork.com/#webpage',
      url: 'https://aiautomationagencynewyork.com',
      name: 'AI Automation Agency New York | Practical AI for NYC Businesses',
      description: 'AI automation agency serving New York businesses. We help NYC service businesses reduce manual workload through practical AI automation.',
      isPartOf: {
        '@id': 'https://aiautomationagencynewyork.com/#website',
      },
      about: {
        '@id': 'https://aiautomationagencynewyork.com/#organization',
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
            text: 'AI automation projects for NYC businesses typically range from $3,500 for basic workflow automation to $25,000+ for more complex AI agent deployments. Pricing varies by scope and complexity. We offer free consultations to assess your specific needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to implement AI automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most AI automation projects are completed within 2-8 weeks. Simple workflow automations can sometimes be live within days, while complex AI agent systems may take 4-8 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with businesses outside Manhattan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We serve NYC businesses across all five boroughs—Manhattan, Brooklyn, Queens, the Bronx, and Staten Island—plus Long Island, Westchester, and New Jersey. We work remotely with on-site visits as needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries do you specialize in for AI automation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work with NYC service businesses across various industries including professional services, healthcare, real estate, legal, and e-commerce. Our AI solutions are customized to your specific workflows and compliance requirements.',
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
