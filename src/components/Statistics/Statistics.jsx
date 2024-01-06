// Statistics.js
import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage, neutralPercentage,negativePercentage  }) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage} %</p>
            <p>Neutral feedback: {neutralPercentage} %</p>
            <p>Negative feedback: {negativePercentage} %</p>
        </div>
    );
};

export default Statistics;
