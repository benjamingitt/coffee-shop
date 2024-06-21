import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedDrink, setSelectedDrink] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [currentStep, setCurrentStep] = useState('drinkSelection');
    

    

  return (
    <AppContext.Provider value={{
      selectedDrink,
      setSelectedDrink,
      paymentMethod,
      setPaymentMethod,
      currentStep,
      setCurrentStep
    }}>
      {children}
    </AppContext.Provider>
  );
};
