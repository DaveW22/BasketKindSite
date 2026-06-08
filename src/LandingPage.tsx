import { useEffect, useState } from "react";
function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);
  function handleConsent(accepted: boolean) {
    localStorage.setItem("cookieConsent", accepted ? "accepted" : "rejected");
    setVisible(false);
  }
  if (!visible) return null;
  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <p>
        Kind Basket uses cookies for essential site functionality and analytics. By clicking Accept, you agree to our use of cookies. See our <a href="/privacy-policy#cookies-and-tracking">Cookie Policy</a> for details.
      </p>
      <div className="cookie-banner-actions">
        <button className="btn btn-primary" onClick={() => handleConsent(true)}>
          Accept
        </button>
        <button className="btn btn-secondary" onClick={() => handleConsent(false)}>
          Reject
        </button>
      </div>
    </div>
  );
}
import { ValidationError, useForm } from "@formspree/react";
import { Link } from "react-router-dom";
import logoLarge from "./Assets/Website Logo large.png";

type IconName =
  | "list"
  | "compare"
  | "save"
  | "calendar"
  | "card"
  | "gift"
  | "badger";

const trustItems = [
  "Built for UK shoppers",
  "Single-shop or split-shop options",
  "Savings tracking"
];

const howItWorks = [
  {
    title: "Build your list",
    text: "Add your usual groceries, quantities, and favourites.",
    icon: "list" as const
  },
  {
    title: "Compare your basket",
    text: "See estimated basket totals from selected UK supermarkets where data is available.",
    icon: "compare" as const
  },
  {
    title: "Choose your saving mode",
    text: "Pick Easy Save for one shop, Balanced Save for sensible splits, or Max Save for the biggest estimated saving.",
    icon: "calendar" as const
  },
  {
    title: "Shop and track savings",
    text: "Use your optimised list and track what you could save over time.",
    icon: "save" as const
  }
];

const featurePillars = [
  {
    title: "List",
    heading: "Build your weekly shop in minutes.",
    text: "Create your grocery list quickly with regular items, quantities, and favourites.",
    icon: "list" as const,
    bullets: ["Manual item entry", "Product search", "Favourite/repeat lists"]
  },
  {
    title: "Optimise",
    heading: "Find the best shop or split-shop saving.",
    text: "Compare your basket using available price data from selected UK supermarkets and choose the option that balances saving, time, and convenience.",
    icon: "compare" as const,
    bullets: [
      "Loyalty price toggle where available",
      "Easy Save, Balanced Save, and Max Save",
      "Store-by-store optimised shopping list"
    ]
  },
  {
    title: "Save",
    heading: "Track what you save each week.",
    text: "See estimated savings for each shop and watch small weekly savings add up over time.",
    icon: "save" as const,
    bullets: ["Estimated savings per shop", "Weekly savings history", "Savings dashboard"]
  }
];

const comingSoonFeatures = [
  "Receipt scanning",
  "Voucher alerts",
  "Recipe planning",
  "Loyalty card wallet",
  "Price history"
];

const futureVisionFeatures = [
  "Checkout export",
  "Community recipes",
  "Cook and Care",
  "Gift card savings",
  "Partner offers"
];

// Parked future idea, intentionally not shown on the homepage roadmap: Bram's helpful tips.

const savingModes = [
  {
    title: "Easy Save",
    heading: "One-shop convenience",
    text: "The lowest estimated single-supermarket total for your full basket.",
    icon: "compare" as const
  },
  {
    title: "Balanced Save",
    heading: "Sensible split-shop saving",
    text: "A sensible split-shop option only when the saving looks worth the extra effort.",
    icon: "calendar" as const
  },
  {
    title: "Max Save",
    heading: "Biggest estimated saving",
    text: "The biggest estimated saving across multiple shops.",
    icon: "save" as const
  }
];

const transparencyPoints = [
  {
    title: "Basket totals are estimates",
    text: "We compare available price data to estimate where your shop may cost less."
  },
  {
    title: "Loyalty prices where available",
    text: "When loyalty pricing data is available, you can choose whether to include it in your comparison."
  },
  {
    title: "You choose the trade-off",
    text: "Compare one-shop convenience against split-shop savings before deciding what works for you."
  },
  {
    title: "No unnecessary extra trips",
    text: "Kind Basket should highlight when a split shop may not be worth the extra time or travel."
  },
  {
    title: "Clear confidence indicators",
    text: "We aim to show when price data may vary by location, promotion, or availability."
  }
];

