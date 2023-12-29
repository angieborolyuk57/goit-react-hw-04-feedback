import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import css from './App.module.css';

const App = () => {

const [feedback, setFeedback] = useState({
            good: 0,
            neutral: 0,
            bad: 0,
        
    })

    const handleClick = (type) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [type]: prevFeedback[type] + 1,
        }));
    };

    const countTotalFeedback = () => {
        const { good, neutral, bad } = feedback;
        return good + neutral + bad;
    };

    const countPercentage = (value) => {
        const totalFeedback = countTotalFeedback();

        if (totalFeedback === 0) {
            return 0;
        }

        return Math.floor((value / totalFeedback) * 100);
    };

    const countPositiveFeedbackPercentage = () => countPercentage(feedback.good);
    const countNeutralFeedbackPercentage = () => countPercentage(feedback.neutral);
    const countNegativeFeedbackPercentage = () => countPercentage(feedback.bad);

    const totalFeedback = countTotalFeedback();
  
        return (
            <div className={css.feedback}>
                <Section title="Please leave your feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={handleClick}
                    />
                </Section>

                <Section title="Statistics">
                    {totalFeedback > 0 ? (
                        <Statistics
                            good={feedback.good}
                            neutral={feedback.neutral}
                            bad={feedback.bad}
                            total={totalFeedback}
                            positivePercentage={countPositiveFeedbackPercentage()}
                            neutralPercentage={countNeutralFeedbackPercentage()}
                            negativePercentage={countNegativeFeedbackPercentage()}
                        />
                    ) : (
                        <p>No feedback given yet.</p>
                    )}
                </Section>
            </div>
        );
    }

export default App;
