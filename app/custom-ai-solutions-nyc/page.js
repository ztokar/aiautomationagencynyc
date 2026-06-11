import Faq from '../components/Faq'

const CANONICAL = 'https://www.aiautomationagencynewyork.com/custom-ai-solutions-nyc'

export const metadata = {
  title: 'Custom AI Solutions & Development NYC | Private GPT, Dashboards & AI Tools',
  description:
    'AI Automation Agency New York builds custom AI software for NYC businesses: private GPT deployments, internal dashboards, and industry-specific AI tools built around your workflow.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Custom AI Solutions for New York Businesses',
    description:
      'Private GPT deployments, custom dashboards, and industry-specific AI tools built around how your NYC team works.',
    url: CANONICAL,
    siteName: 'AI Automation Agency New York',
    type: 'website',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'What counts as a custom AI solution?',
    a: "Anything off-the-shelf tools can't do well. That includes a private chatbot trained only on your documents, an internal dashboard that pulls AI insights from your data, or a tool built for your specific industry workflow. If a product to do it doesn't exist, we build it.",
  },
  {
    q: 'What is a private GPT deployment, and why would I want one?',
    a: "It's an AI assistant that runs on your own data without sending it to a public model like the consumer version of ChatGPT. NYC finance, legal, and healthcare teams use it so staff get AI help while sensitive information stays locked down and compliant.",
  },
  {
    q: 'Do I own the software you build?',
    a: 'Yes. We build it around your business, document how it works, and hand it over so you are never trapped. You can run it yourself, or keep us on for monitoring and improvements. That is your call, not a lock-in clause.',
  },
  {
    q: 'How long does a custom AI build take?',
    a: 'A focused tool or dashboard is usually 4–6 weeks. Larger platforms with multiple integrations and compliance requirements take 6–8 weeks or more. We work in short sprints with demos so you see progress and can adjust as we go.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': CANONICAL + '#service',
      name: 'Custom AI Solutions',
      serviceType: 'Custom AI Development',
      provider: { '@id': 'https://www.aiautomationagencynewyork.com/#organization' },
      areaServed: { '@type': 'City', name: 'New York City' },
      description:
        'Bespoke AI applications, custom dashboards, private GPT deployments, and industry-specific AI tools for New York businesses.',
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aiautomationagencynewyork.com' },
        { '@type': 'ListItem', position: 2, name: 'Custom AI Solutions NYC', item: CANONICAL },
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

export default function CustomAiSolutionsNyc() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '3rem' }}>
        <div className="glow-accent" style={{ top: '-200px', right: '-120px', opacity: 0.4 }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
            <a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a> <span>/</span> Custom AI Solutions
          </nav>
          <div style={{ maxWidth: '760px' }}>
            <span className="badge" style={{ marginBottom: '1.5rem' }}>Custom AI Solutions</span>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Custom AI Solutions for <span className="text-gradient">New York</span> Businesses
            </h1>
            <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: 1.6, marginBottom: '2rem' }}>
              When off-the-shelf tools do not fit, we build custom AI software around how your New York team actually
              works, from private GPT deployments to internal dashboards.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/#contact" className="btn btn-primary">Free AI Opportunity Audit</a>
              <a href="tel:+16468142452" className="btn btn-secondary">Call (646) 814-2452</a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / ANSWER */}
      <section style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              A custom AI solution is software built for one thing: the job no off-the-shelf product does well for you.
              That might be a private chatbot trained on your files, a dashboard that reads your data, or a tool made
              for your industry.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Plenty of NYC businesses have a workflow that no app on the market matches. They end up forcing their
              process into a tool that almost fits, or doing it by hand.
            </p>
            <p>
              <strong>AI Automation Agency New York</strong> builds the missing piece, on your data and your rules,
              then hands it to you with documentation so you own what we build.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">What We Build</span>
            <h2>Custom AI We Build for NYC Businesses</h2>
            <p>If it would save your team real time and no product does it, it is probably worth building.</p>
          </div>
          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Private GPT Deployments</h3>
              <p>An AI assistant trained on your own documents that keeps sensitive data off public models.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Custom Dashboards &amp; Portals</h3>
              <p>Internal tools that pull your data together and surface the AI insights your team needs to act.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Industry-Specific AI Tools</h3>
              <p>Software shaped to one workflow, like case review for legal or intake for healthcare.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>API &amp; System Integrations</h3>
              <p>Custom connections between AI models and the systems you already depend on every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="badge">Off-the-Shelf vs Custom</span>
            <h2>When Custom AI Beats a Ready-Made Tool</h2>
          </div>
          <div style={{ maxWidth: '820px', margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-accent)' }}>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Your situation</th>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Off-the-shelf</th>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Custom build</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sensitive client data', 'Sends data to a public model', 'Runs private, on your rules'],
                  ['Unusual workflow', 'You bend your process to fit', 'Built to match how you work'],
                  ['Multiple systems', 'Limited or no integration', 'Connected end to end'],
                  ['Ownership', 'Monthly fees, vendor lock-in', 'You own and control it'],
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

      {/* HOW IT WORKS */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">How It Works</span>
            <h2>How We Build Custom AI</h2>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="process-step" data-step="1" style={{ paddingBottom: '2.5rem' }}>
              <h3>We scope the real problem</h3>
              <p>We dig into the workflow you are trying to fix and confirm custom is the right call before building anything.</p>
            </div>
            <div className="process-step" data-step="2" style={{ paddingBottom: '2.5rem' }}>
              <h3>We build in sprints</h3>
              <p>You approve the approach, then we build in short sprints with regular demos so there are no surprises.</p>
            </div>
            <div className="process-step" data-step="3">
              <h3>We hand it over, documented</h3>
              <p>You get working software, documentation, and the option to keep us on for monitoring and upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HONEST */}
      <section>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '1.25rem' }}>Straight Talk</span>
            <h2 style={{ marginBottom: '1.25rem' }}>When You Don&apos;t Need Custom AI</h2>
            <p style={{ marginBottom: '1rem' }}>
              Custom is not always the answer. If a $50-a-month tool already does the job, building your own is a
              waste of money, and we will point you to the tool instead.
            </p>
            <p>
              Custom AI earns its cost when your data is sensitive, your workflow is unusual, or no product fits. When
              that is true, owning the right tool pays for itself fast.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem', background: 'var(--bg-tertiary)', borderRadius: '16px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>What Custom AI Costs</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Custom builds typically run <strong>$8,000 to $25,000+</strong>, depending on scope, integrations, and
              compliance. See our{' '}
              <a href="/ai-automation-cost-nyc" style={{ color: 'var(--accent-primary)' }}>AI automation cost guide</a> to scope your project.
            </p>
            <a href="/#contact" className="btn btn-primary">Get a Custom Quote</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="badge">FAQ</span>
            <h2>Custom AI Questions, Answered</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* RELATED + CTA */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Related Services</span>
            <h2>Keep Automating</h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto 3rem' }}>
            <a href="/ai-agents-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>AI Agents &amp; Chatbots →</h3>
              <p>Bots that qualify leads, book jobs, and answer support around the clock.</p>
            </a>
            <a href="/workflow-automation-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Workflow Automation →</h3>
              <p>Connect your tools so data entry, invoicing, and follow-ups run on their own.</p>
            </a>
            <a href="/ai-automation-cost-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>AI Automation Cost →</h3>
              <p>What automation really costs in NYC, and how to scope your first project.</p>
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/#contact" className="btn btn-primary">Book Your Free Audit</a>
          </div>
        </div>
      </section>
    </main>
  )
}
