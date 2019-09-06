import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/auth/LoginForm';
import Body from '../../components/layout/Body';

const Login = props => {
  const initialValues = {};

  return <Body body={<LoginForm initialValues={initialValues} />} />;
};

export default connect(null)(Login);
