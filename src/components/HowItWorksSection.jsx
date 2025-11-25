import React, { useEffect, useState, useRef } from 'react';
// import './HowItWorksSection.css';

// Data for the three cards
const workSteps = [
  {
    number: 1,
    colorClass: 'card-yellow',
    text: '1 hour of recording a week turns into...',
    rotate: '-5deg' // Tilt for visual effect
  },
  {
    number: 2,
    colorClass: 'card-blue',
    text: 'A podcast featured on top streaming platforms.',
    rotate: '0deg' // Center card is usually straight
  },
  {
    number: 3,
    colorClass: 'card-red',
    text: 'Repurposed into: 4 YouTube videos, 18 shorts for LinkedIn & Instagram plus 2 SEO-enhanced articles.',
    rotate: '5deg' // Opposite tilt
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // --- Scroll Intersection Observer Logic for Animation ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is visible (intersects the viewport)
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once visible to run animation only once
          observer.unobserve(sectionRef.current);
        }
      },
      {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  // --------------------------------------------------------

  return (
    <section className="how-it-works-section" ref={sectionRef}>
      <h2 className="how-it-works-title">How It Works</h2>
      
      <div className={`work-cards-container ${isVisible ? 'animate-in' : ''}`}>
        {workSteps.map((step, index) => (
          <div 
            key={step.number} 
            className={`work-card ${step.colorClass}`}
            style={{ 
              transform: `rotate(${step.rotate})`,
              // Add delay for sequential animation
              transitionDelay: `${index * 0.15}s` 
            }}
          >
            <span className="card-number">{step.number}</span>
            <p className="card-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;