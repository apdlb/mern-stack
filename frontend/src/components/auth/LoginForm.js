import React from 'react';
import { useField, useForm } from 'react-final-form-hooks';
import { Translate } from 'react-localize-redux';

import InputTextField from '../form/InputTextField';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2));
};

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

const LoginForm = ({ dispatch }) => {
  const { form, handleSubmit, pristine, submitting, invalid } = useForm({
    onSubmit,
    validate
  });

  const email = useField('email', form);
  const password = useField('password', form);

  return (
    <Translate>
      {({ translate }) => {
        return (
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-12">
                  <InputTextField id="email" label={translate('auth.labels.email')} email field={email} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <InputTextField id="password" label={translate('auth.labels.password')} password field={password} />
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

export default LoginForm;
