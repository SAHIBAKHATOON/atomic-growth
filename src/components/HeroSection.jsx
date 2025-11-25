import React from 'react';
  // Link to the Vanilla CSS file

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background Decorative Elements (Abstract Shapes/Stars) 
        These will be positioned absolutely via CSS
      */}
      <div className="hero-decor decor-top-left"></div>
      <div className="hero-decor decor-top-right star"></div>
      <div className="hero-decor decor-bottom-right"></div>
      <div className="hero-decor decor-center-star star"></div>
      <div className="hero-decor decor-bottom-left-arrow"></div>

      <div className="hero-content">
        <div className="hero-heading-wrapper">
          {/* Tag: General Partners */}
          <span className="hero-tag tag-top-right">General Partners</span>
          {/* Tag: Tech Founders */}
          <span className="hero-tag tag-bottom-left">Tech Founders</span>
          
          {/* Main Title Blocks with Colored Backgrounds */}
          <h1 className="hero-title">
            <span className="title-block block-top">Podcasting For VCs</span>
            <span className="title-block block-bottom">& Tech Companies</span>
          </h1>
        </div>

        {/* Sub-text and CTA Area */}
        <p className="hero-description">
          We help venture capital funds and tech companies scale content
          strategies to attract quality deal flow and deepen relationships,
          either by starting a new podcast or optimizing an existing one.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;