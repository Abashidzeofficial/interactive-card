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
  const [monthValue, setMonthValue] = useState<boolean>(true)
  const [showThanks, setShowThanks] = useState<boolean>(false);


  const [cardInfo, setCardInfo] = useState<any>({
    showName: '',
    cardNumber: '',
    month: '',
    years: '',
    cvc: '',
  });

  const handleFormatSubmitted = (data: any) => {
    setCardInfo(data);
  };


  return (
    <div className="container">
      {cardInfo.showName && cardInfo.cardNumber ? (
        <Back
          cardInfo={cardInfo}
          setCardInfo={setCardInfo}
        />
      ) : (
        <Front
          handleFormatSubmitted={handleFormatSubmitted}
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
          monthValue={monthValue}
          setMonthValue={setMonthValue}
          showThanks={showThanks}
          setShowThanks={setShowThanks}
        />
      )}
    </div>
  );

}

export default App;
