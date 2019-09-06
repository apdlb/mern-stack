import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/AuthActions';
import LoginForm from '../../components/auth/LoginForm';
import Body from '../../components/layout/Body';

const onSubmit = values => {};

const Login = () => {
  const initialValues = {};

  return <Body body={<LoginForm initialValues={initialValues} onSubmit={onSubmit} />} />;
};

export default connect(
  null,
  { login }
)(Login);
