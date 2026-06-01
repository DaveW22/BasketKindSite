import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AuthVerifiedPage from "./AuthVerifiedPage";
import LandingPage from "./LandingPage";
import PolicyLayout from "./PolicyLayout";

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionSelector = 'meta[name="description"]';
    const existingDescription = document.querySelector<HTMLMetaElement>(descriptionSelector);
    const previousDescription = existingDescription?.getAttribute("content") ?? null;

    document.title = title;

    if (existingDescription) {
      existingDescription.setAttribute("content", description);
    } else {
      const createdDescription = document.createElement("meta");
      createdDescription.name = "description";
      createdDescription.content = description;
      document.head.appendChild(createdDescription);
    }

    return () => {
      document.title = previousTitle;

      const currentDescription = document.querySelector<HTMLMetaElement>(descriptionSelector);
      if (!currentDescription) {
        return;
      }

      if (previousDescription !== null) {
        currentDescription.setAttribute("content", previousDescription);
      } else {
        currentDescription.remove();
      }
    };
  }, [title, description]);
}

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

function BrandRightsPage() {
  usePageMeta(
    "Brand Rights & Trade Mark Notice | Kind Basket",
    "Learn about Kind Basket™ brand rights, trade mark notice, copyright ownership and third-party trade mark references."
  );

  return (
    <PolicyLayout
      title="Brand Rights & Trade Mark Notice"
      summary="This notice outlines the brand rights we claim in Kind Basket™ and how third-party names are referenced for informational and comparison purposes."
      effectiveDate="2 June 2026"
      lastUpdated="2 June 2026"
      version="1.0"
    >
      <>
        <article>
          <h2>About Kind Basket™</h2>
          <p>
            Kind Basket™ is a UK-based grocery savings and shopping optimisation
            service currently in development.
          </p>
        </article>

        <article>
          <h2>Brand Rights Ownership</h2>
          <p>
            The Kind Basket™ name, logo, visual identity, mascot, product concepts,
            website content, interface designs, copy, graphics, domain names, social
            media handles and related brand assets are currently owned by the founder
            of the Kind Basket™ project, unless otherwise stated.
          </p>
          <p>
            Following formal business registration, ownership of these brand assets
            may be assigned, transferred or licensed to Cynevor Group Ltd or another
            associated company. This notice will be updated to reflect any such
            change.
          </p>
          <p>
            We use the ™ symbol to indicate that we claim trade mark rights in the
            Kind Basket™ name and associated brand identity. A formal UK trade mark
            application may be prepared and submitted for the relevant goods and
            services connected with grocery price comparison, shopping list
            optimisation, consumer savings tools, food waste reduction, digital
            applications, software services and related online services.
          </p>
          <p>
            No permission is granted to copy, imitate, register, use, reproduce,
            adapt or create confusingly similar branding, names, logos, mascots,
            domain names, social handles, product designs or commercial materials
            connected with Kind Basket™.
          </p>
        </article>

        <article>
          <h2>Copyright Notice</h2>
          <p>
            All website text, designs, graphics, icons, layouts, illustrations,
            product concepts and original creative works are protected by copyright
            from the date of creation. Unauthorised use, copying, adaptation,
            distribution or reproduction may result in legal action.
          </p>
        </article>

        <article>
          <h2>Third-Party Trade Marks</h2>
          <p>
            References to supermarkets, retailers, product names, third-party logos
            or third-party trade marks are for descriptive, compatibility, comparison
            or informational purposes only.
          </p>
          <p>
            Kind Basket™ is independent and is not endorsed by, affiliated with, or
            sponsored by any supermarket, retailer or third-party brand unless
            expressly stated.
          </p>
        </article>

        <article>
          <h2>Permitted References</h2>
          <p>
            You may refer to Kind Basket™ in normal editorial, review, commentary or
            news contexts, provided that the reference is accurate, fair,
            non-misleading and does not imply endorsement, partnership or ownership.
          </p>
          <p>
            You may not use the Kind Basket™ name, logo, mascot, brand identity or
            confusingly similar branding in a way that suggests you own, operate,
            represent or are affiliated with Kind Basket™.
          </p>
        </article>

        <article>
          <h2>Contact</h2>
          <p>
            If you believe any material on this site infringes your rights, or if
            you wish to request permission to use any Kind Basket™ brand asset,
            please contact:
          </p>
          <p>
            <a href="mailto:trademark@kindbasket.co.uk">trademark@kindbasket.co.uk</a>
          </p>
        </article>

        <aside className="policy-disclaimer-box" aria-label="Notice disclaimer">
          This notice is provided for general brand protection and transparency
          purposes. It does not replace formal trade mark registration or legal
          advice.
        </aside>
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
      <Route path="/brand-rights" element={<BrandRightsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
