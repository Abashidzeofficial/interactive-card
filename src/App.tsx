import React from 'react';
import { useState } from 'react';
import './components/styles.css';
import Front from './components/Front';
import Back from './components/Back';



function App() {
  const [showName, setShowName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [years, setYears] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [monthValue, setMonthValue] = useState<boolean>(true)
  const [showThanks, setShowThanks] = useState<boolean>(false);

  const [showNameError, setShowNameError] = useState<string>('');
  const [cardNumberError, setCardNumberError] = useState<string>('');
  const [monthError, setMonthError] = useState<string>('');
  const [yearsError, setYearsError] = useState<string>('');
  const [cvcError, setCvcError] = useState<string>('');



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
          showNameError={showNameError}
          setShowNameError={setShowNameError}
          cardNumberError={cardNumberError}
          setCardNumberError={setCardNumberError}
          monthError={monthError}
          yearsError={yearsError}
          cvcError={cvcError}
          setMonthError={setMonthError}
          setYearsError={setYearsError}
          setCvcError={setCvcError}

        />
      )}
    </div>
  );

}

export default App;
