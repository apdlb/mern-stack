import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/auth/LoginForm';
import Body from '../../components/layout/Body';

const onSubmit = values => {
  console.log(values);
};

const Login = () => {
  const initialValues = {};

  return <Body body={<LoginForm initialValues={initialValues} onSubmit={onSubmit} />} />;
};

export default connect(
  null,
  {}
)(Login);
