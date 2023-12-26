import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import css from './App.module.css';

class App extends Component {
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
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const totalFeedback = this.countTotalFeedback();

        if (totalFeedback === 0) {
            return 0;
        }

        return Math.floor((good / totalFeedback) * 100);
    };
    countNeutralFeedbackPercentage = () => {
      const { neutral } = this.state;
      const totalFeedback = this.countTotalFeedback();
  
      if (totalFeedback === 0) {
          return 0;
      }
      return Math.floor((neutral / totalFeedback) * 100);
  };
  
  countNegativeFeedbackPercentage = () => {
    const { bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback === 0) {
        return 0;
    }

    return Math.floor((bad / totalFeedback) * 100);
};


    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();

        return (
            <div className={css.feedback}>
                <Section title="Please leave your feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleClick}
                    />
                </Section>

                <Section title="Statistics">
                    {totalFeedback > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedback}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                            neutralPercentage={this.countNeutralFeedbackPercentage()}
                            negativePercentage={this.countNegativeFeedbackPercentage()}
                        />
                    ) : (
                        <p>No feedback given yet.</p>
                    )}
                </Section>
            </div>
        );
    }
}

export default App;
