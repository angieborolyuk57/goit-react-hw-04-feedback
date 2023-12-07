import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
    constructor(props) {
        super(props);

        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    }
    handleClick = (type) => {
        this.setState((prevState) => ({
            [type]: prevState[type] + 1,
        }));
    };

    countTotalFeedback = () => {
const {good, neutral, bad} = this.state;
return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const {good} = this.state;
        const totalFeedback = this.countTotalFeedback();

        if(totalFeedback === 0 ){
            return 0;
        }

        return Math.floor((good / totalFeedback) * 100);
    };

    countNegativeFeedbackPercentage = () => {
        const {bad} = this.state;
        const totalFeedback = this.countTotalFeedback();

        if(totalFeedback === 0 ){
            return 0;
        }

        return Math.floor((bad / totalFeedback) * 100);
    };
    
    countNeutralFeedbackPercentage = () => {
        const {neutral} = this.state;
        const totalFeedback = this.countTotalFeedback();

        if(totalFeedback === 0 ){
            return 0;
        }
        return Math.floor((neutral / totalFeedback) * 100);
    };
    
    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div className={css.feedback}>
                <h1>Please leave your feedback</h1>
                <div className={css.buttons}>
                <button className={css.button} onClick={() => this.handleClick('good')}>Good &#128516;</button>
                <button className={css.button}  onClick={() => this.handleClick('neutral')}>Neutral &#128528;</button>
                <button className={css.button}  onClick={() => this.handleClick('bad')}>Bad &#128532;</button>
                </div>
                <h1>Statistics</h1>
                <div className='stats'>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
                <p>Neutral feedback: {this.countNeutralFeedbackPercentage()} %</p>
                <p>Negative feedback: {this.countNegativeFeedbackPercentage()} %</p>
                </div>
            </div>
        );
    }
}

export default Feedback;
