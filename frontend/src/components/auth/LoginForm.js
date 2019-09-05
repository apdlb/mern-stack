import React from 'react';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = [];

  return errors;
};

const LoginForm = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">Prueba</div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm);
