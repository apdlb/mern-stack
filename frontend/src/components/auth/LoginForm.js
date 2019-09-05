import React from 'react';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = [];

  return errors;
};

const LoginForm = props => {
  return <div>Prueba</div>;
};

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm);