function CardIcon({ name }: { name: IconName }) {
  const icons: Record<IconName, JSX.Element> = {
    list: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.5h2.2v2.2H5V6.5Zm3.8.4h10.2v1.4H8.8V6.9Zm-3.8 4.2h2.2v2.2H5v-2.2Zm3.8.4h10.2v1.4H8.8v-1.4Zm-3.8 4.2h2.2v2.2H5v-2.2Zm3.8.4h10.2v1.4H8.8v-1.4Z" />
      </svg>
    ),
    compare: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7.2h6.8V9H5V7.2Zm0 3.8h9.6v1.8H5V11Zm0 3.8h5.4v1.8H5v-1.8Zm11.4-8.2 2.6 2.6 2.6-2.6 1.2 1.2-3.8 3.8-3.8-3.8 1.2-1.2Zm0 10.8-1.2-1.2 3.8-3.8 3.8 3.8-1.2 1.2-2.6-2.6-2.6 2.6Z" />
      </svg>
    ),
    save: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.8a7.4 7.4 0 0 1 5.4 2.2l-1.2 1.2A5.8 5.8 0 1 0 17.8 12h1.8A7.6 7.6 0 1 1 12 3.8Zm.6 3.2v4.2l3.2 1.9-.9 1.5-4.1-2.4V7h1.8Zm7.2.2h-2.6V4.6H19v2.6h.8Z" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3.8h1.8V6H7V3.8Zm8.2 0H17V6h-1.8V3.8ZM4.8 6H19a2 2 0 0 1 2 2v10.2a2 2 0 0 1-2 2H4.8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 3.2v9H19v-9H4.8Zm2.4 2.2h3.4v3.4H7.2v-3.4Zm5.2 0h4.6v1.6h-4.6v-1.6Zm0 2.4h3.2v1.6h-3.2v-1.6Z" />
      </svg>
    ),
    card: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.2 6.2A2.2 2.2 0 0 1 5.4 4h13.2a2.2 2.2 0 0 1 2.2 2.2v11.6a2.2 2.2 0 0 1-2.2 2.2H5.4a2.2 2.2 0 0 1-2.2-2.2V6.2Zm1.8 2.2H19V6.2H5v2.2Zm0 2v7.4H19v-7.4H5Zm1.4 1.8h4.2V14H6.4v-1.8Z" />
      </svg>
    ),
    gift: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9.2h14a1.8 1.8 0 0 1 1.8 1.8V13H3.2v-2a1.8 1.8 0 0 1 1.8-1.8ZM11.2 13h1.6v7h-1.6v-7Zm-6.2 1.8h5v5.2H5v-5.2Zm9 0h5v5.2h-5v-5.2ZM9.5 5.4c0 1.2.8 2.2 2.5 3.1l-.8 1.4C8.7 8.6 7.8 7.2 7.8 5.4A2.6 2.6 0 0 1 10.4 3c1.4 0 2.3.9 2.8 2 .5-1.1 1.4-2 2.8-2a2.6 2.6 0 0 1 2.6 2.4c0 1.8-.9 3.2-3.4 4.5l-.8-1.4c1.7-.9 2.5-1.9 2.5-3.1 0-.5-.4-.8-.8-.8-.8 0-1.2.8-1.8 2.1l-1.1 2.1-1.1-2.1c-.6-1.3-1-2.1-1.8-2.1-.4 0-.8.3-.8.8Z" />
      </svg>
    ),
    badger: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.2c2.2 0 4.2.8 5.6 2.2 1.5 1.5 2.4 3.5 2.4 5.8 0 4.8-3.6 8.4-8 8.4s-8-3.6-8-8.4c0-2.3.9-4.3 2.4-5.8A7.8 7.8 0 0 1 12 3.2Zm-4 4.6a1.2 1.2 0 1 0 0 2.4h.6V7.8H8Zm8 0v2.4h.6a1.2 1.2 0 0 0 0-2.4H16ZM10 10.4h4v5.2h-4v-5.2Zm-2 6.2h8v1.8H8v-1.8Z" />
      </svg>
    )
  };

  return (
    <span className="card-icon" aria-hidden="true">
      {icons[name]}
    </span>
  );
}

