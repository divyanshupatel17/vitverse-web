import React, { useState, useEffect } from 'react';
import './Legal.css';

const Legal = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState('');
  const [termsOfService, setTermsOfService] = useState('');
  const [activeTab, setActiveTab] = useState('privacy');

  useEffect(() => {
    // Fetch Privacy Policy
    fetch('https://raw.githubusercontent.com/divyanshupatel17/vit-connect/main/docs/PRIVACY_POLICY.md')
      .then(response => response.text())
      .then(data => setPrivacyPolicy(data))
      .catch(error => console.error('Error fetching Privacy Policy:', error));

    // Fetch Terms of Service
    fetch('https://raw.githubusercontent.com/divyanshupatel17/vit-connect/main/docs/TERMS_OF_SERVICE.md')
      .then(response => response.text())
      .then(data => setTermsOfService(data))
      .catch(error => console.error('Error fetching Terms of Service:', error));
  }, []);

  // Simple markdown to HTML converter for headers and lists
  const convertMarkdownToHTML = (markdown) => {
    if (!markdown) return '';
    
    return markdown
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/^\* (.*$)/gim, '<li>$1</li>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
      .replace(/<li>(.*?)<br>/g, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
      .replace(/^(.*)$/gm, '<p>$1</p>');
  };

  return (
    <section className="legal" id="legal">
      <div className="legal-container">
        <h2>Legal</h2>
        
        <div className="legal-tabs">
          <button 
            className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy Policy
          </button>
          <button 
            className={`tab-button ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            Terms of Service
          </button>
        </div>
        
        <div className="legal-content">
          {activeTab === 'privacy' ? (
            <div 
              className="legal-text"
              dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(privacyPolicy) }}
            />
          ) : (
            <div 
              className="legal-text"
              dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(termsOfService) }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Legal;