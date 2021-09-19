import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import useYupValidationResolver from "hooks/useYupValidationResolver";
import useFormChildrenWithProps from "hooks/useFormChildrenWithProps";
import FormItem from "./formItem.component";
import _cs from "@/utils/condStrings";

export default function Form(props) {
  const { onFinish, children, initialValues, formClassName, validationSchema } = props;
  const resolver = useYupValidationResolver(validationSchema);
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitted },
  } = useForm({ resolver });
  const passPropsToChildren = useFormChildrenWithProps({
    control,
    setError,
    initialValues,
    isSubmitted,
  });
  const className = _cs("co-form", formClassName);

  const getElementsWithProps = useCallback(() => {
    return passPropsToChildren(children);
  }, [children, passPropsToChildren]);

  return (
    <form className={className} onSubmit={handleSubmit(onFinish)}>
      {getElementsWithProps()}
    </form>
  );
}

Form.propTypes = {
  onFinish: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  initialValues: PropTypes.object,
  formClassName: PropTypes.arrayOf(PropTypes.string),
  validationSchema: PropTypes.object,
};

Form.defaultProps = {
  formClassName: [],
  validationSchema: {},
};

Form.Item = FormItem;
