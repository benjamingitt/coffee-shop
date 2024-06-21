import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider, AppContext } from './contexts/AppContext';
import DrinkSelection from './components/DrinkSelection';
import PaymentSelection from './components/PaymentSelection';
import CashPayment from './components/CashPayment';
import CardPayment from './components/CardPayment';
import Preparation from './components/Preparation';
import Promo from './components/Promo';
import './styles/App.css';

const AppContent = () => {
  const { currentStep } = useContext(AppContext);

  switch (currentStep) {
    case 'drinkSelection':
      return <DrinkSelection />;
    case 'paymentSelection':
      return <PaymentSelection />;
    case 'cashPayment':
      return <CashPayment />;
    case 'cardPayment':
      return <CardPayment />;
    case 'preparation':
      return <Preparation />;
    default:
      return <Promo />;
  }
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Promo />} />
            <Route path="*" element={<AppContent />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
