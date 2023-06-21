import React, { useState } from "react";
import LineChartTest from './LinechartTest.jsx'
import { UserData } from './Data.js'


const ChartItem = () => {
  
  return (
    <div className="chart-itemt">
      <h1>71,2221</h1>
      <p>Online Signups</p>
      <div className="chart">
        <div>
          <LineChartTest ></LineChartTest>
        </div>
      </div>
    </div>
  );
};

export default ChartItem;
