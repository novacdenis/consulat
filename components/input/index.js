import PropTypes from "prop-types";
import InputGroup from "./inputGroup";
import _cs from "@/utils/condStrings";

export default function Input(props) {
  const { className, field, isSubmitting, prefix, placeholder, disabled } = props;

  return (
    <div className="co-input_wrapper">
      {!!prefix && <span className="co-input_prefix">{prefix}</span>}
      <input
        {...field}
        value={field.value ?? ""}
        id={field.name}
        className={_cs(className, "co-input", !!prefix && "with-prefix")}
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

Input.Group = InputGroup;
