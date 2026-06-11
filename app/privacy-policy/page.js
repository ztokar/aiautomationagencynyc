const CANONICAL = 'https://www.aiautomationagencynewyork.com/privacy-policy'

export const metadata = {
  title: 'Privacy Policy | AI Automation Agency New York',
  description:
    'How AI Automation Agency New York collects, uses, and protects the information you share with us.',
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
}

const h2 = { marginTop: '2.5rem', marginBottom: '1rem' }
const p = { marginBottom: '1rem' }
const li = { color: 'var(--text-secondary)', marginBottom: '0.5rem' }

export default function PrivacyPolicy() {
  return (
    <main style={{ paddingTop: '72px' }}>
      <section>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: '0.8125rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem' }}>
              <a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a> <span>/</span> Privacy Policy
            </nav>
            <h1 style={{ marginBottom: '0.75rem' }}>Privacy Policy</h1>
            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '2rem' }}>Last updated: June 12, 2026</p>

            <p style={p}>
              This Privacy Policy explains how AI Automation Agency New York (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles the
              information you share when you use our website or contact us. We keep this simple and only collect what we
              need to respond to you and run our business.
            </p>

            <h2 style={h2}>Information We Collect</h2>
            <ul style={{ paddingLeft: '1.25rem' }}>
              <li style={li}>Contact details you submit through our contact form or by email or phone, such as your name, email, phone number, company, and message.</li>
              <li style={li}>Basic usage data your browser sends automatically, such as IP address, device type, and pages viewed, collected through standard analytics.</li>
              <li style={li}>Any information you choose to share with us during a consultation or project.</li>
            </ul>

            <h2 style={h2}>How We Use Your Information</h2>
            <ul style={{ paddingLeft: '1.25rem' }}>
              <li style={li}>To respond to your inquiry and provide the services you request.</li>
              <li style={li}>To send you information you ask for and follow up about a potential or active project.</li>
              <li style={li}>To improve our website and understand how visitors use it.</li>
              <li style={li}>To meet legal, accounting, and security obligations.</li>
            </ul>

            <h2 style={h2}>How We Share Information</h2>
            <p style={p}>
              We do not sell your personal information. We share it only with service providers that help us operate,
              such as our website host, form provider, and analytics tools, and only as needed to provide those
              services. We may also disclose information if required by law.
            </p>

            <h2 style={h2}>Third-Party Tools</h2>
            <p style={p}>
              Our site uses third-party services, including our form provider (Tally) and our hosting provider
              (Vercel), each of which processes data under its own privacy terms. When we build automation that uses AI
              providers, we configure data handling to match the agreement we have with you, including private
              deployments for sensitive data when required.
            </p>

            <h2 style={h2}>Cookies and Analytics</h2>
            <p style={p}>
              We may use cookies and similar technologies to keep the site working and to measure traffic. You can
              control cookies through your browser settings. Blocking some cookies may affect how the site functions.
            </p>

            <h2 style={h2}>Data Security</h2>
            <p style={p}>
              We use reasonable technical and organizational measures to protect the information you share. No method
              of transmission or storage is fully secure, so we cannot guarantee absolute security.
            </p>

            <h2 style={h2}>Your Choices</h2>
            <p style={p}>
              You can ask us to access, correct, or delete the personal information we hold about you, or ask us to
              stop contacting you. Email us at the address below and we will respond within a reasonable time.
            </p>

            <h2 style={h2}>Children&apos;s Privacy</h2>
            <p style={p}>
              Our services are for businesses. We do not knowingly collect information from anyone under 16.
            </p>

            <h2 style={h2}>Changes to This Policy</h2>
            <p style={p}>
              We may update this policy from time to time. When we do, we will change the date at the top of this page.
            </p>

            <h2 style={h2}>Contact Us</h2>
            <p style={p}>
              Questions about this policy? Email{' '}
              <a href="mailto:info@aiautomationagencynyc.com" style={{ color: 'var(--accent-primary)' }}>info@aiautomationagencynyc.com</a>{' '}
              or call <a href="tel:+16468142452" style={{ color: 'var(--accent-primary)' }}>(646) 814-2452</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
