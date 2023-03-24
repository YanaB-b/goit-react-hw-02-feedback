import PropTypes from 'prop-types';

const FeedbackOptions = ({
  onLeaveFeedback,
  options: { good, neutral, bad },
}) => {
  {
    return (
      <>
        <button type="button" onClick={() => onLeaveFeedback(good)}>
          Good
        </button>
        <button type="button" onClick={() => onLeaveFeedback(neutral)}>
          Neutral
        </button>
        <button type="button" onClick={() => onLeaveFeedback(bad)}>
          Bad
        </button>
      </>
    );
  }
};
FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;
