import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';

class InputTextField extends Component {
  render() {
    const {
      input: { onChange, ...resInput },
      id,
      label,
      placeholder,
      password,
      email,
      number,
      className,
      divClassName,
      divClassNameWarning,
      divClassNameError,
      onChangeValue,
      readOnly,
      disabled,
      required,
      meta: { touched, error, warning }
    } = this.props;

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
                    {...resInput}
                    id={id}
                    placeholder={placeholder}
                    type={password ? 'password' : email ? 'email' : number ? 'number' : 'text'}
                    className={className ? className : ''}
                    readOnly={readOnly}
                    disabled={disabled}
                    onChange={async event => {
                      await onChange(event);
                      if (onChangeValue) {
                        await onChangeValue(event);
                      }
                    }}
                  />
                </div>
              </div>
              {touched &&
                error &&
                ((translate(error) && (
                  <div className={`col-12 has-error ${divClassNameError ? divClassNameError : ''}`}>
                    <span className="help-block">{translate(error)}</span>
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
  }
}

export default InputTextField;
