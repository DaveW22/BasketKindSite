import { Link, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import PolicyLayout from "./PolicyLayout";


function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      summary="This policy explains what personal data we collect, why we use it, how we protect it, and the rights you have."
      effectiveDate="29 April 2026"
      lastUpdated="29 April 2026"
      version="1.0"
      toc={
        <ul>
          <li><a href="#who">1. Who we are</a></li>
          <li><a href="#scope">2. What this policy covers</a></li>
          <li><a href="#data">3. Personal data we may collect</a></li>
          <li><a href="#collection">4. How we collect data</a></li>
          <li><a href="#why">5. Why we use your data</a></li>
          <li><a href="#lawful">6. Lawful bases under UK GDPR</a></li>
          <li><a href="#receipts">7. Receipt scanning and anonymised pricing insights</a></li>
          <li><a href="#analytics">8. Analytics and product improvement</a></li>
          <li><a href="#marketing">9. Marketing communications and consent</a></li>
          <li><a href="#sharing">10. Sharing data with service providers</a></li>
          <li><a href="#retailers">11. Retailer, affiliate and partner integrations</a></li>
          <li><a href="#transfers">12. International transfers and safeguards</a></li>
          <li><a href="#retention">13. Data retention</a></li>
          <li><a href="#security">14. Security</a></li>
          <li><a href="#children">15. Children’s privacy</a></li>
          <li><a href="#rights">16. Your UK GDPR rights</a></li>
          <li><a href="#ico">17. Right to complain to the ICO</a></li>
          <li><a href="#changes">18. Changes to this policy</a></li>
          <li><a href="#contact">19. Contact details</a></li>
        </ul>
      }
    >
      <>
        <div className="privacy-glance-card" style={{background:'#fffbe6',borderLeft:'6px solid #e6b800',borderRadius:'1rem',padding:'1.2rem 1.5rem',marginBottom:'2rem',boxShadow:'0 2px 16px rgba(44,44,44,0.07)'}}>
          <strong>Your privacy at a glance:</strong>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1.2rem',marginTop:'1rem'}}>
            <div style={{background:'#fff',borderRadius:'0.8rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'1rem 1.2rem',flex:'1 1 180px',minWidth:'160px'}}>
              <b>We collect only what we need</b>
            </div>
            <div style={{background:'#fff',borderRadius:'0.8rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'1rem 1.2rem',flex:'1 1 180px',minWidth:'160px'}}>
              <b>You control your data</b>
            </div>
            <div style={{background:'#fff',borderRadius:'0.8rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'1rem 1.2rem',flex:'1 1 180px',minWidth:'160px'}}>
              <b>We do not sell personal data</b>
            </div>
            <div style={{background:'#fff',borderRadius:'0.8rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'1rem 1.2rem',flex:'1 1 180px',minWidth:'160px'}}>
              <b>Receipt data is handled carefully</b>
            </div>
          </div>
        </div>
        <article id="who">
          <h2>1. Who we are</h2>
          <p>Kind Basket Ltd (“Kind Basket”, “we”, “us”, “our”) is the data controller. <br />Registered address: [Insert company legal name and address].</p>
        </article>
        <article id="scope">
          <h2>2. What this policy covers</h2>
          <p>This policy applies to the Kind Basket website and mobile app. It explains what personal data we collect, how we use it, your rights, and how to contact us.</p>
        </article>
        <article id="data">
          <h2>3. Personal data we may collect</h2>
          <ul>
            <li>Account details (name, email, password)</li>
            <li>Contact details</li>
            <li>Shopping lists and preferences</li>
            <li>Device/app usage data</li>
            <li>Location or postcode (if used for local pricing)</li>
            <li>Receipt data (if receipt scanning is enabled)</li>
            <li>Customer support messages</li>
          </ul>
        </article>
        <article id="collection">
          <h2>4. How we collect data</h2>
          <p>We collect data you provide directly (e.g. when you create an account, contact support, or use app features) and data collected automatically (e.g. device type, usage, cookies, analytics).</p>
        </article>
        <article id="why">
          <h2>5. Why we use your data</h2>
          <ul>
            <li>To provide and improve Kind Basket</li>
            <PolicyLayout
              title="Pricing & Savings Disclaimer"
              summary="Kind Basket helps you compare prices and estimate savings, but final prices, stock and promotions are controlled by retailers."
              effectiveDate="29 April 2026"
              lastUpdated="29 April 2026"
              version="1.0"
              toc={
                <ul>
                  <li><a href="#cover">1. What this disclaimer covers</a></li>
                  <li><a href="#estimates">2. Prices are estimates based on available data</a></li>
                  <li><a href="#final">3. Final retailer prices may differ</a></li>
                  <li><a href="#availability">4. Product availability may change</a></li>
                  <li><a href="#promotions">5. Promotions, loyalty pricing and vouchers</a></li>
                  <li><a href="#fees">6. Delivery fees, service fees and minimum basket rules</a></li>
                  <li><a href="#substitutions">7. Substitutions and similar products</a></li>
                  <li><a href="#unit">8. Unit pricing, pack sizes and product matching</a></li>
                  <li><a href="#savings">9. Savings calculations and comparison basis</a></li>
                  <li><a href="#cheapest">10. “Cheapest” and “best value” explanations</a></li>
                  <li><a href="#freshness">11. Data freshness and last-updated labels</a></li>
                  <li><a href="#responsibility">12. User responsibility to check before purchase</a></li>
                  <li><a href="#noguarantee">13. No guarantee of savings</a></li>
                  <li><a href="#reporting">14. Reporting incorrect prices</a></li>
                  <li><a href="#contact">15. Contact details</a></li>
                </ul>
              }
            >
              <>
                <div style={{background:'#fffbe6',borderLeft:'6px solid #e6b800',borderRadius:'1rem',padding:'1.2rem 1.5rem',marginBottom:'2rem',boxShadow:'0 2px 16px rgba(44,44,44,0.07)'}}>
                  <strong>How we calculate estimated savings:</strong> Estimated savings are calculated by comparing the available price of items in your list against another available retailer price or selected baseline. Where products are not identical, they should be labelled as similar or substitute items.
                </div>
                <div style={{display:'flex',gap:'1.2rem',flexWrap:'wrap',marginBottom:'2rem'}}>
                  <div style={{background:'#fff',borderRadius:'0.8rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'0.8rem 1.2rem',minWidth:'180px',fontWeight:600,color:'#184c32'}}>Estimated saving: £4.20</div>
                  <div style={{background:'#fff',borderRadius:'0.8rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'0.8rem 1.2rem',minWidth:'180px',fontWeight:600,color:'#184c32'}}>Price last updated: 2 hours ago</div>
                  <div style={{background:'#fff',borderRadius:'0.8rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'0.8rem 1.2rem',minWidth:'180px',fontWeight:600,color:'#184c32'}}>Similar product, not identical</div>
                  <div style={{background:'#fff',borderRadius:'0.8rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'0.8rem 1.2rem',minWidth:'180px',fontWeight:600,color:'#184c32'}}>Final price confirmed by retailer</div>
                </div>
                {/* All articles must be inside a single fragment */}
                <article id="cover">
                  <h2>1. What this disclaimer covers</h2>
                  <p>This disclaimer explains the limits of Kind Basket’s price comparison and savings estimates. It applies to all price, savings, and value information shown on our website and app.</p>
                </article>
                <article id="estimates">
                  <h2>2. Prices are estimates based on available data</h2>
                  <p>All prices and savings shown are estimates based on the latest data we can access. Prices may change at any time and may not reflect real-time offers or in-store prices.</p>
                </article>
                <article id="final">
                  <h2>3. Final retailer prices may differ</h2>
                  <p>Final prices, promotions, and discounts are set by the retailer. Always check the retailer’s website or app for the most up-to-date price before purchasing.</p>
                </article>
                <article id="availability">
                  <h2>4. Product availability may change</h2>
                  <p>Product availability can change quickly. Items may go out of stock or be replaced by similar products at the retailer’s discretion.</p>
                </article>
                <article id="promotions">
                  <h2>5. Promotions, loyalty pricing and vouchers</h2>
                  <p>Some prices may require a loyalty card, voucher, or be part of a limited-time promotion. These may not always be reflected in our estimates.</p>
                </article>
                <article id="fees">
                  <h2>6. Delivery fees, service fees and minimum basket rules</h2>
                  <p>Delivery and service fees, as well as minimum basket requirements, are not always included in price comparisons. Please check these with the retailer before ordering.</p>
                </article>
                <article id="substitutions">
                  <h2>7. Substitutions and similar products</h2>
                  <p>Where an exact product match is not available, we may show similar or substitute items. These will be clearly labelled and may differ in size, brand, or features.</p>
                </article>
                <article id="unit">
                  <h2>8. Unit pricing, pack sizes and product matching</h2>
                  <p>We aim to match products as closely as possible, but differences in pack size or unit pricing may affect comparisons. Always check product details before purchase.</p>
                </article>
                <article id="savings">
                  <h2>9. Savings calculations and comparison basis</h2>
                  <p>Estimated savings are based on comparing the available price of your selected items with another retailer or baseline. Where products are not identical, this will be indicated.</p>
                </article>
                <article id="cheapest">
                  <h2>10. “Cheapest” and “best value” explanations</h2>
                  <p>We use terms like “cheapest” or “best value” to indicate estimated savings based on available data. These are not guarantees and may vary depending on offers, substitutions, or product differences.</p>
                </article>
                <article id="freshness">
                  <h2>11. Data freshness and last-updated labels</h2>
                  <p>We display “last updated” labels where possible. Data may be delayed or updated at different times for different retailers.</p>
                </article>
                <article id="responsibility">
                  <h2>12. User responsibility to check before purchase</h2>
                  <p>It is your responsibility to check final prices, product details, and terms with the retailer before making a purchase.</p>
                </article>
                <article id="noguarantee">
                  <h2>13. No guarantee of savings</h2>
                  <p>Estimated savings are for guidance only and are not guaranteed. Actual savings may vary depending on retailer pricing, offers, and substitutions.</p>
                </article>
                <article id="reporting">
                  <h2>14. Reporting incorrect prices</h2>
                  <p>If you spot an incorrect price or product, please let us know so we can investigate and update our data.</p>
                </article>
                <article id="contact">
                  <h2>15. Contact details</h2>
                  <p>Contact: <a href="mailto:hello@kindbasket.app">hello@kindbasket.app</a></p>
                </article>
              </>
            </PolicyLayout>
          );
          <li><a href="#liability">9. Limitation of Liability</a></li>
          <li><a href="#availability">10. Availability of Service</a></li>
          <li><a href="#termination">11. Termination</a></li>
          <li><a href="#changes">12. Changes to Terms</a></li>
          <li><a href="#law">13. Governing Law</a></li>
          <li><a href="#contact">14. Contact</a></li>
        </ul>
      }
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
    </PolicyLayout>
  );
}

function AffiliateDisclosurePage() {
  return (
    <PolicyLayout
      title="Affiliate & Commercial Disclosure"
      summary="Kind Basket may earn money from some links, gift cards, partnerships or retailer integrations, but we aim to keep recommendations transparent and user-first."
      effectiveDate="29 April 2026"
      lastUpdated="29 April 2026"
      version="1.0"
      toc={
        <ul>
          <li><a href="#why">1. Why this disclosure matters</a></li>
          <li><a href="#how">2. How Kind Basket may earn revenue</a></li>
          <li><a href="#rankings">3. How commercial relationships affect rankings</a></li>
          <li><a href="#sponsored">4. Sponsored or promoted results</a></li>
          <li><a href="#giftcards">5. Gift cards and cashback-style savings</a></li>
          <li><a href="#independence">6. Retailer independence</a></li>
          <li><a href="#userfirst">7. User-first recommendation principles</a></li>
          <li><a href="#labelling">8. Clear labelling commitments</a></li>
          <li><a href="#changes">9. Changes to commercial relationships</a></li>
          <li><a href="#contact">10. Contact details</a></li>
        </ul>
      }
    >
      <>
        <div style={{background:'#fffbe6',borderLeft:'6px solid #e6b800',borderRadius:'1rem',padding:'1.2rem 1.5rem',marginBottom:'2rem',boxShadow:'0 2px 16px rgba(44,44,44,0.07)'}}>
          <strong>Transparency pledge:</strong> We will clearly label paid, sponsored or promoted placements. Estimated savings should not be hidden or inflated because of a commercial relationship.
        </div>
        <div style={{background:'#fff',borderRadius:'1rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'1.2rem 1.5rem',marginBottom:'2rem'}}>
          <strong>What we will not do:</strong>
          <ul style={{margin:'0.7rem 0 0 1.2rem',padding:0}}>
            <li>We will not secretly sell placement as organic ranking</li>
            <li>We will not hide material commercial relationships</li>
            <li>We will not claim guaranteed savings where savings are only estimated</li>
            <li>We will not sell personal data</li>
          </ul>
        </div>
        <article id="why">
          <h2>1. Why this disclosure matters</h2>
          <p>Transparency about how Kind Basket earns revenue helps you trust our recommendations and understand any potential influences on rankings or offers.</p>
        </article>
        <article id="how">
          <h2>2. How Kind Basket may earn revenue</h2>
          <ul>
            <li>Affiliate links: We may earn a commission if you click a link and make a purchase.</li>
            <li>Gift card partnerships: We may offer or promote gift cards in partnership with retailers.</li>
            <li>Sponsored placements: If ever used, these will be clearly labelled as sponsored or promoted.</li>
            <li>Retailer integrations: We may receive fees for technical integrations or referrals.</li>
            <li>Premium features: If introduced, some features may be paid or subscription-based.</li>
          </ul>
        </article>
        <article id="rankings">
          <h2>3. How commercial relationships affect rankings</h2>
          <p>We aim to keep rankings and recommendations user-first. Commercial relationships do not guarantee higher placement. Sponsored or promoted results will always be clearly labelled.</p>
        </article>
        <article id="sponsored">
          <h2>4. Sponsored or promoted results</h2>
          <p>If we ever display sponsored or promoted results, these will be clearly marked so you can distinguish them from organic results.</p>
        </article>
        <article id="giftcards">
          <h2>5. Gift cards and cashback-style savings</h2>
          <p>We may offer gift cards or cashback-style savings in partnership with retailers. These offers will be clearly described and are subject to terms.</p>
        </article>
        <article id="independence">
          <h2>6. Retailer independence</h2>
          <p>Kind Basket is independent of all retailers unless explicitly stated. Commercial relationships do not affect our commitment to transparency and user trust.</p>
        </article>
        <article id="userfirst">
          <h2>7. User-first recommendation principles</h2>
          <p>Our recommendations are based on what we believe is best for users, not on commercial incentives. We prioritise transparency, accuracy, and user value.</p>
        </article>
        <article id="labelling">
          <h2>8. Clear labelling commitments</h2>
          <p>We commit to clearly labelling all paid, sponsored, or affiliate content so you can make informed choices.</p>
        </article>
        <article id="changes">
          <h2>9. Changes to commercial relationships</h2>
          <p>We may update our commercial relationships from time to time. Significant changes will be reflected in this disclosure.</p>
        </article>
        <article id="contact">
          <h2>10. Contact details</h2>
          <p>Contact: <a href="mailto:hello@kindbasket.app">hello@kindbasket.app</a></p>
        </article>
      </>
    </PolicyLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-use" element={<TermsOfUsePage />} />
      {/* <Route path="/cookie-policy" element={<CookiePolicyPage />} /> */}
      <Route path="/pricing-disclaimer" element={<PricingDisclaimerPage />} />
      <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

function LegalHubPage() {
// function LegalHubPage() {
//   return (
//     <div style={{background:'#f8f7f3',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
//       <header className="site-header" style={{background:'#fff',boxShadow:'0 2px 16px rgba(44,44,44,0.07)',padding:'1.2rem 0 1.2rem 0',marginBottom:'2rem'}}>
//         <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:'1100px',margin:'0 auto',padding:'0 1.5rem'}}>
//           <Link to="/" className="brand-logo" style={{display:'flex',alignItems:'center',gap:'0.7rem',textDecoration:'none'}}>
//             <span style={{fontWeight:700,fontSize:'1.5rem',color:'#184c32'}}>🧺 Kind Basket</span>
//           </Link>
//           <nav style={{display:'flex',gap:'1.2rem'}}>
//             <Link to="/legal-hub" style={{color:'#184c32',fontWeight:600}}>Legal Hub</Link>
//             <Link to="/contact" style={{color:'#184c32',fontWeight:600}}>Contact</Link>
//           </nav>
//         </div>
//       </header>
//       <main className="legal-hub-main" style={{flex:1}}>
//         <section className="legal-hub-hero" style={{textAlign:'center',marginBottom:'2.5rem'}}>
//           <h1 style={{fontSize:'2.5rem',fontWeight:800,color:'#184c32',marginBottom:'0.5rem'}}>Legal & Trust Centre</h1>
//           <p style={{fontSize:'1.2rem',color:'#184c32',maxWidth:'600px',margin:'0 auto'}}>Clear information about how Kind Basket works, how we use data, and how we keep price comparisons transparent.</p>
//         </section>
//         <section className="legal-hub-cards" style={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center',marginBottom:'2.5rem'}}>
//           <Link to="/terms-of-use" style={cardStyle}><span style={iconStyle}>📜</span> Terms of Use</Link>
//           <Link to="/privacy-policy" style={cardStyle}><span style={iconStyle}>🔒</span> Privacy Policy</Link>
//           <Link to="/cookie-policy" style={cardStyle}><span style={iconStyle}>🍪</span> Cookie Policy</Link>
//           <Link to="/pricing-disclaimer" style={cardStyle}><span style={iconStyle}>💷</span> Pricing & Savings Disclaimer</Link>
//           <Link to="/affiliate-disclosure" style={cardStyle}><span style={iconStyle}>🤝</span> Affiliate & Commercial Disclosure</Link>
//         </section>
//         <section className="trust-principles" style={{maxWidth:'700px',margin:'0 auto 2.5rem auto',background:'#fff',borderRadius:'1rem',boxShadow:'0 1px 8px rgba(44,44,44,0.06)',padding:'2rem 1.5rem'}}>
//           <h2 style={{color:'#184c32',fontWeight:700,fontSize:'1.3rem',marginBottom:'1rem'}}>Our Trust Principles</h2>
//           <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:'0.7rem'}}>
//             <li style={principleStyle}><span style={iconStyle}>💡</span> Transparent pricing</li>
//             <li style={principleStyle}><span style={iconStyle}>🏷️</span> Estimated savings clearly labelled</li>
//             <li style={principleStyle}><span style={iconStyle}>🛡️</span> Privacy-first data handling</li>
//             <li style={principleStyle}><span style={iconStyle}>🧺</span> Independent from retailers unless stated</li>
//           </ul>
//         </section>
//       </main>
//       <footer className="site-footer" style={{background:'#fff',boxShadow:'0 -2px 16px rgba(44,44,44,0.07)',padding:'2rem 0 1rem 0',marginTop:'2rem'}}>
//         <div className="container" style={{maxWidth:'1100px',margin:'0 auto',padding:'0 1.5rem',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.7rem'}}>
//           <nav aria-label="Footer links" className="footer-links" style={{display:'flex',gap:'1.2rem',flexWrap:'wrap',justifyContent:'center'}}>
//             <Link to="/privacy-policy">Privacy Policy</Link>
//             <Link to="/terms-of-use">Terms of Use</Link>
//             <Link to="/cookie-policy">Cookie Policy</Link>
//             <Link to="/pricing-disclaimer">Pricing Disclaimer</Link>
//             <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
//             <Link to="/contact">Contact</Link>
//           </nav>
//           <p style={{color:'#184c32',fontSize:'1rem'}}>Contact: <a href="mailto:hello@kindbasket.app" style={{color:'#184c32',textDecoration:'underline'}}>hello@kindbasket.app</a></p>
//           <p style={{color:'#184c32',fontSize:'0.95rem'}}>Copyright 2026 Kind Basket</p>
//         </div>
//       </footer>
//     </div>
//   );
}

const cardStyle = {
  background: '#fff',
  borderRadius: '1rem',
  boxShadow: '0 1px 8px rgba(44,44,44,0.06)',
  padding: '1.5rem 2rem',
  minWidth: '220px',
  minHeight: '110px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontWeight: 700,
  fontSize: '1.15rem',
  color: '#184c32',
  textDecoration: 'none',
  border: '2px solid #f8f7f3',
  transition: 'border 0.2s',
};
const iconStyle = {
  fontSize: '2rem',
  marginRight: '0.5rem',
};
const principleStyle = {
  background: '#f8f7f3',
  borderRadius: '0.7rem',
  padding: '0.8rem 1.2rem',
  color: '#184c32',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
};
