import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import '../styles/DrinkSelection.css';

const drinks = [
  { id: 1, name: 'Эспрессо', price: 100, description: 'Крепкий кофе небольшого объема', image: '/images/espresso.jpg' },
  { id: 2, name: 'Капучино', price: 150, description: 'Эспрессо с молочной пенкой', image: '/images/cappuccino.jpg' },
  { id: 3, name: 'Латте', price: 180, description: 'Эспрессо с большим количеством молока', image: '/images/latte.jpg' },
];

const DrinkSelection = () => {
  const { setSelectedDrink, setCurrentStep } = useContext(AppContext);

  const handleDrinkSelect = (drink) => {
    setSelectedDrink(drink);
    setCurrentStep('paymentSelection');
  };

  return (
    <div className="drink-selection">
      <h2 className="section-title">Выберите напиток</h2>
      <div className="drink-grid">
        {drinks.map((drink) => (
          <div key={drink.id} className="drink-card">
            <img src={drink.image} alt={drink.name} className="drink-image" />
            <h3 className="drink-name">{drink.name}</h3>
            <p className="drink-description">{drink.description}</p>
            <p className="drink-price">{drink.price} руб.</p>
            <button className="select-button" onClick={() => handleDrinkSelect(drink)}>Выбрать</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkSelection;
