import PropTypes from 'prop-types';
import { CustomButton } from './Feedback.styled';

export const Feedback = ({ options, onAddFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {Object.keys(options).map(option => (
        <CustomButton
          key={option}
          type="button"
          name={option}
          onClick={() => onAddFeedback(option)}
        >
          {option}
        </CustomButton>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
