import React from 'react';
// import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content-wrapper">
        
        {/* 1. Header and Navigation Arrows */}
        <div className="testimonial-header">
          <div className="testimonial-meta-tag">
            BEN GILBERT - ACQUIRED CO-HOST
          </div>
          
          {/* Navigation Arrows (Likely for a carousel) */}
          <div className="carousel-nav">
            <button className="nav-arrow left-arrow" aria-label="Previous Testimonial">
              &larr;
            </button>
            <button className="nav-arrow right-arrow" aria-label="Next Testimonial">
              &rarr;
            </button>
          </div>
        </div>

        {/* 2. Main Quote */}
        <h2 className="testimonial-quote">
          "Awesome! You guys crushed it!"
        </h2>

        {/* 3. Case Study/Context Tag */}
        <div className="case-study-tag-wrapper">
          <span className="case-study-tag">
            ACQUIRED GAINED 52M VIEWS ON AUTOPILOT - CASE STUDY
          </span>
        </div>

        {/* 4. Video Embed Area (Simulated YouTube Player) */}
        <div className="video-player-container">
          {/* In a real application, you would use an iframe for the YouTube embed. 
              We use a div here for structural and visual replication. */}
          <div className="simulated-video-player">
            {/* Placeholder content to mimic the video player interface */}
            <div className="video-overlay">
              <span className="play-icon">▶</span>
            </div>
            <p className="video-label">Acquired Testimonial - Ben Gilbert</p>
            <p className="video-cta">Watch on YouTube</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialSection;