import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/auth/LoginForm';

const onSubmit = values => {
  console.log(values);
};

const Login = () => {
  const initialValues = {};

  return <LoginForm initialValues={initialValues} onSubmit={onSubmit} />;
};

export default connect(
  null,
  {}
)(Login);
