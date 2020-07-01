import React, { useState, useEffect } from 'react';

const fetchJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const Fetch = (props) => {
  const [data, setData] = useState(null);
  const [convertedValue, setConvertedValue] = useState(0);

  useEffect(() => {
    fetchJson(
      'https://api.coindesk.com/v1/bpi/currentprice.json'
    ).then(({ bpi }) => setData(bpi.USD.description));
  }, []);

  return (
    <React.Fragment>
      <div>{data}</div>
      <div>{convertedValue}</div>
    </React.Fragment>
  );
};

export default Fetch;
