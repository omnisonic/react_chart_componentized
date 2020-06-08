import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import BarChart from './components/BarChart/BarChart.js';
import DatePicker from './components/BarChart/DatePicker.js';
import CurrencyPicker from './components/CurrencyPicker/CurrencyPicker.js';



const App = () => {
  const [apiData, setApiData] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [date, setDate] = useState('latest');

  console.log('apidata set', apiData);

  function changeBase(event) {
    console.log('getting change back', event.target.value)
    setBaseCurrency(event.target.value)
  }

  function changeDate(event) {
    console.log('changing date', event.target.value)
    setDate(event.target.value)
  }

  function doFetch() {
    fetch(`https://api.exchangeratesapi.io/${date}?base=${baseCurrency}`)
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);
        setApiData(Object.entries(data.rates).filter(innerArray => innerArray[1] <= 2));
      });
  }
  useEffect(doFetch, [baseCurrency, date]);

  return (
   <div className="container">
  
    <Header />
    <BarChart />
    <Footer />

  </div>
  );
}

export default App;
