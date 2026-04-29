import { Link, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import logoLarge from "./Assets/Website Logo large.png";

function StaticPageLayout({
  title,
  subtitle,
  lastUpdated,
  children
}: {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  children: JSX.Element;
}) {
  return (
    <div className="site-shell legal-shell">
      <header className="top-nav legal-top-nav">
        <Link className="brand-lockup" to="/">
          <img src={logoLarge} alt="Kind Basket logo" className="site-logo-large" />
          <div>
            <p className="brand-name">Kind Basket</p>
            <p className="brand-sub">Smarter grocery savings</p>
          </div>
        </Link>

        <nav aria-label="Policy navigation" className="desktop-nav legal-nav">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/pricing-disclaimer">Pricing & Savings Disclaimer</Link>
          <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link to="/contact">Contact</Link>
        function AffiliateDisclosurePage() {
          return (
            <StaticPageLayout
              title="Affiliate Disclosure"
              subtitle="Information about affiliate links, commissions, and sponsored content."
              lastUpdated="29 April 2026"
            >
              <>
                <article>
                  <p>Kind Basket may earn a commission from certain links, purchases, or partnerships.</p>
                  <p>This does not affect:</p>
                  <ul>
                    <li>Price comparisons</li>
                    <li>Rankings</li>
                    <li>Recommendations</li>
                  </ul>
                  <p>Any sponsored or promoted content will be clearly identified.</p>
                </article>
              </>
            </StaticPageLayout>
          );
        }
        function PricingDisclaimerPage() {
          return (
            <StaticPageLayout
              title="Pricing & Savings Disclaimer"
              subtitle="Important information about price comparisons and savings estimates."
              lastUpdated="29 April 2026"
            >
              <>
                <article>
                  <p>Kind Basket provides price comparisons and estimated savings based on available data.</p>
                  <ul>
                    <li>Prices may vary by location, time, and retailer</li>
                    <li>Data may be delayed or incomplete</li>
                    <li>Savings are estimates and not guaranteed</li>
                  </ul>
                  <p>Comparisons may include:</p>
                  <ul>
                    <li>Equivalent products</li>
                    <li>Similar or alternative items (clearly indicated where applicable)</li>
                  </ul>
                  <p>Users should verify:</p>
                  <ul>
                    <li>Final pricing</li>
                    <li>Product suitability</li>
                    <li>Availability</li>
                  </ul>
                  <p>Kind Basket does not control retailer pricing or stock levels.</p>
                </article>
              </>
            </StaticPageLayout>
          );
        }
        </nav>
function CookiePolicyPage() {
  return (
    <StaticPageLayout
      title="Cookie Policy"
      subtitle="How Kind Basket uses cookies and similar technologies."
      lastUpdated="29 April 2026"
    >
      <>
        <article>
          <h2>Effective Date</h2>
          <p>29 April 2026</p>
        </article>
        <article>
          <h2>1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit our website.</p>
        </article>
        <article>
          <h2>2. Types of Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>Required for core functionality (e.g. login, security)</p>
          <h3>Analytics Cookies</h3>
          <p>Help us understand usage and improve the Service</p>
          <h3>Functional Cookies</h3>
          <p>Remember preferences and settings</p>
        </article>
        <article>
          <h2>3. How We Use Cookies</h2>
          <ul>
            <li>Improve user experience</li>
            <li>Analyse traffic and performance</li>
            <li>Maintain secure sessions</li>
          </ul>
        </article>
        <article>
          <h2>4. Managing Cookies</h2>
          <ul>
            <li>Accept or reject cookies via the banner</li>
            <li>Control cookies through your browser settings</li>
          </ul>
        </article>
        <article>
          <h2>5. Third-Party Cookies</h2>
          <p>Some cookies may be set by third-party services (e.g. analytics providers).</p>
        </article>
        <article>
          <h2>6. Updates</h2>
          <p>We may update this policy periodically.</p>
        </article>
        <article>
          <h2>7. Contact</h2>
          <p>Contact: <a href="mailto:hello@kindbasket.app">hello@kindbasket.app</a></p>
        </article>
      </>
    </StaticPageLayout>
  );
}

        <Link className="btn btn-secondary nav-cta" to="/">
          Back to home
        </Link>
      </header>

      <main className="doc-page">
    <section className="doc-hero fade-in">
      <p className="eyebrow">Kind Basket policies</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {/* Optionally render lastUpdated if provided */}
      {lastUpdated && (
        <p className="last-updated-subtext">Last updated: {lastUpdated}</p>
      )}
    </section>

        <section className="doc-content fade-in">{children}</section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand-name">Kind Basket</p>
          <p>Smarter grocery shopping, made simple.</p>
        </div>
        <nav aria-label="Footer links" className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p>Copyright 2026 Kind Basket</p>
      </footer>
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <StaticPageLayout
      title="Privacy Policy"
      subtitle="How Kind Basket collects, uses, and protects your personal information."
      lastUpdated="29 April 2026"
    >
      <>
        <article>
          <h2>Effective Date</h2>
          <p>29 April 2026</p>
        </article>
        <article>
          <h2>1. Overview</h2>
          <p>We respect your privacy and are committed to protecting your personal data in accordance with UK GDPR.</p>
        </article>
        <article>
          <h2>2. Data We Collect</h2>
          <h3>A. Information You Provide</h3>
          <ul>
            <li>Name, email address (account creation)</li>
            <li>Shopping lists and preferences</li>
            <li>Uploaded receipts (if feature used)</li>
          </ul>
          <h3>B. Automatically Collected Data</h3>
          <ul>
            <li>Device type and usage data</li>
            <li>App interactions</li>
            <li>IP address (for security and analytics)</li>
          </ul>
        </article>
        <article>
          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>Provide and improve the Service</li>
            <li>Calculate price comparisons and savings</li>
            <li>Personalise your experience</li>
            <li>Detect fraud or misuse</li>
            <li>Communicate with you</li>
          </ul>
        </article>
        <article>
          <h2>4. Legal Basis for Processing</h2>
          <ul>
            <li>Contract – to provide the Service</li>
            <li>Legitimate interests – to improve functionality</li>
            <li>Consent – for marketing and optional features</li>
          </ul>
        </article>
        <article>
          <h2>5. Data Sharing</h2>
          <ul>
            <li>Service providers (hosting, analytics, infrastructure)</li>
            <li>Retail partners (only where necessary for functionality)</li>
          </ul>
          <p>We do not sell personal data.</p>
        </article>
        <article>
          <h2>6. Data Retention</h2>
          <p>We retain data only as long as necessary to:</p>
          <ul>
            <li>Provide the Service</li>
            <li>Meet legal obligations</li>
          </ul>
          <p>You may request deletion at any time.</p>
        </article>
        <article>
          <h2>7. Your Rights</h2>
          <ul>
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
          </ul>
          <p>Contact: <a href="mailto:hello@kindbasket.app">hello@kindbasket.app</a></p>
        </article>
        <article>
          <h2>8. Receipt Scanning (If Used)</h2>
          <ul>
            <li>Data is processed to extract pricing information</li>
            <li>Personal identifiers should be minimised</li>
            <li>Data may be anonymised for analytics</li>
          </ul>
        </article>
        <article>
          <h2>9. Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your data.</p>
        </article>
        <article>
          <h2>10. International Transfers</h2>
          <p>If data is processed outside the UK, we ensure appropriate safeguards are in place.</p>
        </article>
        <article>
          <h2>11. Updates</h2>
          <p>We may update this policy periodically.</p>
        </article>
        <article>
          <h2>12. Contact</h2>
          <p>Contact: <a href="mailto:hello@kindbasket.app">hello@kindbasket.app</a></p>
        </article>
      </>
    </StaticPageLayout>
  );
}

function TermsOfUsePage() {
  return (
    <StaticPageLayout
      title="Terms of Use"
      subtitle="The terms that apply when you use the Kind Basket website, app, and related services."
      lastUpdated="29 April 2026"
    >
      <>
        <article>
          <h2>Effective Date</h2>
          <p>29 April 2026</p>
        </article>
        <article>
          <h2>Company</h2>
          <p>Kind Basket Ltd (“Kind Basket”, “we”, “us”, “our”)</p>
        </article>
        <article>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Kind Basket mobile application, website, or related services (the “Service”), you agree to be bound by these Terms. If you do not agree, you must not use the Service.
          </p>
        </article>
        <article>
          <h2>2. Description of Service</h2>
          <ul>
            <li>Compare grocery prices across retailers</li>
            <li>Estimate potential savings</li>
            <li>Suggest alternative or substitute products</li>
            <li>Organise shopping lists</li>
          </ul>
          <p>All information is provided for guidance purposes only.</p>
        </article>
        <article>
          <h2>3. No Guarantee of Accuracy or Savings</h2>
          <ul>
            <li>Prices may change at any time</li>
            <li>Data may be delayed, estimated, or sourced from third parties</li>
            <li>Product availability may vary by location</li>
          </ul>
          <p>
            We do not guarantee that prices are always accurate or current, that any savings shown will be achieved, or that the Service will always identify the cheapest option. All savings figures are estimates based on available data.
          </p>
        </article>
        <article>
          <h2>4. Product Comparisons &amp; Substitutions</h2>
          <ul>
            <li>Items may not be identical</li>
            <li>Differences in brand, quality, size, or ingredients may exist</li>
            <li>Substitutions are clearly marked where applicable</li>
          </ul>
          <p>Users are responsible for verifying suitability before purchase.</p>
        </article>
        <article>
          <h2>5. Retailer Independence</h2>
          <ul>
            <li>Kind Basket is independent of all retailers unless explicitly stated</li>
            <li>We do not control retailer pricing or stock</li>
            <li>Retailers may change prices without notice</li>
            <li>Final purchase terms are governed by the retailer</li>
          </ul>
        </article>
        <article>
          <h2>6. Affiliate &amp; Revenue Disclosure</h2>
          <ul>
            <li>We may receive compensation through affiliate links, gift card partnerships, or retail integrations</li>
            <li>This does not influence rankings or recommendations, unless clearly stated</li>
          </ul>
        </article>
        <article>
          <h2>7. User Responsibilities</h2>
          <ul>
            <li>To use the Service lawfully</li>
            <li>Not to misuse or attempt to manipulate the system</li>
            <li>Not to rely solely on the Service for purchasing decisions</li>
          </ul>
        </article>
        <article>
          <h2>8. Intellectual Property</h2>
          <p>
            All content, software, branding, and systems within Kind Basket are owned by or licensed to Kind Basket Ltd and protected by intellectual property laws. You may not copy, reproduce, or reverse engineer any part of the Service or use our data or systems for commercial purposes without permission.
          </p>
        </article>
        <article>
          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Kind Basket is not liable for pricing inaccuracies, missed savings, retailer errors or changes, or loss arising from reliance on the Service.
          </p>
        </article>
        <article>
          <h2>10. Availability of Service</h2>
          <ul>
            <li>We do not guarantee uninterrupted access</li>
            <li>We may modify or discontinue features, update pricing sources or logic, or restrict access if necessary</li>
          </ul>
        </article>
        <article>
          <h2>11. Termination</h2>
          <ul>
            <li>We may suspend or terminate access if these Terms are breached or fraudulent/abusive behaviour is detected</li>
          </ul>
        </article>
        <article>
          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use constitutes acceptance.
          </p>
        </article>
        <article>
          <h2>13. Governing Law</h2>
          <p>These Terms are governed by the laws of England and Wales.</p>
        </article>
        <article>
          <h2>14. Contact</h2>
          <p>For questions about these Terms, contact <a href="mailto:hello@kindbasket.app">hello@kindbasket.app</a>.</p>
        </article>
      </>
    </StaticPageLayout>
  );
}

function ContactPage() {
  return (
    <StaticPageLayout
      title="Contact"
      subtitle="Get in touch with the Kind Basket team about support, partnerships, or press."
    >
      <>
        <article>
          <h2>General enquiries</h2>
          <p>
            For product and waitlist questions, email us at
            <a href="mailto:hello@kindbasket.app"> hello@kindbasket.app</a>.
          </p>
        </article>
        <article>
          <h2>Support</h2>
          <p>
            If you need help with your account, include your device type and a
            short description of the issue so we can support you faster.
          </p>
        </article>
        <article>
          <h2>Partnerships and media</h2>
          <p>
            For retailer partnerships, collaborations, or media requests, please
            use the same email and mention the nature of your request in the
            subject line.
          </p>
        </article>
        <article>
          <h2>Registered office</h2>
          <p>
            Kind Basket Ltd<br />
            20-22 Wenlock Road<br />
            London<br />
            N1 7GU<br />
            United Kingdom
          </p>
        </article>
      </>
    </StaticPageLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-use" element={<TermsOfUsePage />} />
      <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      <Route path="/pricing-disclaimer" element={<PricingDisclaimerPage />} />
      <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
