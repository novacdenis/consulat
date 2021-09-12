import PropTypes from "prop-types";

export default function Input(props) {
  const {
    field: { onChange, onBlur, value, name },
  } = props;

  return <input onChange={onChange} onBlur={onBlur} value={value} name={name} />;
}

Input.propTypes = {
  field: PropTypes.shape({
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
  }),
};
