import { Link } from "react-router-dom";
import logoLarge from "./Assets/Website Logo large.png";
import "./App.css";
import React from "react";

interface PolicyLayoutProps {
  title: string;
  summary: string;
  effectiveDate: string;
  lastUpdated?: string;
  version?: string;
  children: React.ReactNode;
  toc?: React.ReactNode;
}

export default function PolicyLayout({
  title,
  summary,
  effectiveDate,
  lastUpdated,
  version,
  children,
  toc
}: PolicyLayoutProps) {
  return (
    <div className="site-shell legal-shell">
      <header className="top-nav legal-top-nav">
        <Link className="brand-lockup" to="/">
          <img src={logoLarge} alt="Kind Basket logo" className="site-logo-large" />
        </Link>
        <nav className="legal-hub-nav">
          <span className="legal-hub-title">Legal Hub</span>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="doc-page">
        <section className="doc-hero fade-in">
          <h1>{title}</h1>
          <div className="policy-summary-card">
            <p>{summary}</p>
            <div className="policy-meta">
              <span>Effective: {effectiveDate}</span>
              {lastUpdated && <span>Last updated: {lastUpdated}</span>}
              {version && <span>Version: {version}</span>}
            </div>
          </div>
        </section>
        <div className="policy-main-layout">
          <aside className="policy-toc">
            {toc}
          </aside>
          <section className="policy-content">
            {children}
          </section>
        </div>
        <div className="trust-bar">
          Independent app • Transparent pricing • Data minimisation • UK-focused
        </div>
      </main>
      <footer className="site-footer">
        <nav className="footer-links">
          <Link to="/terms-of-use">Terms</Link>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/cookie-policy">Cookies</Link>
          <Link to="/pricing-disclaimer">Pricing Disclaimer</Link>
          <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="brand-name">Kind Basket</p>
        <p>Smarter grocery shopping, made simple.</p>
        <p>Copyright 2026 Kind Basket</p>
      </footer>
    </div>
  );
}
