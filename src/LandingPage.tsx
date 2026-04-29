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
import logoLarge from "./assets/Website Logo large.png";

type IconName =
  | "list"
  | "compare"
  | "save"
  | "calendar"
  | "card"
  | "gift"
  | "badger";

const trustItems = [
  "Built for UK grocery shoppers",
  "Simple enough for everyone",
  "Savings you can actually see"
];

const howItWorks = [
  {
    title: "Build your list",
    text: "Add the items you need for your weekly shop.",
    icon: "list" as const
  },
  {
    title: "Compare prices",
    text: "See where your basket costs less across supermarkets.",
    icon: "compare" as const
  },
  {
    title: "Save every week",
    text: "Track your savings over time and shop with confidence.",
    icon: "save" as const
  }
];

const features = [
  { title: "Smart shopping lists", icon: "list" as const },
  { title: "Supermarket price comparison", icon: "compare" as const },
  { title: "Weekly and monthly savings", icon: "calendar" as const },
  { title: "Loyalty card storage", icon: "card" as const },
  { title: "Rewards and gift cards", icon: "gift" as const },
  { title: "Bram's helpful tips", icon: "badger" as const }
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
          Join waitlist
        </a>
      </header>

      <main id="main-content">
        <section className="hero fade-in">
          <div className="hero-copy">
            <p className="eyebrow">Friendly UK grocery savings app</p>
            <h1>Save more on every shop.</h1>
            <p>
              Build your list, compare supermarket prices, and watch your savings
              grow.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#waitlist">
                Join the waitlist
              </a>
              <a className="btn btn-secondary" href="#how-it-works">
                See how it works
              </a>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <aside className="mascot-card" aria-label="Bram mascot area">
              {/* TODO: Replace this placeholder with official Bram the Badger artwork when available in project assets. */}
              <div
                className="mascot-illustration"
                role="img"
                aria-label="Friendly Bram the Badger placeholder illustration"
              >
                <span>Bram</span>
              </div>
              <p>Bram is here to make shopping calmer and kinder.</p>
            </aside>

            <div className="phone-mockup floating" aria-label="Kind Basket app preview">
              {/* TODO: Replace this mockup with real app screenshot from project assets if available. */}
              <div className="phone-notch" aria-hidden="true" />
              <div className="phone-screen">
                <p className="screen-title">This week</p>
                <h3>Estimated savings</h3>
                <p className="savings-pill">+ GBP 14.20 vs usual shop</p>
                <ul>
                  <li>
                    <span>Milk 2L</span>
                    <strong>GBP 1.45</strong>
                  </li>
                  <li>
                    <span>Pasta</span>
                    <strong>GBP 0.89</strong>
                  </li>
                  <li>
                    <span>Apples</span>
                    <strong>GBP 2.10</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip fade-in" aria-label="Trust statements">
          {trustItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>

        <section id="how-it-works" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Three simple steps every week</h2>
          </div>
          <div className="card-grid three-up">
            {howItWorks.map((step) => (
              <article key={step.title} className="info-card lift-on-hover">
                <div className="card-title-row">
                  <CardIcon name={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="section fade-in">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2>Everything you need for smarter grocery shopping</h2>
          </div>
          <div className="card-grid feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card lift-on-hover">
                <div className="card-title-row">
                  <CardIcon name={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>
                  Designed to keep planning, comparing, and saving clear for all
                  ages.
                </p>
              </article>
            ))}
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
                  <p className="best-price">Best today: Aldi</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section bram-section fade-in">
          <div>
            <p className="eyebrow">Bram the Badger</p>
            <h2>Let Bram do the hard work.</h2>
            <p>
              Bram helps spot better prices, track your progress, and keep your
              weekly shop simple.
            </p>
            <ul className="benefit-points">
              <li>Finds better prices</li>
              <li>Tracks your savings</li>
              <li>Keeps shopping simple</li>
            </ul>
          </div>
          <div className="bram-visual" role="img" aria-label="Bram mascot placeholder">
            {/* TODO: Replace with final Bram illustration asset when available. */}
            <span>Bram mascot area</span>
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
              {state.submitting ? "Joining..." : "Join waitlist"}
            </button>
            <ValidationError errors={state.errors} className="waitlist-error" />
          </form>
        </section>
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

export default LandingPage;
