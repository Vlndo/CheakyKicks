import React from 'react';
import '../css/style.css';

const Card = ({ image, title, description, buttonText, buttonImage }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
        <button className="card-button">
          <img src={buttonImage} alt="Button Icon" className="button-image" />
        </button>
      </div>
    </div>
  );
};

export default Card;