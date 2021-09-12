import PropTypes from "prop-types";

export default function ControllerErrors(props) {
  const { isSubmitted, error, messages } = props;

  if (error && isSubmitted) {
    return <div className="form-control_error">{messages[error.type]}</div>;
  }

  return null;
}

ControllerErrors.propTypes = {
  isSubmitted: PropTypes.bool,
  error: PropTypes.object,
  messages: PropTypes.object,
};
