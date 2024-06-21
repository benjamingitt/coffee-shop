import React, { useContext, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { AppContext } from '../contexts/AppContext';
import emulator from '../emulator';
import '../styles/Preparation.css';

const Preparation = () => {
  const { selectedDrink, setCurrentStep } = useContext(AppContext);
  const [status, setStatus] = useState('Приготовление напитка...');
  const [progress, setProgress] = useState(0);

  const progressAnimation = useSpring({
    width: `${progress}%`,
    from: { width: '0%' },
    config: { duration: 3000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 30);

    emulator.Vend(selectedDrink.id, (result) => {
      if (result) {
        setStatus('Ваш напиток готов! Приятного аппетита!');
        setTimeout(() => setCurrentStep('drinkSelection'), 3000);
      } else {
        setStatus('Произошла ошибка. Пожалуйста, обратитесь к персоналу.');
        setTimeout(() => setCurrentStep('drinkSelection'), 3000);
      }
    });

    return () => clearInterval(interval);
  }, [selectedDrink.id, setCurrentStep]);

  return (
    <div className="preparation">
      <h2>Приготовление напитка</h2>
      <div className="progress-bar">
        <animated.div className="progress-bar-fill" style={progressAnimation} />
      </div>
      <p className="status-message">{status}</p>
    </div>
  );
};

export default Preparation;
