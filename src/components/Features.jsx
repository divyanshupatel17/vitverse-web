import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    { icon: '👥', title: 'Friends Schedule', desc: 'View friends\' schedules and find common free slots' },
    { icon: '📅', title: 'Calendar', desc: 'University calendar with personal schedule integration' },
    { icon: '📊', title: 'Attendance Analytics', desc: 'Detailed attendance insights with graphs' },
    { icon: '🧮', title: 'Attendance Calculator', desc: 'Predict required attendance to meet criteria' },
    { icon: '🎓', title: 'Academic Performance', desc: 'Track grades, GPA, and semester summaries' },
    { icon: '📈', title: 'Attendance Matrix', desc: 'Per-course presence/absence matrix view' },
    { icon: '📝', title: 'Exam Schedule', desc: 'View upcoming exams and timetables' },
    { icon: '📚', title: 'Grade History', desc: 'Access all your past grades at a glance' },
    { icon: '📑', title: 'Marks History', desc: 'Assessment-wise marks and breakdowns' },
    { icon: '🧾', title: 'Fee Management', desc: 'Track fee payments, due dates, and receipts' },
    { icon: '🏷️', title: 'CGPA Calculator', desc: 'Estimate cumulative and semester GPA' },
    { icon: '👨‍🏫', title: 'Faculty Contacts', desc: 'Access contact details and office hours' },
    { icon: '🚗', title: 'Cab Share', desc: 'Find and coordinate ride-sharing' },
    { icon: '🔍', title: 'Lost & Found', desc: 'Report or search for lost items' },
    { icon: '🍽️', title: 'Mess Menu', desc: 'Check daily mess menu via Unmessify' },
    { icon: '🧺', title: 'Laundry Status', desc: 'Monitor live laundry availability' },
    { icon: '🔔', title: 'Notifications', desc: 'Stay updated with instant alerts' },
    { icon: '⭐', title: 'Faculty Rating', desc: 'Rate faculty and view peer ratings' }
  ]

  return (
    <section className="features section">
      <div className="features-container">
        <h2>Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
