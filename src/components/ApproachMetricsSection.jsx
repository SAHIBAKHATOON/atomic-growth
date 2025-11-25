import React from 'react';
// import './ApproachMetricsSection.css';

// Data for the three main metrics
const metrics = [
  { value: '9200+', label: 'Videos Created' },
  { value: '1.1B+', label: 'Views' },
  { value: '240+', label: 'Relationships Built' },
];

const ApproachMetricsSection = () => {
  return (
    <section className="approach-section">
      
      {/* Background Decorative Elements (from previous sections) */}
      <div className="decor-star-top-left star"></div>
      <div className="decor-triangle-left-center"></div>
      <div className="decor-star-right-center star"></div>

      <div className="approach-content-wrapper">
        
        {/* 1. Main Title */}
        <h2 className="approach-title">A Holistic Content Approach</h2>

        {/* 2. Value Proposition/Description */}
        <div className="approach-description-container">
          <p className="approach-description">
            Elevate thought leadership by turning 4 conversations a month into
            30+ pieces of content posted across all social channels with minimal
            time investment.
          </p>
          
          {/* Side Tag */}
          <span className="approach-tag">Tech companies</span>
        </div>

        {/* 3. Metrics Grid */}
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-item">
              <div className="metric-value">{metric.value}</div>
              <p className="metric-label">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* 4. Bottom CTA Button */}
        <button className="metrics-cta-btn">VIDEOS</button>
        
      </div>
    </section>
  );
};

export default ApproachMetricsSection;