import React from 'react'
import './Contact.css'

const Contact = () => {
  const contacts = [
    { icon: '/icons/whatsapp.png', title: 'WhatsApp', link: 'https://wa.me/919301503581' },
    { icon: '/icons/github.png', title: 'GitHub', link: 'https://github.com/divyanshupatel17' },
    { icon: '/icons/bug.png', title: 'Bug Report', link: 'https://github.com/divyanshupatel17/vit-connect/issues' },
    { icon: '/icons/feature.png', title: 'Feature Request', link: 'https://github.com/divyanshupatel17/vit-connect/issues' }
  ]

  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        {/* <div className="contact-grid">
          {contacts.map((contact, idx) => (
            <a key={idx} href={contact.link} className="contact-card">
              <img src={contact.icon} alt={contact.title} className="contact-icon" />
              <span className="contact-title">{contact.title}</span>
            </a>
          ))}
        </div>
         */}
        <div className="collaboration">
          <h3>Credits & Collaborations</h3>
          <p>In collaboration with <strong>Unmessify</strong> - an app that aims to make the hostel mess… less of a mess.</p>
          <p>Developed by Kanishka Chakraborty & Teesha Saxena</p>
          <div className="collaboration-links">
            <a href="https://kaffeine.tech/unmessify/?i=1" target="_blank" rel="noopener noreferrer">Website</a>
            <a href="https://github.com/Kanishka-Developer/unmessify" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="developer-note">
          <p>Built by Divyanshu — still learning Flutter. Not fully optimized, might have bugs. Feel free to report or fix them!</p>
          <div className="developer-links">
            <a href="mailto:itzdivyanshupatel@gmail.com" className="dev-link">Gmail</a>
            <a href="https://wa.me/919301503581" className="dev-link">WhatsApp</a>
            <a href="https://github.com/divyanshupatel17" className="dev-link">GitHub</a>
            <a href="https://www.linkedin.com/in/patel-divyanshu/" className="dev-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
