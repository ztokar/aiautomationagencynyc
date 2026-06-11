import Faq from '../components/Faq'

const CANONICAL = 'https://www.aiautomationagencynewyork.com/ai-agents-nyc'

export const metadata = {
  title: 'AI Agents & Chatbots for New York Businesses | 24/7 Lead, Support & Booking Bots',
  description:
    'AI Automation Agency New York builds AI agents and chatbots that qualify leads, book appointments, and answer support 24/7 for NYC service businesses. Live in 2–6 weeks.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'AI Agents & Chatbots for New York Businesses',
    description:
      'AI agents that qualify leads, book appointments, and handle support around the clock for NYC service businesses.',
    url: CANONICAL,
    siteName: 'AI Automation Agency New York',
    type: 'website',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'Will an AI chatbot sound robotic to my customers?',
    a: "Not if it's built right. We train your agent on your real services, pricing, and tone, so it answers like a member of your team. It can hand off to a person the moment a question gets too specific, so customers never hit a dead end.",
  },
  {
    q: 'Can the AI agent book into my calendar and update my CRM?',
    a: 'Yes. We connect the agent to the tools you already use, like Google Calendar, Calendly, HubSpot, or your booking system. When someone books or asks a question, your calendar and CRM update on their own, with no manual entry.',
  },
  {
    q: 'Is customer data secure? We handle sensitive information.',
    a: "We build with encryption, access controls, and audit logging by default. For NYC healthcare, legal, and finance clients, we offer HIPAA-compliant setups and private AI deployments so your data never goes to a public model. We'll match the build to your compliance needs.",
  },
  {
    q: 'How long until an AI agent is live for my NYC business?',
    a: 'A focused agent, like a lead-qualification or booking bot, is usually live in 2–4 weeks. Multi-channel agents with deeper integrations take 4–8 weeks. We get a working version in front of you early so you can test it on real conversations.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': CANONICAL + '#service',
      name: 'AI Agents & Chatbots',
      serviceType: 'AI Agent Development',
      provider: { '@id': 'https://www.aiautomationagencynewyork.com/#organization' },
      areaServed: { '@type': 'City', name: 'New York City' },
      description:
        'AI agents and chatbots for lead qualification, customer support, and appointment scheduling for New York service businesses.',
      url: CANONICAL,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aiautomationagencynewyork.com' },
        { '@type': 'ListItem', position: 2, name: 'AI Agents & Chatbots NYC', item: CANONICAL },
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

export default function AiAgentsNyc() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingBottom: '3rem' }}>
        <div className="glow-accent" style={{ top: '-200px', right: '-120px', opacity: 0.4 }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
            <a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a> <span>/</span> AI Agents &amp; Chatbots
          </nav>
          <div style={{ maxWidth: '760px' }}>
            <span className="badge" style={{ marginBottom: '1.5rem' }}>AI Agents &amp; Chatbots</span>
            <h1 style={{ marginBottom: '1.25rem' }}>
              AI Agents &amp; Chatbots for <span className="text-gradient">New York</span> Businesses
            </h1>
            <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: 1.6, marginBottom: '2rem' }}>
              We build AI agents that qualify your leads, book appointments, and answer support questions 24/7,
              so your New York business stops losing customers after hours.
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
              An AI agent is software that talks to your customers like a trained team member. It answers their
              questions and books jobs straight onto your calendar, day or night.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Most NYC service businesses lose work the same way. Someone fills out a form at 9pm, nobody replies
              until morning, and by then they have already called a competitor. An AI agent closes that gap.
            </p>
            <p>
              <strong>AI Automation Agency New York</strong> builds these agents to fit how your team already works,
              trains them on your real services and pricing, then hands you something that runs on its own.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">What We Build</span>
            <h2>Types of AI Agents for NYC Businesses</h2>
            <p>Not every business needs the same bot. We build the one that fits your real bottleneck.</p>
          </div>
          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Lead Qualification Bots</h3>
              <p>Greet website visitors, ask the right questions, and route hot leads to your team while filtering out tire-kickers.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Appointment Booking Agents</h3>
              <p>Let customers book, reschedule, and get reminders on their own, synced straight to your calendar and CRM.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Customer Support Assistants</h3>
              <p>Answer the same FAQs your team types out fifty times a day, and escalate to a human when it matters.</p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>AI Voice &amp; Internal Agents</h3>
              <p>Voice agents that answer the phone, plus internal assistants that pull answers from your own documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="badge">Where It Fits</span>
            <h2>Best-Fit AI Agents by Business Type</h2>
          </div>
          <div style={{ maxWidth: '820px', margin: '0 auto', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-accent)' }}>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>NYC business</th>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>Best-fit agent</th>
                  <th style={{ textAlign: 'left', padding: '0.875rem 1rem', color: 'var(--accent-primary)' }}>What it handles</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Law firm', 'Intake assistant', 'Screen new matters, collect details, schedule consults'],
                  ['Medical / dental office', 'Booking agent (HIPAA-ready)', 'Appointments, reminders, insurance pre-checks'],
                  ['Real estate team', 'Lead follow-up bot', 'Qualify buyers, answer listing questions, book showings'],
                  ['Home services', 'Voice + chat agent', 'Capture jobs after hours, dispatch, send quotes'],
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
            <h2>From First Call to Live Agent</h2>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="process-step" data-step="1" style={{ paddingBottom: '2.5rem' }}>
              <h3>We map your conversations</h3>
              <p>We look at the questions, bookings, and follow-ups your team handles by hand, and find where an agent saves the most time.</p>
            </div>
            <div className="process-step" data-step="2" style={{ paddingBottom: '2.5rem' }}>
              <h3>We build and train it on your info</h3>
              <p>The agent learns your services, pricing, and tone, then connects to your calendar, CRM, and booking tools.</p>
            </div>
            <div className="process-step" data-step="3">
              <h3>We launch and keep tuning</h3>
              <p>You test it on real chats, we fix the rough edges, and we monitor it after launch so it keeps getting better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HONEST */}
      <section>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="badge" style={{ marginBottom: '1.25rem' }}>Straight Talk</span>
            <h2 style={{ marginBottom: '1.25rem' }}>When an AI Agent Isn&apos;t the Right Move</h2>
            <p style={{ marginBottom: '1rem' }}>
              If you get a handful of leads a week, a chatbot is overkill. And if every customer question needs real
              human judgment, a bot in front of it can do more harm than good.
            </p>
            <p>
              We will tell you that on the first call. We would rather point you to a simpler fix than sell you an
              agent you do not need. When an AI agent does fit, it is one of the fastest ways to stop leaking revenue.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING NOTE */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem', background: 'var(--bg-tertiary)', borderRadius: '16px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>What an AI Agent Costs</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              A focused agent, like a lead or booking bot, typically starts around <strong>$3,500</strong>. Multi-channel
              agents with deeper integrations and compliance run <strong>$8,000 to $25,000+</strong>. See our{' '}
              <a href="/ai-automation-cost-nyc" style={{ color: 'var(--accent-primary)' }}>full AI automation cost guide</a> for the breakdown.
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
            <h2>AI Agent Questions, Answered</h2>
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
            <a href="/workflow-automation-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Workflow Automation →</h3>
              <p>Connect your tools so data entry, invoicing, and follow-ups happen on their own.</p>
            </a>
            <a href="/custom-ai-solutions-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Custom AI Solutions →</h3>
              <p>Bespoke AI tools, dashboards, and private GPT builds for how your team works.</p>
            </a>
            <a href="/ai-automation-cost-nyc" className="card" style={{ color: 'inherit' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>AI Automation Cost →</h3>
              <p>What automation really costs in NYC, and how to tell what you actually need.</p>
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
