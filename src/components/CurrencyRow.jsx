import React from 'react';

const CurrencyRow = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  console.log(currencyOptions);

  return (
    <React.Fragment>
      <input type="number" value={amount} onChange={onChangeAmount} />
    </React.Fragment>
  );
};

export default CurrencyRow;
