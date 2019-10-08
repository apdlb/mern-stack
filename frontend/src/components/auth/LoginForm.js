import { Button, Form } from 'antd';
import React from 'react';
import { Translate } from 'react-localize-redux';
import { Field, reduxForm } from 'redux-form';

import { InputField, InputPasswordField } from '../form/Fields';

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
          <div className="">
            <Form onSubmit={handleSubmit} layout="vertical">
              <Field email="true" name="email" label={translate('auth.labels.email')} component={InputField} />
              <Field password="true" name="password" label={translate('auth.labels.password')} component={InputPasswordField} />
              <Form.Item>
                <Button htmlType="submit" type="primary" disabled={pristine || submitting || invalid}>
                  {translate('auth.labels.login')}
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Translate>
  );
};

export default reduxForm({
  form: 'loginForm',
  validate,
  enableReinitialize: true
})(LoginForm);
