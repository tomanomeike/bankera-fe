import React, { useEffect, useState } from 'react';
import CurrencyRow from './components/CurrencyRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css'
import Button from 'react-bootstrap/Button';

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const App = () => {
  let toAmountInDollars, toAmountInEuro, toAmountInPounds;
  const [inDollars, setInDollars] = useState('');
  const [inEuro, setInEuro] = useState('');
  const [inPounds, setInPounds] = useState('');
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  
  if (amountInFromCurrency) {
    toAmountInDollars = amount * inDollars;
    toAmountInEuro = amount * inEuro;
    toAmountInPounds = amount * inPounds;
  }
  useEffect(() => {
    fetchJson(URL).then(({ bpi }) => {
      setInDollars(bpi.USD.rate_float);
      setInEuro(bpi.EUR.rate_float);
      setInPounds(bpi.GBP.rate_float);
    });
  }, []);

  const handleFromAmountChange =(e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  const deleteCurrency1 = () => {
    const el = document.getElementById('1');
    el.remove();
  };
  const deleteCurrency2 = () => {
    const el = document.getElementById('2');
    el.remove();
  };

  const deleteCurrency3 = () => {
    const el = document.getElementById('3');
    el.remove();
  };

  return (
    <div>
      <CurrencyRow onChangeAmount={handleFromAmountChange} amount={amount} />
      <h3>Price of {amount} Bitcoin</h3>
      <div id='1'>
        USD:{' '}
        {toAmountInDollars.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
        <Button variant="danger" onClick={deleteCurrency1}>x</Button>
      </div>
      <div id='2'>
        EURO: {toAmountInEuro} <Button variant="danger" onClick={deleteCurrency2}>x</Button>
      </div>
      <div id='3'>
        GBP:{' '}
        {toAmountInPounds.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
        <Button variant="danger" onClick={deleteCurrency3}>x</Button>
      </div>
    </div>
  );
};

export default App;
