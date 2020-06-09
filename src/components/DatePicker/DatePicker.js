import React from 'react';
import './DatePicker.css';

function DatePicker(props) {
    return (
        <div>
        <label>Choose Date </label>
        <select onChange={props.changeDate} value={props.date}>
            <option value="latest">Today</option>
            <option value="2019-01-12">2019-01-12</option>
            <option value="2018-01-12">2018-01-12</option>
            <option value="2017-01-12">2017-01-12</option>
            <option value="2016-01-12">2016-01-12</option>
            <option value="2015-01-12">2015-01-12</option>
            <option value="2014-01-12">2014-01-12</option>
        </select>   
        </div>   
    );
}
export default DatePicker;