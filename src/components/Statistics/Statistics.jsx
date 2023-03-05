import { Notification, FeedbackList, FeedbackItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    total===0 ? <Notification>There is no feedback</Notification> :
  <FeedbackList>
    <FeedbackItem >Good: {good}</FeedbackItem>
    <FeedbackItem >Neutral: {neutral}</FeedbackItem>
        <FeedbackItem >Bad: {bad}</FeedbackItem>
        <FeedbackItem >Total: {total}</FeedbackItem>
        <FeedbackItem >Positive feedback: {positivePercentage} %</FeedbackItem>
        
  </FeedbackList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}