function LandingPage() {
  const [state, handleSubmit] = useForm("mwvadlwy");

  return (
    <div className="site-shell">
      <CookieConsentBanner />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="top-nav">
        <div className="brand-lockup">
          <img src={logoLarge} alt="Kind Basket logo" className="site-logo-large" />
          <div>
            <p className="brand-name">Kind Basket</p>
            <p className="brand-sub">Smarter grocery savings</p>
          </div>
        </div>

        <nav aria-label="Main navigation" className="desktop-nav">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#app-showcase">App</a>
          <a href="#waitlist">Waitlist</a>
        </nav>

        <a className="btn btn-primary nav-cta" href="#waitlist">
          Join the waitlist
        </a>
      </header>

      <main id="main-content">
        <section className="hero fade-in">
          <div className="hero-copy">
            <p className="eyebrow">Friendly UK grocery savings app</p>
            <h1>Your weekly shop, optimised.</h1>
            <p>
              Build your grocery list, compare basket totals from selected UK
              supermarkets, and see whether one shop or a split shop could save
              you more.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#waitlist">
                Join the waitlist
              </a>
              <a className="btn btn-secondary" href="#how-it-works">
                See how it works
              </a>
            </div>
            <p className="hero-support">
              Built for UK shoppers. Launching soon. No spam — just early access
              updates.
            </p>
          </div>

          <div className="hero-visual-wrap">
            <div className="phone-mockup floating" aria-label="Illustrative Kind Basket basket comparison preview">
              {/* TODO: Replace this mockup with real app screenshot from project assets if available. */}
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <p className="screen-title">Illustrative basket comparison</p>
                <h3>Your weekly shop</h3>
                <p className="savings-pill">Estimated saving: GBP 8.20</p>
                <ul>
                  <li>
                    <span>Tesco</span>
                    <strong>GBP 62.40</strong>
                  </li>
                  <li>
                    <span>Asda</span>
                    <strong>GBP 58.90</strong>
                  </li>
                  <li>
                    <span>Lidl + Asda</span>
                    <strong>GBP 54.20</strong>
                  </li>
                </ul>
                <div className="save-mode-row" aria-label="Saving modes">
                  <span>Easy</span>
                  <span>Balanced</span>
                  <span>Max</span>
                </div>
              </div>
            </div>

            <aside className="mascot-card" aria-label="Bram tip">
              {/* TODO: Replace this placeholder with official Bram the Badger artwork when available in project assets. */}
              <div
                className="mascot-illustration"
                role="img"
                aria-label="Bram, the Kind Basket mascot, holding a grocery basket"
              >
                <span>Bram</span>
              </div>
              <p>Bram adds friendly tips while the basket comparison stays in charge.</p>
            </aside>
          </div>
        </section>

        <section className="trust-strip fade-in" aria-label="Trust statements">
          {trustItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>

        <section id="compare" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">The weekly shop problem</p>
            <h2>Supermarket prices and loyalty offers can be hard to compare.</h2>
            <p>
              Prices, promotions, loyalty offers, and product ranges vary from
              shop to shop, so it is easy to miss small savings week to week.
            </p>
          </div>
          <div className="card-grid feature-grid">
            <article className="feature-card lift-on-hover">
              <p className="feature-label">Without Kind Basket</p>
              <h3>More guesswork</h3>
              <ul className="feature-list">
                <li>You pick one shop and assume it is best value</li>
                <li>Prices, promotions, and loyalty offers vary</li>
                <li>It is easy to miss better-value alternatives</li>
              </ul>
            </article>
            <article className="feature-card lift-on-hover">
              <p className="feature-label">With Kind Basket</p>
              <h3>Clearer choices</h3>
              <ul className="feature-list">
                <li>Compare your full basket before you shop</li>
                <li>See estimated savings clearly</li>
                <li>Choose the option that fits your week</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="how-it-works" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>How it works</h2>
            <p>Kind Basket is designed around one simple weekly flow.</p>
          </div>
          <ol className="card-grid four-up step-list">
            {howItWorks.map((step) => (
              <li key={step.title} className="info-card lift-on-hover">
                <div className="card-title-row">
                  <CardIcon name={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="section-cta">
            <a className="btn btn-primary" href="#waitlist">
              Join the waitlist
            </a>
          </div>
        </section>

        <section id="features" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2>List. Optimise. Save.</h2>
          </div>
          <div className="card-grid feature-grid">
            {featurePillars.map((feature) => (
              <article key={feature.title} className="feature-card lift-on-hover">
                <div className="card-title-row">
                  <CardIcon name={feature.icon} />
                </div>
                <p className="feature-label">{feature.title}</p>
                <h3>{feature.heading}</h3>
                <p>{feature.text}</p>
                <ul className="feature-list">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <a className="btn btn-primary" href="#waitlist">
              Join the waitlist
            </a>
          </div>
        </section>

        <section id="saving-modes" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">Saving modes</p>
            <h2>Choose how you want to save</h2>
            <p>
              Kind Basket should never push you into extra trips for tiny
              savings. You stay in control of whether convenience or maximum
              saving matters most.
            </p>
          </div>
          <div className="card-grid feature-grid">
            {savingModes.map((mode) => (
              <article key={mode.title} className="feature-card lift-on-hover">
                <div className="card-title-row">
                  <CardIcon name={mode.icon} />
                </div>
                <p className="feature-label">{mode.title}</p>
                <h3>{mode.heading}</h3>
                <p>{mode.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="trust" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">Trust and transparency</p>
            <h2>How Kind Basket calculates savings</h2>
            <p>
              Supermarket prices, promotions, loyalty prices, and availability
              can change. Kind Basket is designed to make savings clearer, not
              to hide the details.
            </p>
            <p>
              Prices, promotions, availability, and loyalty offers may vary by
              store, location, and time. Kind Basket savings are estimates based
              on available data.
            </p>
          </div>
          <div className="card-grid feature-grid">
            {transparencyPoints.map((point) => (
              <article key={point.title} className="feature-card lift-on-hover">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="accessibility" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">Accessibility</p>
            <h2>Designed for everyday UK shoppers</h2>
            <p>
              Kind Basket is being designed to be simple, readable, and
              accessible — whether you want a quick weekly comparison, clearer
              savings, or a less overwhelming way to plan your shop.
            </p>
          </div>
          <div className="card-grid feature-grid">
            <article className="feature-card lift-on-hover">
              <p className="feature-label">Simple</p>
              <h3>Clear choices</h3>
              <p>Compare, optimise, and save without overcomplicating your shop.</p>
            </article>
            <article className="feature-card lift-on-hover">
              <p className="feature-label">Readable</p>
              <h3>Plain language</h3>
              <p>Savings and trade-offs are explained in practical terms.</p>
            </article>
            <article className="feature-card lift-on-hover">
              <p className="feature-label">Inclusive</p>
              <h3>Everyday support</h3>
              <p>Built to support everyday UK households and make grocery choices clearer.</p>
            </article>
          </div>
        </section>

        <section id="roadmap" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">Roadmap</p>
            <h2>Coming soon</h2>
            <p>
              The launch app stays focused on List, Optimise, Save. These ideas
              show where Kind Basket can grow next.
            </p>
          </div>
          <div className="roadmap-grid">
            <article className="future-vision">
              <p className="eyebrow">Coming soon</p>
              <h3>Near-future tools</h3>
              <ul className="feature-list">
                {comingSoonFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
            <article className="future-vision">
              <p className="eyebrow">Future vision</p>
              <h3>Longer-term ideas</h3>
              <ul className="feature-list">
                {futureVisionFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="app-showcase" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">App showcase</p>
            <h2>See your progress at a glance</h2>
          </div>
          <div className="showcase-grid">
            <article className="phone-card lift-on-hover" aria-label="Your List view">
              <h3>Your List</h3>
              <div className="mini-phone">
                <div className="mini-screen">
                  <p>Weekly list</p>
                  <ul className="list-rows">
                    <li>
                      <span>Wholemeal bread</span>
                      <strong>GBP 1.25</strong>
                    </li>
                    <li>
                      <span>Eggs x12</span>
                      <strong>GBP 2.40</strong>
                    </li>
                    <li>
                      <span>Chicken breast</span>
                      <strong>GBP 4.80</strong>
                    </li>
                    <li>
                      <span>Bananas</span>
                      <strong>GBP 1.05</strong>
                    </li>
                  </ul>
                  <p className="total-row">Basket total: GBP 9.50</p>
                </div>
              </div>
            </article>

            <article className="phone-card lift-on-hover" aria-label="Your Savings view">
              <h3>Your Savings</h3>
              <div className="mini-phone">
                <div className="mini-screen">
                  <p>Monthly savings</p>
                  <div className="chart" aria-hidden="true">
                    <span style={{ height: "32%" }} />
                    <span style={{ height: "54%" }} />
                    <span style={{ height: "72%" }} />
                    <span style={{ height: "88%" }} />
                  </div>
                  <div className="stats">
                    <p>This week: GBP 16.10</p>
                    <p>This month: GBP 58.40</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="phone-card lift-on-hover" aria-label="Compare Prices view">
              <h3>Compare Prices</h3>
              <div className="mini-phone">
                <div className="mini-screen">
                  <p>Basket comparison</p>
                  <ul className="compare-list">
                    <li>
                      <span>Aldi</span>
                      <strong>GBP 32.40</strong>
                    </li>
                    <li>
                      <span>Tesco</span>
                      <strong>GBP 35.15</strong>
                    </li>
                    <li>
                      <span>Sainsbury's</span>
                      <strong>GBP 36.02</strong>
                    </li>
                    <li>
                      <span>Asda</span>
                      <strong>GBP 34.70</strong>
                    </li>
                  </ul>
                  <p className="best-price">Lowest estimate: Aldi</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section bram-section fade-in">
          <div>
            <p className="eyebrow">Bram the Badger</p>
            <h2>A friendly guide, not the whole product.</h2>
            <p>
              Bram supports the experience with gentle tips and plain-English
              explanations while Kind Basket handles the comparison, optimisation,
              and savings tracking.
            </p>
            <ul className="benefit-points">
              <li>Explains saving modes</li>
              <li>Highlights useful tips</li>
              <li>Keeps shopping decisions simple</li>
            </ul>
          </div>
          <div
            className="bram-visual"
            role="img"
            aria-label="Bram, the Kind Basket mascot, offering a helpful shopping tip"
          >
            {/* TODO: Replace with final Bram illustration asset when available. */}
            <span>Bram mascot area</span>
          </div>
        </section>

        <section id="mission" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">Mission</p>
            <h2>Why we’re building Kind Basket</h2>
            <p>
              Grocery shopping has become harder to compare. Prices, promotions,
              loyalty offers, and different supermarket ranges can make it
              difficult to know where your basket is really best value. Kind
              Basket is being built to make those choices clearer, simpler, and
              less overwhelming for UK shoppers.
            </p>
          </div>
          <div className="future-vision mission-card">
            <p>
              Our aim is simple: help people make their food budget go further
              without making shopping more complicated.
            </p>
          </div>
        </section>

        <section id="waitlist" className="section waitlist fade-in">
          <div className="section-head">
            <p className="eyebrow">Early access</p>
            <h2>Be first to try Kind Basket.</h2>
            <p>
              Join the early access list and help shape the future of smarter
              grocery shopping.
            </p>
          </div>
          {state.succeeded ? (
            <p className="waitlist-success" role="status" aria-live="polite">
              Thanks for joining the waitlist. We will be in touch soon.
            </p>
          ) : null}
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input type="hidden" name="source" value="kind-basket-landing" />
            <input
              type="hidden"
              name="_subject"
              value="New Kind Basket waitlist signup"
            />
            <label className="sr-only" htmlFor="company-name">
              Company name
            </label>
            <input
              id="company-name"
              className="honeypot-field"
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              disabled={state.submitting}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="waitlist-error"
            />
            <button className="btn btn-primary" type="submit">
              {state.submitting ? "Joining..." : "Join the waitlist"}
            </button>
            <ValidationError errors={state.errors} className="waitlist-error" />
          </form>
          <p className="waitlist-reassurance">
            We’ll only email you about Kind Basket launch updates. Unsubscribe
            anytime.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand-name">Kind Basket™</p>
          <p>Smarter grocery shopping, made simple.</p>
        </div>
        <nav aria-label="Footer links" className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/brand-rights">Brand Rights</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p>
          © 2026 Kind Basket. Kind Basket™ and Bram™ are claimed trade marks of their owner. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
