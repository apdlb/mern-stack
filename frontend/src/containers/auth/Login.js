import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
  return <LoginForm></LoginForm>;
};

export default connect(
  null,
  {}
)(Login);
