import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About this app</h2>
        <div className="about-content">
          <p>
            VITVerse is your comprehensive mobile companion for managing your entire VTOP experience at VIT Chennai. 
            Developed by a VIT Chennai student, this app simplifies access to VTOP services without storing your credentials.
          </p>
          <h3>Key Features</h3>
          <ul>
            <li><strong>Smart Home Dashboard:</strong> Customizable widgets showing attendance, venue, slots, and buffer status</li>
            <li><strong>Interactive Timetable:</strong> Day-wise view with swipe gestures, attendance tracking, and faculty ratings</li>
            <li><strong>Performance Tracking:</strong> Monitor your marks, GPA, and semester performance</li>
            <li><strong>Integrated Calendar:</strong> University calendar with LMS integration and personal events</li>
            <li><strong>VTOP Services:</strong> Attendance analytics, calculators, grade history, and more</li>
            <li><strong>Campus Utilities:</strong> Cab sharing, event hub, lost & found, mess menu, and laundry schedule</li>
            <li><strong>13 Stunning Themes:</strong> Customize your experience with light, dark, and AMOLED themes</li>
          </ul>
          <div className="about-meta">
            <div className="meta-row">
              <span className="meta-label">Updated on</span>
              <span className="meta-value">Dec 2, 2024</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Category</span>
              <span className="meta-value">Education</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
