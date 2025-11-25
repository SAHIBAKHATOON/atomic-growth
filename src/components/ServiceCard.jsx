import React from 'react';
// import './ServicesSection.css'; // Main CSS file

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button">EXPLORE</button>
      {/* Note: The outline effect is done entirely via CSS on the .service-card */}
    </div>
  );
};

export default ServiceCard;