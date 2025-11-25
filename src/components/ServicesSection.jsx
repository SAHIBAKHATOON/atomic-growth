import React from 'react';
import ServiceCard from './ServiceCard';
// import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-container">
      {/* Decorative background elements */}
      <div className="decor-star"></div>
      <div className="decor-triangle"></div>
      
      <div className="cards-grid">
        <ServiceCard
          title="AI Studio"
          description="The future of marketing. Create cinema level AI videos for product launches, memes, explainer videos, and more."
        />
        <ServiceCard
          title="Clipping"
          description="The fastest way to dominate social media feeds. Guaranteed millions of views with IRL shoots at a flat rate, built for hot tech companies"
        />
      </div>
    </section>
  );
};

export default ServicesSection;