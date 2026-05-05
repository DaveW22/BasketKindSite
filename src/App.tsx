import { Navigate, Route, Routes } from "react-router-dom";
import AuthVerifiedPage from "./AuthVerifiedPage";
import LandingPage from "./LandingPage";
import PolicyLayout from "./PolicyLayout";

function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      summary="This policy explains what personal data we collect, why we use it, how we protect it, and your rights."
      effectiveDate="29 April 2026"
      lastUpdated="29 April 2026"
      version="1.0"
    >
      <>
        <article>
          <h2>1. Who we are</h2>
          <p>
            Kind Basket Ltd is the data controller for the Kind Basket website and app.
            For privacy requests, contact hello@kindbasket.app.
          </p>
        </article>
        <article>
          <h2>2. Data we collect</h2>
          <p>
            We collect account details, shopping preferences, and limited technical data
            needed to operate and improve the service.
          </p>
        </article>
        <article>
          <h2>3. How we use data</h2>
          <p>
            We use your data to run Kind Basket, improve product features, keep the app
            secure, and provide account support.
          </p>
        </article>
        <article>
          <h2>4. Your rights</h2>
          <p>
            You can request access, correction, deletion, or restriction of your data in
            line with UK GDPR rights.
          </p>
        </article>
      </>
    </PolicyLayout>
  );
}

function TermsOfUsePage() {
  return (
    <PolicyLayout
      title="Terms of Use"
      summary="These terms explain how Kind Basket can be used and the limits of pricing and savings information."
      effectiveDate="29 April 2026"
      lastUpdated="29 April 2026"
      version="1.0"
    >
      <>
        <article>
          <h2>1. Using Kind Basket</h2>
          <p>
            You agree to use Kind Basket lawfully and not interfere with the service,
            systems, or other users.
          </p>
        </article>
        <article>
          <h2>2. Price and savings information</h2>
          <p>
            Prices and savings are estimates based on available data and may change.
            Always confirm final price and availability with the retailer.
          </p>
        </article>
        <article>
          <h2>3. Liability</h2>
          <p>
            To the fullest extent permitted by law, Kind Basket is not liable for losses
            caused by retailer pricing changes, stock changes, or reliance on estimates.
          </p>
        </article>
      </>
    </PolicyLayout>
  );
}

function PricingDisclaimerPage() {
  return (
    <PolicyLayout
      title="Pricing & Savings Disclaimer"
      summary="Kind Basket helps compare basket prices, but final prices, stock, and promotions are controlled by retailers."
      effectiveDate="29 April 2026"
      lastUpdated="29 April 2026"
      version="1.0"
    >
      <>
        <article>
          <h2>1. Estimated data</h2>
          <p>
            Price and savings figures are estimates from available data and are not a
            guarantee.
          </p>
        </article>
        <article>
          <h2>2. Retailer changes</h2>
          <p>
            Promotions, loyalty pricing, delivery fees, and stock can change without
            notice.
          </p>
        </article>
      </>
    </PolicyLayout>
  );
}

function AffiliateDisclosurePage() {
  return (
    <PolicyLayout
      title="Affiliate & Commercial Disclosure"
      summary="Kind Basket may earn commissions from selected links or partnerships, and we aim to keep recommendations transparent and user-first."
      effectiveDate="29 April 2026"
      lastUpdated="29 April 2026"
      version="1.0"
    >
      <>
        <article>
          <h2>1. Commercial relationships</h2>
          <p>
            We may earn revenue through affiliate links, selected partnerships, and
            future premium features.
          </p>
        </article>
        <article>
          <h2>2. Transparency</h2>
          <p>
            Sponsored or promoted results are labelled clearly. We do not sell personal
            data.
          </p>
        </article>
      </>
    </PolicyLayout>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/verified" element={<AuthVerifiedPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-use" element={<TermsOfUsePage />} />
      <Route path="/pricing-disclaimer" element={<PricingDisclaimerPage />} />
      <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
