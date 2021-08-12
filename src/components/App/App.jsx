import {  useReducer} from 'react'
import { Container } from '../Container/Container';
import { Feedback } from '../Feedback/Feedback';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

function countReducer(prevState, nextState) {
  return prevState + nextState;
 }

export default function App() { 
  const [good, setGood] = useReducer(countReducer, 0);
  const [neutral, setNeutral] = useReducer(countReducer, 0);
  const [bad, setBad] = useReducer(countReducer, 0);

  const addFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood(1)
        break

      case 'neutral':
        setNeutral(1)
        break

      case 'bad':
        setBad(1)
        break

      default:
        return
    }
  }

  const countTotalFeedback = () => { 
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => { 
    return  Math.round((good / countTotalFeedback()) * 100)

  }

    return (
      <Container>
        <Feedback
          options={{ good, neutral, bad}}
          onAddFeedback={addFeedback}
        />
        {countTotalFeedback() ? (
          <div>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </div>
        ) : (
            <Notification message="No feedback given" />
          )}
      </Container>
    );
}

