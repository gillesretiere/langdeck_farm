import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleChart = ({data}) => {
    // Sample data
    const percentage = data*100;
    return (
      <div style={{ width: 50, height: 50 }}>
    <CircularProgressbar  value={percentage} 
                          text={`${percentage}%`}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            textSize: "1.6em",
                            textColor: "black",
                            pathColor: "#43BED9",
                          })}
                           />
      </div>
    );

}

export default CircleChart