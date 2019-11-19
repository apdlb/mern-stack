import { Button, Form } from 'antd';
import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';
import { Field, reduxForm } from 'redux-form';

import { InputField, InputPasswordField } from '../form/Fields';

interface Props {}

const LoginForm: React.FC<Props> = ({ handleSubmit, pristine, submitting, invalid }: any) => {
  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <div className="centred" style={{ height: '100%' }}>
              <Form className="grid-login-form" onSubmit={handleSubmit} layout="vertical">
                <div className="grid-login-form-inputs">
                  <Field
                    className="grid-login-form-inputs-email"
                    email="true"
                    name="email"
                    label={translate('auth.labels.email')}
                    component={InputField}
                  />
                  <Field
                    className="grid-login-form-inputs-password"
                    password="true"
                    name="password"
                    label={translate('auth.labels.password')}
                    component={InputPasswordField}
                  />
                </div>
                <div className="grid-login-form-buttons">
                  <Form.Item>
                    <Button htmlType="submit" type="primary" disabled={pristine || submitting || invalid}>
                      {translate('auth.labels.login')}
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </>
        );
      }}
    </Translate>
  );
};

const validate = (values: any) => {
  const errors = [] as any;

  if (!values.email) {
    errors.email = 'validations.required';
  }

  if (!values.password) {
    errors.password = 'validations.required';
  }

  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate,
  enableReinitialize: true
})(memo(LoginForm));
