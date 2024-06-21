import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Promo.css';

const Promo = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/drink-selection');
  };

  return (
    <div className="promo">
      <h1 className="promo-title">Добро пожаловать в Coffee Shop!</h1>
      <p className="promo-description">
        Наслаждайтесь лучшими напитками и уютной атмосферой. Мы предлагаем широкий ассортимент кофе и чая, а также вкусные десерты.
      </p>
      <div className="promo-image-container">
        <img src="/images/promo.jpg" alt="Coffee Shop" className="promo-image" />
      </div>
      <button className="promo-button" onClick={handleLearnMoreClick}>Узнать больше</button>
    </div>
  );
};

export default Promo;
