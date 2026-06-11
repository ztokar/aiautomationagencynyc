import Faq from '../components/Faq'

const CANONICAL = 'https://www.aiautomationagencynewyork.com/workflow-automation-nyc'

export const metadata = {
  title: 'Workflow Automation for NYC Businesses | Kill Data Entry & Sync Your Tools',
  description:
    'AI Automation Agency New York connects the tools your business already uses so invoices, CRM updates, and follow-ups run on their own. Workflow automation live in 2–6 weeks.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Workflow Automation for New York Businesses',
    description:
      'Connect your CRM, invoicing, and tools so repetitive tasks run on their own. Workflow automation for NYC service businesses.',
    url: CANONICAL,
    siteName: 'AI Automation Agency New York',
    type: 'website',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'What is workflow automation, in plain terms?',
    a: "It's connecting the apps your business already uses so they pass information to each other automatically. When a deal closes, the invoice, the CRM update, and the welcome email all happen on their own, instead of someone copying data between tabs.",
  },
  {
    q: 'Do you use tools like Zapier, Make, and n8n, or custom code?',
    a: "Both, depending on the job. For straightforward connections we use platforms like Zapier, Make, or n8n because they're fast and easy to maintain. For higher volume or sensitive data, we build custom integrations that you fully control. We pick the option that fits your budget and your stack, not ours.",
  },
  {
    q: 'Will it work with the software my NYC team already has?',
    a: 'In most cases, yes. We work with common tools like QuickBooks, HubSpot, Salesforce, Google Workspace, Monday, and hundreds of others. If a tool has an integration or an API, we can usually connect it. We confirm this during the free audit before you commit.',
  },
  {
    q: 'How much time can workflow automation actually save?',
    a: "It depends on how much manual copying your team does now. Businesses we talk to often have one person spending several hours a day moving data between systems. Automating that frees the hours, and it also kills the typos and missed steps that come with manual entry.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': CANONICAL + '#service',
      name: 'Workflow Automation',
      serviceType: 'Business Process Automation',
      provider: { '@id': 'https://www.aiautomationagencynewyork.com/#organization' },
      areaServed: { '@type': 'City', name: 'New York City' },
      description:
        'Workflow automation including CRM sync, document processing, invoicing, and data-entry elimination for New York businesses.',
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aiautomationagencynewyork.com' },
        { '@type': 'ListItem', position: 2, name: 'Workflow Automation NYC', item: CANONICAL },
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

export default function WorkflowAutomationNyc() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '3rem' }}>
        <div className="glow-accent" style={{ top: '-200px', right: '-120px', opacity: 0.4 }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
            <a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a> <span>/</span> Workflow Automation
          </nav>
          <div style={{ maxWidth: '760px' }}>
            <span className="badge" style={{ marginBottom: '1.5rem' }}>Workflow Automation</span>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Workflow Automation for <span className="text-gradient">New York</span> Businesses
            </h1>
            <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: 1.6, marginBottom: '2rem' }}>
              We connect the tools your New York business already uses so invoices, CRM updates, and follow-ups
              happen on their own, not by hand.
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
              Workflow automation means your apps talk to each other so your team stops copying data between them.
              A deal closes, and the invoice, CRM record, and onboarding email all fire on their own.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              In a high-cost city like New York, paying a skilled person to do data entry is expensive and easy to
              get wrong. Every manual hand-off is a chance for a typo, a missed step, or a dropped follow-up.
            </p>
            <p>
              <strong>AI Automation Agency New York</strong> maps the busywork your team does today, then wires your
              tools together so the repetitive parts run without anyone touching them.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">What We Automate</span>
            <h2>Common Workflows We Build for NYC Teams</h2>
            <p>The boring, repeatable work that eats your team&apos;s day is exactly what automation does best.</p>
          </div>
          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>CRM &amp; Sales Sync</h3>
              <p>New leads, notes, and deal stages update across your CRM, email, and calendar without manual entry.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Invoicing &amp; Payments</h3>
              <p>Invoices generate, send, and chase themselves when a job is marked done. Fewer late payments, less chasing.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Document Processing</h3>
              <p>Pull data off PDFs, intake forms, and emails, then drop it into the right system automatically.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Onboarding &amp; Reporting</h3>
              <p>Client onboarding steps and weekly reports run on a schedule, so nothing slips through the cracks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE: manual vs automated */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="badge">Before &amp; After</span>
            <h2>Manual Task vs. Automated Workflow</h2>
          </div>
          <div style={{ maxWidth: '820px', margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-accent)' }}>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Task</th>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Done by hand</th>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Automated</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['New lead intake', 'Copy form into CRM, assign, email back', 'Instant, routed, replied automatically'],
                  ['Invoicing', 'Build and send each invoice manually', 'Generated and chased on job completion'],
                  ['Data between apps', 'Re-type into each system', 'Synced live across every tool'],
                  ['Status reports', 'Pull numbers, format, send', 'Built and delivered on schedule'],
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
            <h2>How We Build Your Automations</h2>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="process-step" data-step="1" style={{ paddingBottom: '2.5rem' }}>
              <h3>We watch how work flows now</h3>
              <p>We map the steps your team repeats every week and find the ones costing the most time and errors.</p>
            </div>
            <div className="process-step" data-step="2" style={{ paddingBottom: '2.5rem' }}>
              <h3>We connect your tools</h3>
              <p>We wire your apps together with the right mix of no-code platforms and custom code, then test it on real data.</p>
            </div>
            <div className="process-step" data-step="3">
              <h3>We hand it off and monitor</h3>
              <p>You get a workflow that runs quietly in the background, with monitoring so you know it keeps working.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HONEST */}
      <section>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '1.25rem' }}>Straight Talk</span>
            <h2 style={{ marginBottom: '1.25rem' }}>When to Hold Off on Automation</h2>
            <p style={{ marginBottom: '1rem' }}>
              If a process is still changing every week, or nobody can explain how it actually works, automating it
              just locks in the chaos. The fix there is to clean up the process first.
            </p>
            <p>
              We will say so on the call. Sometimes the right first step is documenting one workflow, not automating
              five. We would rather build one thing that sticks than a pile of automations you fight with.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem', background: 'var(--bg-tertiary)', borderRadius: '16px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>What Workflow Automation Costs</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              A single connected workflow often starts around <strong>$3,500</strong>. Multi-system automation across
              your whole operation runs higher. See our{' '}
              <a href="/ai-automation-cost-nyc" style={{ color: 'var(--accent-primary)' }}>AI automation cost guide</a> for real numbers.
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
            <h2>Workflow Automation Questions, Answered</h2>
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
            <a href="/custom-ai-solutions-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Custom AI Solutions →</h3>
              <p>Bespoke AI tools and dashboards built around how your team works.</p>
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
