import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import '../styles/PaymentSelection.css';

const PaymentSelection = () => {
  const { setPaymentMethod, setCurrentStep } = useContext(AppContext);

  const handlePaymentSelect = (method) => {
    setPaymentMethod(method);
    setCurrentStep(method === 'cash' ? 'cashPayment' : 'cardPayment');
  };

  return (
    <div className="payment-selection">
      <h2>Выберите способ оплаты</h2>
      <button className="payment-button" onClick={() => handlePaymentSelect('cash')}>Наличными</button>
      <button className="payment-button" onClick={() => handlePaymentSelect('card')}>Банковской картой</button>
    </div>
  );
};

export default PaymentSelection;
