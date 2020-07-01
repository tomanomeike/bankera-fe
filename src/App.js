import React, { useEffect, useState } from 'react';
import CurrencyRow from './components/CurrencyRow';

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
const App = () => {
  const [inDollars, setInDollars] = useState('');
  const [inEuro, setInEuro] = useState('');
  const [inPounds, setInPounds] = useState('');
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  
 console.log(inDollars);
//  console.log(typeof(amount))

  const fetchJson = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  let toAmountInDollars, toAmountInEuro, toAmountInPounds, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmountInDollars = amount *inDollars
    toAmountInEuro = amount *inEuro
    toAmountInPounds = amount *inPounds
  }
  useEffect(() => {
    fetchJson(URL)
    .then(
      ({ bpi }) => {
        setInDollars(bpi.USD.rate_float);
        setInEuro(bpi.EUR.rate_float);
        setInPounds(bpi.GBP.rate_float);
      }
    );
  }, []);

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
const deleteCurrency= ()=>{
  const el = document.getElementById('1' || '2' || '3');
 el.remove();
// var elem = document.getElementById("button_" + id);
// elem.parentNode.removeChild(elem);
}



  return (
    <div>
      <CurrencyRow  onChangeAmount={handleFromAmountChange}   amount={amount}/>
      <div>Price of {amount} Bitcoin</div>
  <div id="1">USD: {toAmountInDollars.toLocaleString(undefined, {maximumFractionDigits:2})}<button onClick={deleteCurrency}>x</button></div>
      <div id="2">EURO: {toAmountInEuro} <button onClick={deleteCurrency}>x</button></div>
      <div id="3">GBP: {toAmountInPounds.toLocaleString(undefined, {maximumFractionDigits:2})}<button onClick={deleteCurrency}>x</button></div>
    </div>
  );
};

export default App;
