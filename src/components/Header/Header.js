import React from 'react';
import DatePicker from '../DatePicker/DatePicker.js';
import CurrencyPicker from '../CurrencyPicker/CurrencyPicker.js';
import './Header.css';


function Header(props) {
    return (
        <header>    
        <h1>Exchange Rate Chart</h1>
        <div> 
            <CurrencyPicker changeBase={props.changeBase} apiData={props.apiData} baseCurrency={props.baseCurrency} />
            <DatePicker changeDate={props.changeDate} date={props.date} />
        </div>
        </header>      
    );
}
export default Header;
