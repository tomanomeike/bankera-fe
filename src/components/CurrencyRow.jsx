import React from 'react';

const CurrencyRow = (props) => {
  const {
    onChangeAmount,
    amount,
  } = props;

  return (
    <React.Fragment>
      <input className="input" type="number" min="0.01" step="0.01" value={amount} onChange={onChangeAmount} />
    </React.Fragment>
  );
};

export default CurrencyRow;
