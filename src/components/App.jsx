import { useState } from 'react';
import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Container } from './App.styled';

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClick = e => {
    switch (e) {
      case 'Good':
        setGood(prev => prev + 1);
        break;
    
      case 'Neutral':
        setNeutral(prev => prev + 1);
        break;
      
      case 'Bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  }

    const countTotalFeedback = () => {
      let total = good + neutral + bad;

      return total;
    };


  
    const countPositiveFeedbackPercentage = () => {
      if (countTotalFeedback === 0) {
        return 0;
      }
      return Math.round((good / countTotalFeedback()) * 100);
    };

 
    return (
      <Container>
        <Section title="Please leave feedback" >
          <Feedback
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }

export default App;