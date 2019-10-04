import React from 'react';

import LoginFormHook from '../../components/auth/LoginFormHook';
import Body from '../../components/layout/Body';

const Login = props => {
  const initialValues = {};

  return <Body body={<LoginFormHook initialValues={initialValues} />} />;
};

export default Login;
