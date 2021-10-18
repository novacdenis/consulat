import PropTypes from "prop-types";
import { cloneElement, useCallback } from "react";
import { Controller } from "react-hook-form";
import Errors from "./errorsList";
import _cs from "@/utils/condStrings";

export default function FormItem(props) {
  const { name, control, label, children, className } = props;

  const formControl = useCallback(
    ({ field, fieldState: { error, invalid }, formState: { isSubmitted, isSubmitting } }) => {
      return (
        <div className={_cs(className, "form-control", !!invalid && "invalid")}>
          {!!label && (
            <label className="form-control-label" htmlFor={name}>
              {label}
            </label>
          )}
          {cloneElement(children, { field, isSubmitting })}
          <Errors error={error} isFormSubmitted={isSubmitted} />
        </div>
      );
    },
    [children, className, label, name]
  );

  return <Controller control={control} name={name} render={formControl} />;
}

FormItem.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
