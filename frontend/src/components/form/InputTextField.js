import React from 'react';
import { Translate } from 'react-localize-redux';

const InputTextField = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  password,
  email,
  number,
  className,
  divClassName,
  divClassNameWarning,
  divClassNameError,
  readOnly,
  disabled,
  required,
  meta: { touched, error, warning }
}) => {
  return (
    <Translate>
      {({ translate }) => {
        return (
          <div className="form-group">
            {label ? (
              <div className="row">
                <div className={`col-12 ${divClassName ? divClassName : ''}`}>
                  <label htmlFor={id}>{`${label}${required ? ' *' : ''}`}</label>
                </div>
              </div>
            ) : (
              ''
            )}
            <div className="row">
              <div className={`col-12 ${divClassName ? divClassName : ''}`}>
                <input
                  id={id}
                  value={value}
                  placeholder={placeholder}
                  type={password ? 'password' : email ? 'email' : number ? 'number' : 'text'}
                  className={className ? className : ''}
                  readOnly={readOnly}
                  disabled={disabled}
                  onChange={onChange}
                />
              </div>
            </div>
            {touched &&
              error &&
              ((translate(error) && (
                <div className={`col-12 has-error ${divClassNameError ? divClassNameError : ''}`}>
                  <span className="help-block">{error}</span>
                </div>
              )) ||
                (warning && (
                  <div className={`col-12 has-warning ${divClassNameWarning ? divClassNameWarning : ''}`}>
                    <span className="help-block">{warning}</span>
                  </div>
                )))}
          </div>
        );
      }}
    </Translate>
  );
};

export default InputTextField;
