import React from 'react';
import { Translate } from 'react-localize-redux';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = [];

  return errors;
};

const LoginForm = props => {
  return (
    <Translate>
      {({ translate }) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-12">{translate('auth.labels.email')}</div>
            </div>
          </div>
        );
      }}
    </Translate>
  );
};

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm);
