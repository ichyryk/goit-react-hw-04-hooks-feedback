import { Component } from 'react';
import { Container } from '../Container/Container';
import { Feedback } from '../Feedback/Feedback';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';


export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  addFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    console.log('Hello');
  };

  countTotalFeedback = () =>
    this.state.Good + this.state.Neutral + this.state.Bad;

  countPositiveFeedbackPercentage = () =>
    this.state.Good
      ? Math.round((this.state.Good / this.countTotalFeedback()) * 100)
      : 0;

  render() {
    const { Good, Neutral, Bad } = this.state;
    return (
      <Container>
        <Feedback
          options={Object.keys(this.state)}
          onAddFeedback={this.addFeedback}
        />
        {this.countTotalFeedback() ? (
          <div>
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </div>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}
