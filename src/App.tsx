import React from 'react';
import { useState } from 'react';
import './components/styles.css';
import Front from './components/Front';
import Back from './components/Back';


function App() {
  const [showName, setShowName] = useState<any>('');
  const [cardNumber, setCardNumber] = useState<any>('');
  const [month, setMonth] = useState<any>('');
  const [years, setYears] = useState<any>('');
  const [cvc, setCvc] = useState<any>('');

  return (
    <div className="container">
      <Front
        showName={showName}
        setShowName={setShowName}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        month={month}
        setMonth={setMonth}
        years={years}
        setYears={setYears}
        cvc={cvc}
        setCvc={setCvc}
      />
      {/* <Back /> */}
    </div>
  );
}

export default App;
