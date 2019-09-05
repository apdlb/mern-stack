import React, { Component } from 'react';
import { Translate } from 'react-localize-redux';

class InputSelectField extends Component {
  render() {
    const {
      input: { onChange, ...resInput },
      label,
      className,
      divClassName,
      divClassNameWarning,
      divClassNameError,
      onChangeValue,
      children,
      disabled,
      required,
      meta: { touched, error, warning }
    } = this.props;
    return (
      <Translate>
        {(translate, activeLanguage, languages) => (
          <div className="form-group">
            <div className="row">
              <div className={`col-12 ${divClassName ? divClassName : ''}`}>
                <label className="control-label">{`${label}${required ? ' *' : ''}`}</label>
              </div>
            </div>
            <div className="row">
              <div className={`col-12 ${divClassName ? divClassName : ''}`}>
                <select
                  {...resInput}
                  className={className ? className : ''}
                  disabled={disabled}
                  onChange={async event => {
                    await onChange(event);
                    if (onChangeValue) {
                      await onChangeValue(event);
                    }
                  }}
                >
                  {children}
                </select>
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
        )}
      </Translate>
    );
  }
}

export default InputSelectField;
