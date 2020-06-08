import React from 'react';
import './CurrencyPicker.css';

function CurrencyPicker(props) {
    return (
        <div>
        <label>Choose Currency </label> 
        <select value={props.baseCurrency} onChange={props.changeBase} name="rate" id="rate">
        {
        Object.entries(props.apiData).map(([, value]) => (
        <option value={value[0]}>{value[0]}</option>
        ))
        }
        </select>   
        </div>
    );
}

export default CurrencyPicker;