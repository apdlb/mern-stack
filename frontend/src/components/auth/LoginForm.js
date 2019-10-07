import React from 'react';
import { Translate } from 'react-localize-redux';
import { Field, reduxForm } from 'redux-form';

import InputTextField from '../form/InputTextField';

const validate = values => {
  const errors = [];

  if (!values.email) {
    errors.email = 'validations.required';
  }

  if (!values.password) {
    errors.password = 'validations.required';
  }

  return errors;
};

const LoginForm = ({ handleSubmit, pristine, submitting, invalid }) => {
  return (
    <Translate>
      {({ translate }) => {
        return (
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-12">
                  <Field id="email" name="email" label={translate('auth.labels.email')} email component={InputTextField} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <Field id="password" name="password" label={translate('auth.labels.password')} password component={InputTextField} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button className="btn btn-lg btn-primary" type="submit" disabled={pristine || submitting || invalid}>
                    {translate('auth.labels.login')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      }}
    </Translate>
  );
};

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);
