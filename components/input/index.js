import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

export default function Input(props) {
  const { className, field, isSubmitting, prefix, placeholder, disabled } = props;

  return (
    <div className="co-input_wrapper">
      {!!prefix && <span className="co-input_prefix">{prefix}</span>}
      <input
        {...field}
        id={field.name}
        className={classNames(className, "co-input", !!prefix && "with-prefix")}
        disabled={isSubmitting || disabled}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  field: PropTypes.object,
  isSubmitting: PropTypes.bool,
  prefix: PropTypes.element,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
