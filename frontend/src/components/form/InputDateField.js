import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Translate } from 'react-localize-redux';

class InputDateField extends Component {
  render() {
    const {
      input: { value, ...resInput },
      label,
      className,
      divClassName,
      divClassNameWarning,
      divClassNameError,
      required,
      showTimeSelect,
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
              <div className="col-12">
                <DatePicker
                  {...resInput}
                  className={className ? className : ''}
                  selected={value ? moment(value) : null}
                  dateFormat={`MM/DD/YYYY${showTimeSelect ? ' HH:mm' : ''}`}
                  placeholderText={`MM/DD/YYYY${showTimeSelect ? ' HH:mm' : ''}`}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  showTimeSelect={showTimeSelect ? true : false}
                  timeFormat="HH:mm"
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
        )}
      </Translate>
    );
  }
}

export default InputDateField;
