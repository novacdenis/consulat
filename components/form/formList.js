import React from "react";
import PropTypes from "prop-types";
import { useFieldArray } from "react-hook-form";

export default function FormList(props) {
  const { control, name, children } = props;
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="form-control_list">
      {children({
        control,
        fields,
        add: append,
        remove,
      })}
    </div>
  );
}

FormList.propTypes = {
  control: PropTypes.object,
  name: PropTypes.string,
  children: PropTypes.func,
};

FormList.defaultProps = {};
