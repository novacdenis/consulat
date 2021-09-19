import PropTypes from "prop-types";
import InputGroup from "./inputGroup.component";
import _cs from "@/utils/condStrings";

export default function Input(props) {
  const {
    field: { onChange, onBlur, value, name },
    inputClassName,
    placeholder,
    ...rest
  } = props;
  const className = _cs("co-input", inputClassName);

  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      {...rest}
    />
  );
}

Input.propTypes = {
  field: PropTypes.shape({
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
  }),
  inputClassName: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  inputClassName: [],
};

Input.Group = InputGroup;