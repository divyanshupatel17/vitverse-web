import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#">
        <div className="logo-section">
          <img src="/logo.jpg" alt="VITVerse Logo" className="app-logo" />
          <span className="logo-text lora">VIT Verse</span>
        </div>
        </a>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
