import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="app-icon">
            <img src="/logo.jpg" alt="VITVerse" className="hero-logo-img" />
          </div>
          <div className="app-info">
            <h1 className="app-title">VITVerse</h1>
            <p className="app-developer">Independent Developer</p>
            <div className="app-meta">
              <div className="meta-item">
                <span className="meta-value">4.8★</span>
                <span className="meta-label">500+ reviews</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-value">5K+</span>
                <span className="meta-label">Downloads</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <span className="meta-badge">v1.2.0</span>
                <span className="meta-label">Current Version</span>
              </div>
            </div>
            <a href="#download" className="btn-install">Install</a>
          </div>
        </div>
        <div className="hero-actions">
          <button className="btn-icon" aria-label="Share">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
          </button>
          {/* <button className="btn-icon" aria-label="Add to wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
          </button> */}
        </div>
      </div>
      <p className="hero-description">
        Your Complete VTOP Companion & Campus Utility Hub. Seamlessly access VTOP services, track attendance, manage timetables, and explore campus features. The ultimate all-in-one app for VIT Chennai students.
      </p>
    </section>
  )
}

export default Hero
