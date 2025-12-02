import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-disclaimer">
          <p>Built with ❤️ just for entertainment purposes... no deep VIT missions here</p>
          <p>Not affiliated with VIT Chennai. Developed independently by a VIT Chennai student.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/divyanshupatel17/vit-connect/blob/main/docs/PRIVACY_POLICY.md" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <span className="footer-divider">•</span>
          <a href="https://github.com/divyanshupatel17/vit-connect/blob/main/docs/TERMS_OF_SERVICE.md" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
