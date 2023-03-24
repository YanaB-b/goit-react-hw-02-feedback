import React, { Component } from 'react';
import Title from './Title/Title';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[`${feedback}`] + 1 };
    });
  };
  countTotalFeedback() {
    const total = Object.values(this.state).reduce((el, acc) => (acc += el), 0);
    return total;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positivePercentage = (this.state.good * 100) / total;
    return Math.round(positivePercentage);
  }
  render() {
    return (
      <div>
        <Title title="Plase leave feedback">
          <FeedbackOptions
            options={{ good: 'good', neutral: 'neutral', bad: 'bad' }}
            onLeaveFeedback={this.countFeedback}
          />
        </Title>
        <Title title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Title>
      </div>
    );
  }
}
