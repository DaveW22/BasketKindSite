import { Link, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import logoLarge from "./assets/Website Logo large.png";

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
          <Link to="/contact">Contact</Link>
        </nav>

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
       
    >
      <>
        <article>
          <h2>1. Who we are (Data Controller)</h2>
          <p>
            Kind Basket Ltd, 20-22 Wenlock Road, London, N1 7GU, United Kingdom, is the data controller for your personal data. For privacy enquiries, contact <a href="mailto:hello@kindbasket.app">hello@kindbasket.app</a>.
          </p>
        </article>
        <article>
          <h2>2. Information we collect</h2>
          <p>
            We may collect information you provide directly, such as your email address when you join the waitlist, and information needed to support app features like shopping lists, savings history, and loyalty card storage.
          </p>
        </article>
        <article>
          <h2>3. How we use your information</h2>
          <p>
            We use your information to provide and improve Kind Basket, send product updates, respond to enquiries, and keep the app secure and reliable.
          </p>
        </article>
        <article>
          <h2>4. Legal basis and retention</h2>
          <p>
            Where applicable, we process personal data based on consent, contractual necessity, and legitimate interests. We keep information only as long as needed for the purposes described in this policy or to meet legal obligations.
          </p>
        </article>
        <article>
          <h2>5. Sharing information</h2>
          <p>
            We do not sell personal data. We may share limited data with trusted service providers that help operate Kind Basket, such as analytics, hosting, and communications tools, under appropriate safeguards. Data may be transferred outside the UK/EEA only where adequate protections (such as Standard Contractual Clauses) are in place.
          </p>
        </article>
        <article>
          <h2>6. Automated decision-making</h2>
          <p>
            We do not use your data for automated decision-making or profiling.
          </p>
        </article>
        <article>
          <h2>7. Children’s privacy</h2>
          <p>
            Kind Basket is not intended for children under 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us for removal.
          </p>
        </article>
        <article>
          <h2>8. Your rights</h2>
          <p>
            You have the right to access, correct, delete, or restrict use of your personal data. You can also object to certain processing and request portability where available. You also have the right to lodge a complaint with the UK Information Commissioner’s Office (ICO).
          </p>
        </article>
        <article>
          <h2>9. Cookies and tracking</h2>
          <p>
            We use cookies and similar technologies for essential site functionality and analytics. For details, see our Cookie Policy.
          </p>
        </article>
        <article>
          <h2>10. Contact about privacy</h2>
          <p>
            For privacy requests, contact us via the Contact page and include enough detail for us to verify and process your request.
          </p>
        </article>
      </>
    </StaticPageLayout>
  );
}

function TermsOfUsePage() {
  return (
    <StaticPageLayout
      title="Terms of Use"
      subtitle="The terms that apply when you use the Kind Basket website and app services."
       
    >
      <>
        <article>
          <h2>1. Using Kind Basket</h2>
          <p>
            By using Kind Basket, you agree to use the service lawfully and in a way that does not harm the platform or other users.
          </p>
        </article>
        <article>
          <h2>2. Accuracy of savings and prices</h2>
          <p>
            Kind Basket aims to provide useful price comparisons and savings estimates, but supermarket pricing can change quickly. Information is provided on an "as is" basis and should be checked before purchase.
          </p>
        </article>
        <article>
          <h2>3. Accounts and access</h2>
          <p>
            If account features are enabled, you are responsible for maintaining account security and for activity carried out under your account. We reserve the right to suspend or terminate accounts for violations of these terms.
          </p>
        </article>
        <article>
          <h2>4. User-generated content</h2>
          <p>
            If you submit content to Kind Basket, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute that content in connection with the service. You are responsible for ensuring your content does not infringe any rights or laws.
          </p>
        </article>
        <article>
          <h2>5. Intellectual property</h2>
          <p>
            Kind Basket branding, software, and content are protected by applicable intellectual property laws. You may not copy or reuse them without permission.
          </p>
        </article>
        <article>
          <h2>6. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Kind Basket Ltd is not liable for any indirect, incidental, or consequential damages arising from your use of the service.
          </p>
        </article>
        <article>
          <h2>7. Changes and availability</h2>
          <p>
            We may update, suspend, or discontinue parts of the service and may revise these terms from time to time. Continued use after updates means you accept the revised terms.
          </p>
        </article>
        <article>
          <h2>8. Governing law</h2>
          <p>
            Unless otherwise required by law, these terms are governed by the laws of England and Wales.
          </p>
        </article>
        <article>
          <h2>9. Severability and entire agreement</h2>
          <p>
            If any part of these terms is found invalid, the remainder will remain in effect. These terms constitute the entire agreement between you and Kind Basket regarding the service.
          </p>
        </article>
        <article>
          <h2>10. Contact</h2>
          <p>
            Questions about these terms can be sent through the Contact page.
          </p>
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
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
