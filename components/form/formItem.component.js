import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Controller } from "react-hook-form";
import Errors from "./errors.component";
import _cs from "@/utils/condStrings";

export default function FormItem(props) {
  const { name, control, children, label, initialValues, controlClassName } = props;

  const render = useCallback(
    ({ field, fieldState: { error }, formState: { isSubmitted } }) => {
      return (
        <div className={_cs("form-control", controlClassName, (error && "invalid") || "")}>
          {!!label && <label htmlFor={name}>{label}</label>}
          {React.cloneElement(children, { field })}
          <Errors isSubmitted={isSubmitted} error={error} />
        </div>
      );
    },
    [children, controlClassName, label, name]
  );

  return (
    <Controller
      defaultValue={initialValues?.[name] || ""}
      control={control}
      name={name}
      render={render}
    />
  );
}

FormItem.propTypes = {
  control: PropTypes.object,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  initialValues: PropTypes.object,
  controlClassName: PropTypes.arrayOf(PropTypes.string),
};

FormItem.defaultProps = {
  controlClassName: [],
};
