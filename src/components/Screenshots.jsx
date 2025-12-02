import React from 'react'
import './Screenshots.css'

const Screenshots = () => {
  // List of all screenshot files in public/features directory
  const screenshotFiles = [
    'academicPerformance.jpg',
    'attendanceCalculator3.jpg',
    'attendanceMatrix.jpg',
    'attendanceMatrix2.jpg',
    'attendenceCalculator.jpg',
    'attendenceCalculator2.jpg',
    'calender.jpg',
    'calenderTimeline.jpg',
    'cgpaGpaTools.jpg',
    'cgpaGpaTools2.jpg',
    'colourCustomizations.jpg',
    'customTheme.jpg',
    'dayWiseAttendence.jpg',
    'exam.jpg',
    'features1.jpg',
    'features2.jpg',
    'features3.jpg',
    'fonts.jpg',
    'friendsSchedule.jpg',
    'friendsSchedule2.jpg',
    'laundry.jpg',
    'marksHistory.jpg',
    'messMenu.jpg',
    'profilePage.jpg',
    'themesDark.jpg',
    'themesLight.jpg',
    'widgetCustomizations.jpg'
  ];

  const screenshots = screenshotFiles.map((file, index) => ({
    id: index + 1,
    src: `/features/${file}`,
    alt: `VITVerse ${file.replace('.jpg', '').replace(/([A-Z])/g, ' $1').trim()}`
  }));

  return (
    <section className="screenshots section">
      <div className="screenshots-container">
        <div className="screenshots-scroll">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="screenshot-item">
              <img 
                src={screenshot.src} 
                alt={screenshot.alt}
                className="screenshot-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Screenshots
