const CANONICAL = 'https://www.aiautomationagencynewyork.com/terms'

export const metadata = {
  title: 'Terms of Service | AI Automation Agency New York',
  description:
    'The terms that govern your use of the AI Automation Agency New York website and the information provided on it.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
}

const h2 = { marginTop: '2.5rem', marginBottom: '1rem' }
const p = { marginBottom: '1rem' }

export default function Terms() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <section>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
              <a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a> <span>/</span> Terms of Service
            </nav>
            <h1 style={{ marginBottom: '0.75rem' }}>Terms of Service</h1>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '2rem' }}>Last updated: June 12, 2026</p>

            <p style={p}>
              These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by AI Automation Agency New
              York (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By using this site, you agree to these Terms. If you do not agree, please
              do not use the site.
            </p>

            <h2 style={h2}>About Our Services</h2>
            <p style={p}>
              We provide AI automation consulting and development services for businesses. This website describes those
              services and lets you contact us. The content here is for general information only and is not a binding
              offer or professional advice.
            </p>

            <h2 style={h2}>Quotes and Estimates</h2>
            <p style={p}>
              Any prices, timelines, or savings mentioned on this site are general ranges and examples, not a quote.
              The actual scope, price, and timeline for a project are defined in a separate written agreement after we
              understand your needs.
            </p>

            <h2 style={h2}>Your Responsibilities</h2>
            <p style={p}>
              You agree to use this site lawfully and not to misuse it, interfere with its operation, or attempt to
              access it in any unauthorized way. Any information you submit must be accurate and your own to share.
            </p>

            <h2 style={h2}>Intellectual Property</h2>
            <p style={p}>
              The content, design, and branding on this site belong to AI Automation Agency New York and may not be
              copied or reused without permission. Ownership of any software we build for a client is defined in that
              client&apos;s project agreement.
            </p>

            <h2 style={h2}>No Warranties</h2>
            <p style={p}>
              This site is provided &quot;as is.&quot; We do our best to keep it accurate and available, but we do not warrant
              that it will be error-free, uninterrupted, or fit for any particular purpose.
            </p>

            <h2 style={h2}>Limitation of Liability</h2>
            <p style={p}>
              To the fullest extent allowed by law, we are not liable for any indirect, incidental, or consequential
              damages arising from your use of this site or reliance on its content.
            </p>

            <h2 style={h2}>Third-Party Links</h2>
            <p style={p}>
              Our site may link to other websites we do not control. We are not responsible for the content or
              practices of those sites.
            </p>

            <h2 style={h2}>Governing Law</h2>
            <p style={p}>
              These Terms are governed by the laws of the State of New York, without regard to conflict-of-law rules.
            </p>

            <h2 style={h2}>Changes to These Terms</h2>
            <p style={p}>
              We may update these Terms from time to time. Continued use of the site after changes means you accept the
              updated Terms.
            </p>

            <h2 style={h2}>Contact Us</h2>
            <p style={p}>
              Questions about these Terms? Email{' '}
              <a href="mailto:info@aiautomationagencynewyork.com" style={{ color: 'var(--accent-primary)' }}>info@aiautomationagencynewyork.com</a>{' '}
              or call <a href="tel:+16468142452" style={{ color: 'var(--accent-primary)' }}>(646) 814-2452</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
