import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useYupValidationResolver from "hooks/useYupValidationResolver";
import useFormChildrenWithProps from "hooks/useFormChildrenWithProps";
import FormItem from "./formItem";
import FormList from "./formList";
import _cs from "@/utils/condStrings";

export default function Form(props) {
  const { name, schema, children, setForm, defaultValues, className, onFinish } = props;
  const resolver = useYupValidationResolver(schema);
  const formInstance = useForm({ resolver, defaultValues });
  const { control, handleSubmit } = formInstance;

  useEffect(() => setForm(formInstance), [formInstance, setForm]);

  const childrenWithProps = useFormChildrenWithProps({ control });

  return (
    <form className={_cs("co-form", className)} id={name} onSubmit={handleSubmit(onFinish)}>
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
  onFinish: PropTypes.func,
};

Form.defaultProps = {
  setForm: () => null,
  onFinish: () => null,
};

Form.Item = FormItem;
Form.List = FormList;
