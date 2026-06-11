import Faq from '../components/Faq'

const CANONICAL = 'https://www.aiautomationagencynewyork.com/ai-automation-cost-nyc'

export const metadata = {
  title: 'How Much Does AI Automation Cost in NYC? | 2026 Pricing Guide',
  description:
    'AI automation in NYC typically costs $3,500 for a single workflow up to $25,000+ for custom AI builds. Here is what drives the price and how to tell what you actually need.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'How Much Does AI Automation Cost in NYC?',
    description:
      'Real AI automation pricing for New York businesses, from $3,500 workflows to $25,000+ custom builds, and what drives the cost.',
    url: CANONICAL,
    siteName: 'AI Automation Agency New York',
    type: 'article',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'Why is there such a wide price range for AI automation?',
    a: 'Because "AI automation" covers everything from connecting two apps to building custom software. A single workflow is a few thousand dollars. A custom AI platform with integrations and compliance is tens of thousands. The price tracks the complexity and how much sensitive data is involved.',
  },
  {
    q: 'Do you charge monthly or one-time?',
    a: 'Most projects are milestone-based, so you pay as we deliver, not all up front. Some clients add a monthly retainer for monitoring and ongoing improvements, but that is optional. We are clear about which is which before you commit.',
  },
  {
    q: 'How do I know if automation will pay for itself?',
    a: "Add up the hours your team spends on the repetitive task and multiply by their loaded hourly cost. If automation removes most of those hours, it usually pays back within months. We run that math with you on the free audit before you spend anything.",
  },
  {
    q: 'What is the cheapest way to start?',
    a: 'Start with one painful, repeatable task instead of automating everything at once. A single workflow or a focused bot in the $3,500 range gets you a quick win and proves the value before you scale up.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': CANONICAL + '#article',
      headline: 'How Much Does AI Automation Cost in NYC?',
      description:
        'AI automation pricing for New York businesses, from single workflows to custom AI builds, and what drives the cost.',
      author: { '@id': 'https://www.aiautomationagencynewyork.com/#organization' },
      publisher: { '@id': 'https://www.aiautomationagencynewyork.com/#organization' },
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aiautomationagencynewyork.com' },
        { '@type': 'ListItem', position: 2, name: 'AI Automation Cost NYC', item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function AiAutomationCostNyc() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '3rem' }}>
        <div className="glow-accent" style={{ top: '-200px', right: '-120px', opacity: 0.4 }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
            <a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a> <span>/</span> AI Automation Cost
          </nav>
          <div style={{ maxWidth: '760px' }}>
            <span className="badge" style={{ marginBottom: '1.5rem' }}>Pricing Guide</span>
            <h1 style={{ marginBottom: '1.25rem' }}>
              How Much Does <span className="text-gradient">AI Automation</span> Cost in NYC?
            </h1>
            <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: 1.6, marginBottom: '2rem' }}>
              AI automation in New York typically costs <strong>$3,500 for a single workflow</strong> up to{' '}
              <strong>$25,000+ for a custom AI build</strong>. What you pay tracks the complexity and how much
              sensitive data is involved.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/#contact" className="btn btn-primary">Get a Custom Quote</a>
              <a href="tel:+16468142452" className="btn btn-secondary">Call (646) 814-2452</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto 2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Here is the honest version most agencies will not put on a page. Pricing depends on what you are
              automating, not on a flat package. The ranges below are what NYC businesses actually pay.
            </p>
          </div>
          <div style={{ maxWidth: '820px', margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-accent)' }}>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Project type</th>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Typical price</th>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Best for</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single workflow or simple bot', '$3,500 – $8,000', 'One painful, repeatable task'],
                  ['Full AI agent or multi-workflow system', '$8,000 – $25,000', 'Automating a whole function'],
                  ['Custom AI platform / compliance build', '$25,000+', 'Sensitive data, custom software'],
                  ['Monitoring & optimization (optional)', 'Monthly retainer', 'Ongoing tuning and support'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '0.875rem 1rem', color: j === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHAT DRIVES COST */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Cost Drivers</span>
            <h2>What Actually Moves the Price</h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Number of integrations</h3>
              <p>Connecting two tools is cheap. Tying together your CRM, billing, calendar, and phone costs more.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>How clean your process is</h3>
              <p>A documented workflow is fast to automate. A messy, undocumented one needs cleanup first.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Compliance &amp; data sensitivity</h3>
              <p>HIPAA, finance, and legal builds need extra security and testing, which adds to the price.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Custom vs off-the-shelf</h3>
              <p>Using existing platforms is cheaper. Building software that does not exist yet costs more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI MATH */}
      <section>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '1.25rem' }}>The ROI Math</span>
            <h2 style={{ marginBottom: '1.25rem' }}>Will It Pay for Itself?</h2>
            <p style={{ marginBottom: '1rem' }}>
              Here is a simple, illustrative example. Say one admin role costs you about $50 an hour fully loaded, and
              spends 10 hours a week on a task automation can handle.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              That is roughly $500 a week, or about $26,000 a year, in time spent on work a machine can do. A workflow
              that removes most of it can pay for itself in months, then keeps saving after that.
            </p>
            <p>
              These are example numbers, not a promise about your business. On the free audit, we run the real math
              with your actual hours and rates so you can decide with eyes open.
            </p>
          </div>
        </div>
      </section>

      {/* SCOPE BY SERVICE */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Scope by Service</span>
            <h2>Pricing by What You Need</h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <a href="/ai-agents-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>AI Agents &amp; Chatbots →</h3>
              <p>From $3,500 for a focused bot. Lead, support, and booking agents that run 24/7.</p>
            </a>
            <a href="/workflow-automation-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Workflow Automation →</h3>
              <p>From $3,500 per connected workflow. Kill data entry and sync your tools.</p>
            </a>
            <a href="/custom-ai-solutions-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Custom AI Solutions →</h3>
              <p>$8,000–$25,000+. Private GPT, dashboards, and software built for you.</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="badge">FAQ</span>
            <h2>AI Automation Cost Questions, Answered</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Want a Real Number for Your Business?</h2>
            <p style={{ marginBottom: '2rem' }}>
              Tell us the task that is eating your team&apos;s time. We will scope it and give you an honest quote, no
              pressure and no enterprise fluff.
            </p>
            <a href="/#contact" className="btn btn-primary">Book Your Free Audit</a>
          </div>
        </div>
      </section>
    </main>
  )
}
