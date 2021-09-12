import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export default function Form(props) {
  const [elements, setElements] = useState([]);
  const { onFinish, children, initialValues } = props;
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitted },
  } = useForm();

  useEffect(() => {
    if (children) {
      setElements(React.Children.toArray(children));
    }

    return () => {
      setElements([]);
    };
  }, [children]);

  const getElementsWithProps = useCallback(() => {
    return elements.map((el) =>
      React.cloneElement(el, { control, errors, setError, initialValues, isSubmitted })
    );
  }, [control, elements, errors, initialValues, isSubmitted, setError]);

  return <form onSubmit={handleSubmit(onFinish)}>{getElementsWithProps()}</form>;
}

Form.propTypes = {
  onFinish: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  initialValues: PropTypes.object,
};
