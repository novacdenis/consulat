import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Controller } from "react-hook-form";
import ControllerErrors from "./controllerErrors.component";
import controllerErrorsHandler from "@/utils/controllerRulesHandler";

export default function FormItem(props) {
  const { name, control, children, label, initialValues, rules } = props;

  const render = useCallback(
    ({ field, fieldState: { error }, formState: { isSubmitted } }) => {
      return (
        <div className="form-control">
          <label htmlFor={name}>{label}</label>
          {React.cloneElement(children, { field })}
          <ControllerErrors
            isSubmitted={isSubmitted}
            error={error}
            messages={controllerErrorsHandler.getMessages(rules)}
          />
        </div>
      );
    },
    [children, label, name, rules]
  );

  return (
    <Controller
      defaultValue={initialValues?.[name] || ""}
      control={control}
      rules={{ ...controllerErrorsHandler.getRules(rules) }}
      name={name}
      render={render}
    />
  );
}

FormItem.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  initialValues: PropTypes.object,
  rules: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        required: PropTypes.bool,
        message: PropTypes.string,
      }),
      PropTypes.shape({
        minLength: PropTypes.number,
        message: PropTypes.string,
      }),
    ])
  ),
};
