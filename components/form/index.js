import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useYupValidationResolver from "hooks/useYupValidationResolver";
import useFormChildrenWithProps from "hooks/useFormChildrenWithProps";
import FormItem from './formItem'
import classNames from "@/utils/classNames";

export default function Form(props) {
  const { name, schema, children, setForm, defaultValues, className } = props;
  const resolver = useYupValidationResolver(schema);
  const formInstance = useForm({ resolver, defaultValues });
  const { control } = formInstance;

  useEffect(() => setForm(formInstance), [formInstance, setForm]);

  const childrenWithProps = useFormChildrenWithProps({ control });

  return (
    <form className={classNames("co-form", className)} id={name}>
      {childrenWithProps(children)}
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  schema: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  setForm: PropTypes.func,
  defaultValues: PropTypes.object,
};

Form.defaultProps = {
  setForm: () => null,
  defaultValues: {},
};

Form.Item = FormItem;
