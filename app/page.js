'use client'

import { useState } from 'react'
import Image from 'next/image'

// Icons as inline SVGs for performance
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
  return (
    <main style={{ paddingTop: '72px' }}>
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
          {/* Hero automation illustration - background */}
          <div
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '500px',
              height: '400px',
              opacity: 0.8,
              zIndex: 0
            }}
            className="hero-illustration"
            aria-hidden="true"
          >
            <img
              src="/images/hero-automation.svg"
              alt=""
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
            {/* Trust badge */}
            <div className="badge animate-in" style={{ marginBottom: '1.5rem' }}>
              <span>Trusted by service-based businesses across New York City</span>
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
              We help New York service businesses reduce manual work through practical AI automation.
              Data entry, scheduling, invoicing, follow-ups—if your team's drowning in repetitive tasks,
              we can probably help.
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-in delay-3"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}
            >
              <a href="#contact" className="btn btn-primary">
                Free AI Opportunity Audit
              </a>
              <a href="tel:+16468142452" className="btn btn-secondary">
                No-Obligation Call: (646) 814-2452
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
                <span>Remote Team Serving NYC</span>
              </div>
              <div className="trust-item">
                <CheckIcon />
                <span>Built for Service Businesses</span>
              </div>
              <div className="trust-item">
                <CheckIcon />
                <span>HIPAA-Ready Options</span>
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
              <div className="stat-number">5–20+</div>
              <div className="stat-label">Typical Hours Saved Weekly</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">2–8</div>
              <div className="stat-label">Weeks to Deployment</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">SMB</div>
              <div className="stat-label">& Mid-Market Focus</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">HIPAA</div>
              <div className="stat-label">Compliance-Ready Options</div>
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
              Running a business in New York? Overhead's brutal, good people are expensive, and your
              competition isn't slowing down. Meanwhile, someone on your team is probably spending
              hours every week on tasks a well-designed AI system could handle automatically.
            </p>
            <p style={{ marginBottom: '2rem' }}>
              We're <strong>AI Automation Agency New York</strong>—we focus on one thing:
              reducing manual workload for service-based businesses. Brooklyn startup? Manhattan law firm?
              Queens-based agency? We build AI that works in the real world—not impressive demos
              that get filed away and forgotten.
            </p>
            <p>
              A real estate firm we worked with was spending most of their day on lead follow-up.
              We built an AI system that handles initial outreach, qualifies prospects, and escalates
              the ones worth talking to. The result? Their team now focuses on actual deals, not admin.
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
            <a href="/ai-agents-nyc/" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="/images/service-ai-agents.svg"
                  alt="AI Agents automation illustration"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="service-icon"><BotIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>AI Agents & Chatbots</h3>
              <p style={{ marginBottom: '1rem' }}>
                Picture this: it's 2am and someone's on your website ready to book. Your AI agent
                qualifies them, answers questions, and schedules for Monday morning. You wake up
                to a booked calendar.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• Customer support automation</li>
                <li>• Lead qualification bots</li>
                <li>• Appointment scheduling AI</li>
                <li>• Internal knowledge assistants</li>
              </ul>
            </a>

            <a href="/workflow-automation-nyc/" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="/images/service-workflow.svg"
                  alt="Workflow automation illustration"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="service-icon"><WorkflowIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>Workflow Automation</h3>
              <p style={{ marginBottom: '1rem' }}>
                Your sales rep closes a deal. The invoice generates automatically. Client info syncs
                to your CRM. Onboarding email goes out. That's the kind of system we build.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• CRM automation & sync</li>
                <li>• Document processing</li>
                <li>• Data entry elimination</li>
                <li>• Report generation</li>
              </ul>
            </a>

            <a href="/custom-ai-solutions-nyc/" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src="/images/service-custom-ai.svg"
                  alt="Custom AI solutions dashboard illustration"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="service-icon"><CodeIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>Custom AI Solutions</h3>
              <p style={{ marginBottom: '1rem' }}>
                Bespoke AI applications built specifically for your business. Portals, dashboards,
                and tools tailored to how your team actually works.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• Custom AI dashboards</li>
                <li>• Private GPT deployments</li>
                <li>• Industry-specific AI tools</li>
                <li>• API integrations</li>
              </ul>
            </a>

            <div className="card">
              <div className="service-icon"><BrainIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>AI Strategy & Training</h3>
              <p style={{ marginBottom: '1rem' }}>
                Not sure where to start? We audit your operations, identify high-value automation
                opportunities, and train your team to leverage AI effectively.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• AI readiness assessments</li>
                <li>• Opportunity mapping</li>
                <li>• Team training workshops</li>
                <li>• Executive AI briefings</li>
              </ul>
            </div>

            <div className="card">
              <div className="service-icon"><RocketIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>Rapid Implementation</h3>
              <p style={{ marginBottom: '1rem' }}>
                Most agencies want 6-month contracts before they even start. We ship working
                automations in weeks, not quarters. Agile methodology, milestone-based.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• 2-8 week typical delivery</li>
                <li>• Milestone-based pricing</li>
                <li>• Quick wins first approach</li>
                <li>• Ongoing optimization</li>
              </ul>
            </div>

            <div className="card">
              <div className="service-icon"><ShieldIcon /></div>
              <h3 style={{ marginBottom: '0.75rem' }}>Compliance & Security</h3>
              <p style={{ marginBottom: '1rem' }}>
                NYC's regulated industries need AI that plays by the rules. We can build
                HIPAA-compliant, SOC 2-ready systems for sensitive data environments.
              </p>
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <li>• HIPAA compliance options</li>
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
            <p style={{ maxWidth: '700px', margin: '0 auto 1rem' }}>
              Basic workflow automations typically start around <strong>$3,500</strong>. Full AI agent
              deployments range from <strong>$8,000 to $25,000+</strong> depending on complexity. We'll
              give you an honest quote after understanding your actual needs—no bait-and-switch.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
              Pricing varies by scope, complexity, and compliance requirements.
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
              answer="Simple workflows—like connecting your booking system to your CRM—can sometimes be live in under a week. More complex projects involving custom AI agents, multiple integrations, or compliance requirements typically take 4-8 weeks. We try to get you a quick win early, even on bigger projects. Keeps the momentum going."
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
              <span className="badge" style={{ marginBottom: '1.5rem' }}>About the Team</span>
              <h2 style={{ marginBottom: '1.5rem' }}>
                Your AI Automation Agency New York Partner
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We're a collective of AI engineers and automation specialists focused on implementing
                practical, production-ready AI systems for service-based businesses.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We work remotely with NYC companies to deliver fast, compliant automation that reduces
                manual workload and improves operational efficiency. No 50-page strategy decks. No
                vaporware demos. Just working systems that solve real problems.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                We serve clients across Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Long
                Island, Westchester, and New Jersey. Whether you're a small agency or a mid-market
                enterprise, we scale our approach to fit your needs and budget.
              </p>

              <a href="#contact" className="btn btn-primary">
                Schedule a Free Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== USE CASES SECTION ==================== */}
      <section id="use-cases" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Use Cases</span>
            <h2>Common NYC AI Automation Use Cases</h2>
            <p>
              These are the kinds of problems we solve for service-based businesses in New York.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Lead Qualification Automation</h3>
              <p>
                AI that qualifies inbound leads, asks the right questions, and routes hot prospects
                to your sales team. No more wasted time on tire-kickers.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>Intake & Onboarding Workflows</h3>
              <p>
                Automated client onboarding that collects documents, sends reminders, and updates
                your systems—without manual data entry.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>CRM & Ops Automation</h3>
              <p>
                Keep your CRM, invoicing, and project management tools in sync. When something
                changes in one place, everything updates automatically.
              </p>
            </div>
            <div className="card">
              <h3 style={{ marginBottom: '0.75rem' }}>AI Chat for Inbound Traffic</h3>
              <p>
                24/7 AI chat that handles FAQs, books appointments, and captures leads when
                your team isn't available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SUCCESS CRITERIA SECTION ==================== */}
      <section id="success">
        <div className="container">
          <div className="section-header">
            <span className="badge">What Success Looks Like</span>
            <h2>What a Successful AI Automation Project Looks Like</h2>
            <p>
              Here's what our clients typically experience after implementation.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}><CheckIcon /></div>
                <p><strong>Reduced admin workload</strong> — Your team spends less time on repetitive tasks</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}><CheckIcon /></div>
                <p><strong>Faster response times</strong> — Leads and clients get answers immediately, not hours later</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}><CheckIcon /></div>
                <p><strong>Cleaner internal data</strong> — Information flows between systems without manual entry</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-primary)', flexShrink: 0 }}><CheckIcon /></div>
                <p><strong>Better lead qualification</strong> — AI filters out tire-kickers before they reach your team</p>
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
              Got a question? Shoot us a message or just call. We'll get back to you within one
              business day. If AI isn't the right fit for your situation, we'll tell you that too.
              No obligation, no pressure.
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
            {/* Tally Contact Form */}
            <div style={{ minHeight: '400px' }}>
              <iframe
                data-tally-src="https://tally.so/embed/zx7Ep8?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="400"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Form"
                style={{ border: 'none' }}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s)}
                  `
                }}
              />
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>Call Us Directly</h3>
                <a
                  href="tel:+16468142452"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  (646) 814-2452
                </a>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
                  Remote-first team serving NYC businesses
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>Email</h3>
                <a
                  href="mailto:info@aiautomationagencynyc.com"
                  style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
                >
                  info@aiautomationagencynyc.com
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
            {/* Social Media Icons */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ai-automation-agency-new-york-4564583a9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/aiautomationagencynewyork"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/aiagencynewyork"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="social-link"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/aiautomationagencynewyork/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>

            <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} AI Automation Agency New York • Serving NYC businesses remotely
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)' }}>
              AI Automation Services for New York City • Manhattan • Brooklyn • Queens • Bronx • Staten Island
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
