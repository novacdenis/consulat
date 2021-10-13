import PropTypes from 'prop-types';
import { cloneElement, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import classNames from '../../utils/classNames';
import Error from './errorItem.component';

export default function FormItem(props) {
  const { name, control, label, children, className } = props;

  const formControl = useCallback(
    ({
      field,
      fieldState: { error, invalid },
      formState: { isSubmitted, isSubmitting },
    }) => (
      <div
        className={classNames(
          className,
          'form-control',
          !!invalid && 'invalid',
        )}
      >
        {!!label && (
          <label className="form-control-label" htmlFor={name}>
            {label}
          </label>
        )}
        {cloneElement(children, { field, isSubmitting })}
        <Error error={error} isFormSubmitted={isSubmitted} />
      </div>
    ),
    [children, className, label, name],
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
