import React, { useState, useEffect } from 'react'
import './Downloads.css'

const Downloads = () => {
  const [expandedVersion, setExpandedVersion] = useState(0)
  const [versions, setVersions] = useState([])

  useEffect(() => {
    fetch('/versions.json')
      .then(response => response.json())
      .then(data => {
        const formattedVersions = data.versions.map((version, index) => ({
          version: `v${version.version}`,
          date: new Date(version.releaseDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          isCurrent: version.isLatest,
          notes: version.releaseNotes,
          downloads: version.apks.map(apk => ({
            arch: apk.architecture,
            size: apk.size.replace('≈', ''),
            desc: apk.description,
            link: apk.downloadUrl,
            recommended: apk.recommended
          }))
        }));
        setVersions(formattedVersions);
      })
      .catch(error => console.error('Error fetching versions:', error));
  }, []);

  const toggleVersion = (idx) => {
    setExpandedVersion(expandedVersion === idx ? -1 : idx)
  }

  return (
    <section className="downloads" id="download">
      <div className="downloads-container">
        <h2>Download VITVerse for Android</h2>
        
        <div className="versions-list">
          <div className="version-group">
            <h3 className="version-group-title">Current Version</h3>
            {versions.filter(v => v.isCurrent).map((version, idx) => (
              <div key={idx} className={`version-item ${expandedVersion === idx ? 'expanded' : ''}`}>
                <div className="version-header" onClick={() => toggleVersion(idx)}>
                  <div className="version-info">
                    <span className="version-number">{version.version}</span>
                    <span className="version-date">{version.date}</span>
                  </div>
                  <button className="expand-icon" aria-label="Expand">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d={expandedVersion === idx ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"} />
                    </svg>
                  </button>
                </div>
                
                {expandedVersion === idx && (
                  <div className="version-content">
                    <div className="release-notes">
                      <h4>Release Notes</h4>
                      <ul>
                        {version.notes.map((note, i) => (
                          <li key={i}>{note}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="download-options">
                      {version.downloads.map((dl, i) => (
                        <div key={i} className="download-card">
                          <div className="download-info">
                            <h5>{dl.arch} {dl.recommended && <span className="recommended-badge">Recommended</span>}</h5>
                            <p className="download-size">{dl.size}</p>
                            <p className="download-desc">{dl.desc}</p>
                          </div>
                          <a href={dl.link} className="btn-download">Download</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="version-group">
            <h3 className="version-group-title">Previous Versions</h3>
            {versions.filter(v => !v.isCurrent).map((version, idx) => {
              const actualIdx = idx + 1
              return (
                <div key={actualIdx} className={`version-item ${expandedVersion === actualIdx ? 'expanded' : ''}`}>
                  <div className="version-header" onClick={() => toggleVersion(actualIdx)}>
                    <div className="version-info">
                      <span className="version-number">{version.version}</span>
                      <span className="version-date">{version.date}</span>
                    </div>
                    <button className="expand-icon" aria-label="Expand">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d={expandedVersion === actualIdx ? "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" : "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"} />
                      </svg>
                    </button>
                  </div>
                  
                  {expandedVersion === actualIdx && (
                    <div className="version-content">
                      <div className="release-notes">
                        <h4>Release Notes</h4>
                        <ul>
                          {version.notes.map((note, i) => (
                            <li key={i}>{note}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="download-options">
                        {version.downloads.map((dl, i) => (
                          <div key={i} className="download-card">
                            <div className="download-info">
                              <h5>{dl.arch} {dl.recommended && <span className="recommended-badge">Recommended</span>}</h5>
                              <p className="download-size">{dl.size}</p>
                              <p className="download-desc">{dl.desc}</p>
                            </div>
                            <a href={dl.link} className="btn-download">Download</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="download-note">
          <p>Try ARM64-v8a first (works on 95% of modern phones). If it doesn't install, use Universal APK.</p>
        </div>
      </div>
    </section>
  )
}

export default Downloads
