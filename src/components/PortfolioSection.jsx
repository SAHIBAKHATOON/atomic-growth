import React from 'react';
// import './PortfolioSection.css';

// Sample data structure to represent the clients shown in the image
const clientsData = [
  {
    name: 'Reid Hoffman',
    title: 'Co-Founder LinkedIn',
    imageUrl: 'https://atomikgrowth.com/wp-content/uploads/2025/03/Reid_1.png', // Replace with actual image path
  },
  {
    name: 'Primary',
    title: 'Top Venture Capital',
    imageUrl: 'https://atomikgrowth.com/wp-content/uploads/2025/03/Primary-VC.png',
  },
  {
    name: 'Darknet Diaries',
    title: 'Top 5 Tech Podcast',
    imageUrl: 'https://atomikgrowth.com/wp-content/uploads/2025/03/Darknet-Diaries-3.png',
  },
  {
    name: 'CLIMB by VSC',
    title: 'Climate Tech Podcast',
    imageUrl: 'https://atomikgrowth.com/wp-content/uploads/2025/03/VSC.png',
  },
  {
    name: 'Grit by Kleiner Perkins',
    title: 'Top Venture Fund',
    imageUrl: 'https://atomikgrowth.com/wp-content/uploads/2025/05/windsurf-logo-website.png',
  },
  {
    name: 'Acquired',
    title: 'Climate Tech Podcast',
    imageUrl: 'https://atomikgrowth.com/wp-content/uploads/2025/03/Acquired.png',
  },
  // Add more clients as needed for the horizontal scroll
];

const ClientCard = ({ client }) => {
  return (
    <div className="client-card">
      <div className="client-image-wrapper">
        <img src={client.imageUrl} alt={client.name} className="client-image" />
      </div>
      <h4 className="client-name">{client.name}</h4>
      <p className="client-title">{client.title}</p>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      
      {/* ------------------------------------------------------------------- */}
      {/* 1. Main Title Header                                                  */}
      {/* ------------------------------------------------------------------- */}
      <div className="portfolio-header">
        <h2 className="section-title">
          <span className="title-word-portfolio">Portfolio</span>
          <span className="title-word-clients">Clients</span>
        </h2>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 2. Client Cards (Horizontal Scroll)                                   */}
      {/* ------------------------------------------------------------------- */}
      <div className="clients-list-wrapper">
        <div className="clients-list">
          {clientsData.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default PortfolioSection;