import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';
import emulator from '../emulator';
import '../styles/CashPayment.css';

const CashPayment = () => {
  const { selectedDrink, setCurrentStep } = useContext(AppContext);
  const [insertedAmount, setInsertedAmount] = useState(0);

  useEffect(() => {
    emulator.StartCashin((amount) => {
      setInsertedAmount((prev) => prev + amount);
    });

    return () => emulator.StopCashin();
  }, []);

  useEffect(() => {
    if (insertedAmount >= selectedDrink.price) {
      emulator.StopCashin();
      setCurrentStep('preparation');
    }
  }, [insertedAmount, selectedDrink.price, setCurrentStep]);

  return (
    <div className="cash-payment">
      <h2>Внесите оплату</h2>
      <p>Стоимость напитка: {selectedDrink.price} руб.</p>
      <p>Внесено: {insertedAmount} руб.</p>
      <p>Осталось внести: {Math.max(0, selectedDrink.price - insertedAmount)} руб.</p>
      <p>Для эмуляции внесения денег нажмите: 1 (100 руб.), 2 (500 руб.), 3 (1000 руб.)</p>
    </div>
  );
};

export default CashPayment;
