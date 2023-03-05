import { ContainerBtn, Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) =>
    <ContainerBtn>
        {options.map((option, index) => (
            <Button
                key={index}
                onClick={() => onLeaveFeedback(option)}>
      {option}
        </Button>
     ))}
    </ContainerBtn>
  
Feedback.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
  }

