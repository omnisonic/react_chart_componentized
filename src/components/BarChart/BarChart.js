import React from 'react';
import './BarChart.css';

function BarChart(props) {
    return (
        <div className="chart">
            <div className="chart-container">   
                {
                    Object.entries(props.apiData).map(([, value]) => (
                        <div
                            className="chart-bar" 
                            style={{height: (value[1] * 50) + "%"}}> 
                            {value[0]}
                            <div>{value[1].toFixed(2)}</div>
                        </div>
                    ))
                }
            </div>
      </div>
   
    );
}
export default BarChart;