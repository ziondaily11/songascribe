import { useState } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <video
        className="hero-video"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Animated waveform hero video"
      />

      <header className="topbar">
        <a className="brand" href="#product" aria-label="Songascribe home">
          <span className="brand-name">Songascribe</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="nav-actions" aria-label="Authentication actions">
          <button type="button" className="nav-button nav-button--ghost">
            Sign in
          </button>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close mobile navigation menu' : 'Open mobile navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="mobile-menu-toggle__line" />
            <span className="mobile-menu-toggle__line" />
            <span className="mobile-menu-toggle__line" />
          </button>
          <button type="button" className="nav-button nav-button--outline desktop-only-create-account">
            Create account
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation menu">
          <a href="#product">Product</a>
          <a href="#how-it-works">How it works</a>
          <a href="#pricing">Pricing</a>
          <button type="button" className="mobile-menu__create-account">
            Create account
          </button>
        </nav>
      )}

      <main className="hero" id="product">
        <div className="hero-copy">
          <h1>
            <span>Turn every voice</span>
            <span>into words.</span>
          </h1>

          <p className="supporting-text">
            Fast, accurate transcription for interviews,
            <br />
            meetings, podcasts, and more.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-button">
              Start transcribing <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="secondary-button">
              See how it works
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
