import PropTypes from 'prop-types';
import { CustomButton } from './Feedback.styled';

export const Feedback = ({ options, onAddFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      {options.map(option => (
        <CustomButton
          key={option}
          type="button"
          onClick={() => onAddFeedback(option)}
        >
          {option}
        </CustomButton>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func,
};
