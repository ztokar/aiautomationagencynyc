'use client'

import { useState } from 'react'

// Icons as inline SVGs for performance
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
  </svg>
)

const ChevronIcon = ({ isOpen }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
  >
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

// Service icons
const BotIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
)

const WorkflowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-8 4 5 5-9" />
  </svg>
)

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
)

const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.5" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.5" />
  </svg>
)

const RocketIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

// FAQ Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <ChevronIcon isOpen={isOpen} />
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  )
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    window.location.href = `mailto:info@owntheclimb.com?subject=AI Automation Inquiry from ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`
  }

  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background glow effects */}
        <div
          className="glow-accent"
          style={{ top: '-200px', right: '-100px', opacity: 0.5 }}
          aria-hidden="true"
        />
        <div
          className="glow-accent"
          style={{ bottom: '-150px', left: '-150px', opacity: 0.3 }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            {/* Trust badge */}
            <div className="badge animate-in" style={{ marginBottom: '1.5rem' }}>
              <StarIcon />
              <span>5.0 Rated • Trusted by NYC Businesses</span>
            </div>

            {/* H1 with primary keyword */}
            <h1 className="animate-in delay-1" style={{ marginBottom: '1.5rem' }}>
              AI Automation Agency{' '}
              <span className="text-gradient">New York</span>
            </h1>

            {/* Subheadline with value proposition */}
            <p
              className="animate-in delay-2"
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '650px'
              }}
            >
              Your team spends how many hours on data entry? Scheduling? Chasing invoices?
              We build AI systems that handle that stuff so you can stop bleeding money.
              One client cut 23 hours of weekly admin work down to 2. That's real.
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-in delay-3"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}
            >
              <a href="#contact" className="btn btn-primary">
                Get Your Free Consultation
              </a>
              <a href="tel:+14432652667" className="btn btn-secondary">
                Call (443) 265-2667
              </a>
            </div>

            {/* Trust indicators */}
            <div className="trust-bar animate-in delay-4">
              <div className="trust-item">
                <CheckIcon />
                <span>Free Strategy Call</span>
              </div>
              <div className="trust-item">
                <CheckIcon />
                <span>NYC-Based Team</span>
              </div>
              <div className="trust-item">
                <CheckIcon />
                <span>ROI in 90 Days</span>
              </div>
              <div className="trust-item">
                <CheckIcon />
                <span>HIPAA Compliant Options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section style={{ background: 'var(--bg-secondary)', padding: '3rem 0' }}>
        <div className="container">
          <div className="grid-4">
            <div className="stat-block">
              <div className="stat-number">60%</div>
              <div className="stat-label">Average Cost Reduction</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">10-100x</div>
              <div className="stat-label">Workflow Speed Increase</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">15+</div>
              <div className="stat-label">NYC Businesses Served</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">99.98%</div>
              <div className="stat-label">Data Processing Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTRODUCTION & SERVICE OVERVIEW ==================== */}
      <section id="about-services">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge" style={{ marginBottom: '1.5rem' }}>
              AI Automation for NYC
            </span>
            <h2 style={{ marginBottom: '1.5rem' }}>
              Why New York Businesses Choose Us for AI Automation
            </h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Running a business in New York? You already know the drill. Rent's insane. Good employees
              cost a fortune. And your competition isn't sleeping. So here's my question: why is your
              $85k/year operations person still copy-pasting data between spreadsheets at 4pm on a Friday?
            </p>
            <p style={{ marginBottom: '2rem' }}>
              We're an <strong>AI automation agency in New York</strong> that does one thing well: we
              make your business run leaner. Brooklyn startup burning cash? Manhattan law firm buried
              in documents? We've seen it. We build AI that works in the real world, not just impressive
              demos that get filed away and forgotten.
            </p>
            <p>
              One of our real estate clients used to spend 6 hours daily on lead follow-up. Now? 40 minutes.
              Their AI handles the initial outreach, qualifies prospects, and only escalates the hot ones.
              That's not hypothetical ROI. That's their Tuesday.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE DETAILS ==================== */}
      <section id="services" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Our Services</span>
            <h2>AI Automation Services for New York Businesses</h2>
            <p>
              Not every problem needs a $50k AI solution. Sometimes it's a $3k workflow that saves you
              15 hours a week. We figure out which one you actually need.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="service-icon"><BotIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>AI Agents & Chatbots</h3>
              <p style={{ marginBottom: '1rem' }}>
                Picture this: it's 2am and someone's on your website ready to book. Your AI agent
                qualifies them, answers questions, and schedules for Monday morning. You wake up
                to a booked calendar. No missed leads at 2am anymore.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• Customer support automation</li>
                <li>• Lead qualification bots</li>
                <li>• Appointment scheduling AI</li>
                <li>• Internal knowledge assistants</li>
              </ul>
            </div>

            <div className="card">
              <div className="service-icon"><WorkflowIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>Workflow Automation</h3>
              <p style={{ marginBottom: '1rem' }}>
                Your sales rep closes a deal. The invoice generates automatically. Client info syncs
                to your CRM. Onboarding email goes out. All before they've finished their coffee.
                That's what we build.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• CRM automation & sync</li>
                <li>• Document processing</li>
                <li>• Data entry elimination</li>
                <li>• Report generation</li>
              </ul>
            </div>

            <div className="card">
              <div className="service-icon"><CodeIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>Custom AI Solutions</h3>
              <p style={{ marginBottom: '1rem' }}>
                Bespoke AI applications built specifically for your business. Portals, dashboards,
                and tools that give you a competitive edge nobody else has.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• Custom AI dashboards</li>
                <li>• Private GPT deployments</li>
                <li>• Industry-specific AI tools</li>
                <li>• API integrations</li>
              </ul>
            </div>

            <div className="card">
              <div className="service-icon"><BrainIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>AI Strategy & Training</h3>
              <p style={{ marginBottom: '1rem' }}>
                Not sure where to start? We audit your operations, identify the highest-ROI automation
                opportunities, and train your team to leverage AI effectively.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• AI readiness assessments</li>
                <li>• ROI opportunity mapping</li>
                <li>• Team training workshops</li>
                <li>• Executive AI briefings</li>
              </ul>
            </div>

            <div className="card">
              <div className="service-icon"><RocketIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>Rapid Implementation</h3>
              <p style={{ marginBottom: '1rem' }}>
                Most NYC agencies want 6-month contracts before they even start. We ship working
                automations in weeks, not quarters. Agile methodology, real results.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• 2-8 week delivery</li>
                <li>• Milestone-based pricing</li>
                <li>• Quick wins first approach</li>
                <li>• Ongoing optimization</li>
              </ul>
            </div>

            <div className="card">
              <div className="service-icon"><ShieldIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>Compliance & Security</h3>
              <p style={{ marginBottom: '1rem' }}>
                NYC's regulated industries need AI that plays by the rules. We build HIPAA-compliant,
                SOC 2-ready systems that won't land you in hot water.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• HIPAA compliance</li>
                <li>• Data privacy controls</li>
                <li>• Audit trails</li>
                <li>• Enterprise security</li>
              </ul>
            </div>
          </div>

          {/* Pricing guidance */}
          <div
            style={{
              marginTop: '4rem',
              padding: '2rem',
              background: 'var(--bg-tertiary)',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ marginBottom: '1rem' }}>Transparent Pricing for NYC Businesses</h3>
            <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem' }}>
              Basic workflow automations start around <strong>$3,500</strong>. Full AI agent deployments
              range from <strong>$8,000 to $25,000+</strong> depending on complexity. We'll give you an
              honest quote after understanding your actual needs—no bait-and-switch.
            </p>
            <a href="#contact" className="btn btn-primary">Get a Custom Quote</a>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section id="process">
        <div className="container">
          <div className="section-header">
            <span className="badge">How It Works</span>
            <h2>Our AI Automation Process</h2>
            <p>
              We've done this enough times to know what works. Here's exactly what happens when you
              work with us.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="process-step" data-step="1" style={{ paddingBottom: '2.5rem' }}>
              <h3>Discovery Call</h3>
              <p>
                We jump on a 30-minute call to understand your business, pain points, and goals.
                No sales pitch—just honest assessment of whether AI automation makes sense for you.
              </p>
            </div>

            <div className="process-step" data-step="2" style={{ paddingBottom: '2.5rem' }}>
              <h3>Operations Audit</h3>
              <p>
                We dig into how your team actually works. Not how they should work, how they do work.
                Then we show you where the easy wins are. "Automate this first, you'll save 10 hours a week."
              </p>
            </div>

            <div className="process-step" data-step="3" style={{ paddingBottom: '2.5rem' }}>
              <h3>Solution Design</h3>
              <p>
                We architect your custom AI solution—whether that's an AI agent, workflow automation,
                or integrated system. You approve the approach before we write a single line of code.
              </p>
            </div>

            <div className="process-step" data-step="4" style={{ paddingBottom: '2.5rem' }}>
              <h3>Build & Deploy</h3>
              <p>
                Our team builds and deploys your solution in 2-8 weeks. We use agile sprints with
                regular demos so you see progress and can course-correct if needed.
              </p>
            </div>

            <div className="process-step" data-step="5">
              <h3>Optimize & Scale</h3>
              <p>
                Post-launch, we monitor performance and optimize based on real data. As you see
                results, we identify the next automation opportunities to tackle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faq" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">FAQ</span>
            <h2>Questions About AI Automation in New York</h2>
            <p>
              Straight answers to what NYC business owners actually want to know.
            </p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <FAQItem
              question="How much does AI automation cost for New York businesses?"
              answer="Straight up: basic workflow stuff runs $3,500 to $8,000. Think connecting your CRM to your invoicing, automating follow-up emails, that kind of thing. Full AI agent deployments where we're building something custom? $15k to $25k+, sometimes more. Depends on how messy your current setup is and what you're trying to accomplish. We do a free call first so we can give you a real number, not some enterprise fluff quote."
            />
            <FAQItem
              question="How long does it take to implement AI automation?"
              answer="Last month we had a client live in 5 days. Simple workflow connecting their booking system to their CRM. Done. But that's the easy stuff. If you need an AI agent that understands your specific industry lingo, integrates with 4 different systems, and needs compliance sign-off? More like 6-8 weeks. We always try to get you a quick win in the first 2 weeks though, even on bigger projects. Keeps the momentum going."
            />
            <FAQItem
              question="Do you work with businesses outside Manhattan?"
              answer="Absolutely. We serve all five NYC boroughs—Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. We've also worked with clients in Long Island, Westchester County, and across the Hudson in New Jersey. Most of our work is done remotely anyway (it's AI, not plumbing), with on-site visits when needed for training or complex integrations."
            />
            <FAQItem
              question="What industries do you specialize in for AI automation?"
              answer="We work with NYC businesses across finance, healthcare, real estate, legal, e-commerce, professional services, and more. Finance and legal clients love us because we understand compliance requirements. Healthcare clients appreciate our HIPAA expertise. Real estate agencies use our AI agents for lead follow-up. The common thread? Businesses drowning in repetitive tasks and ready to stop throwing bodies at problems that machines can solve."
            />
            <FAQItem
              question="Will AI automation replace my employees?"
              answer="In my experience? Almost never plays out that way. What happens is your $75k operations person stops spending 3 hours a day on data entry and starts doing the strategic stuff you actually hired them for. One client told me their best employee was about to quit from boredom—too much manual work. After automation, she's now running client strategy. Stayed three more years. Most businesses use this to grow without hiring, not to fire people."
            />
            <FAQItem
              question="What if AI automation doesn't work for my business?"
              answer="Then we tell you upfront during the discovery call. Seriously—we turn away projects where AI isn't the right solution. If your processes are too chaotic, your data too messy, or the automation ROI doesn't pencil out, we'll say so. We'd rather have honest conversations than unhappy clients. When we do take a project, we structure payments around milestones so you're not paying for vaporware."
            />
            <FAQItem
              question="How do you handle data security and privacy?"
              answer="We take security seriously—especially for NYC's finance and healthcare sectors. All our solutions can be deployed with enterprise-grade encryption, access controls, and audit logging. We offer private LLM deployments for clients who can't send data to third-party AI providers. HIPAA compliance, SOC 2 alignment, and custom security requirements are all things we've handled before."
            />
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '1.5rem' }}>About Us</span>
              <h2 style={{ marginBottom: '1.5rem' }}>
                NYC's AI Automation Partner
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We're an extension of <a href="https://owntheclimb.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>Own The Climb</a>,
                a consulting firm that's helped businesses across the East Coast deploy AI that actually
                delivers results—not just impressive demos.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                I started this after watching too many businesses get burned by AI consultants who'd
                never actually run a company. They'd hand over a 50-page strategy deck and disappear.
                We do it differently. Shimon Carroll, founder, has been in the trenches since 2024
                building stuff that works. Not theory. Not decks. Working systems that save real money.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                We serve clients across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Long
                Island, Westchester, and New Jersey. Whether you're a 10-person agency or a 500-employee
                enterprise, we scale our approach to fit your needs and budget.
              </p>

              {/* Trust signals */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '2rem',
                  justifyContent: 'center',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-primary)' }}>
                    5.0<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/5</span>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Client Rating</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-primary)' }}>2024</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Founded</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent-primary)' }}>15+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Clients Served</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://www.linkedin.com/in/shimon-carroll/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View LinkedIn Profile
                </a>
                <a
                  href="https://owntheclimb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Visit Main Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Get Started</span>
            <h2>Ready to Automate Your NYC Business?</h2>
            <p>
              Got a question? Shoot us a message or just call. I personally get back to everyone
              within 24 hours. If AI isn't right for you, I'll tell you that too. No pitch, no deck.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your business and what you're looking to automate..."
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>Call Us Directly</h3>
                <a
                  href="tel:+14432652667"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  (443) 265-2667
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>Email</h3>
                <a
                  href="mailto:info@owntheclimb.com"
                  style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
                >
                  info@owntheclimb.com
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>Service Area</h3>
                <p style={{ fontSize: '0.9375rem' }}>
                  Manhattan • Brooklyn • Queens • Bronx<br />
                  Staten Island • Long Island • Westchester • NJ
                </p>
              </div>

              <div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>Hours</h3>
                <p style={{ fontSize: '0.9375rem' }}>
                  Monday – Friday: 9am – 6pm EST<br />
                  <span style={{ color: 'var(--text-tertiary)' }}>Weekend calls by appointment</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} AI Automation Agency New York • A division of{' '}
              <a
                href="https://owntheclimb.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-primary)' }}
              >
                Own The Climb
              </a>
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
              AI Automation Services in New York City • Manhattan • Brooklyn • Queens • Bronx • Staten Island
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
