import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import emulator from '../emulator';
import '../styles/CardPayment.css';

const CardPayment = () => {
  const { selectedDrink, setCurrentStep } = useContext(AppContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    emulator.BankCardPurchase(
      selectedDrink.price,
      (result) => {
        if (result) {
          setTimeout(() => setCurrentStep('preparation'), 2000);
        } else {
          setTimeout(() => setCurrentStep('paymentSelection'), 2000);
        }
      },
      setMessage
    );
  }, [selectedDrink.price, setCurrentStep]);

  return (
    <div className="card-payment">
      <h2>Оплата банковской картой</h2>
      <p>Стоимость напитка: {selectedDrink.price} руб.</p>
      <p>{message}</p>
    </div>
  );
};

export default CardPayment;
