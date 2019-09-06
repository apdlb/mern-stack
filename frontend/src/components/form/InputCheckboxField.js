import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';

class InputCheckboxField extends Component {
  render() {
    const {
      input: { onChange, ...resInput },
      id,
      label,
      placeholder,
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
            <div className="row form-group">
              <div className={`col-12 ${divClassName ? divClassName : ''} flex`}>
                <input
                  {...resInput}
                  id={id}
                  placeholder={placeholder}
                  type="checkbox"
                  checked={resInput.value}
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
                <label htmlFor={id} style={{ textAlign: 'left' }}>{`${label}${required ? ' *' : ''}`}</label>
              </div>
              {touched &&
                error &&
                ((translate(error) && (
                  <div className={`col-12 has-error ${divClassNameError ? divClassNameError : ''}`} style={{ textAlign: 'left' }}>
                    <span className="help-block">{translate(error)}</span>
                  </div>
                )) ||
                  (warning && (
                    <div className={`col-12 has-warning ${divClassNameWarning ? divClassNameWarning : ''}`} style={{ textAlign: 'left' }}>
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

export default InputCheckboxField;
