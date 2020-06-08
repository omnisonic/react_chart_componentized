import React from 'react';
import DatePicker from './components/DatePicker/DatePicker.js';
import CurrencyPicker from './components/CurrencyPicker/CurrencyPicker.js';

function Header() {
    return (
        <header>    
        <h1>Exchange Rate Chart</h1>
        <div> 
            <CurrencyPicker />
            <DatePicker />
        </div>
        </header>      
    );
}
export default Header;