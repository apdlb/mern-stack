import React from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../actions/AuthActions';
import LoginForm from '../../components/auth/LoginForm';
import Body from '../../components/layout/Body';
import useError from '../../hooks/ErrorHook';

const Login = () => {
  const dispatch = useDispatch();
  const { errorControl } = useError();

  const onSubmit = values => {
    console.log('Submit');
    dispatch(login(values))
      .then(r => {
        console.log('Hola', r);
      })
      .catch(err => {
        console.log('Error', err);
        errorControl(err, true);
      });
  };

  const initialValues = {};

  return <Body body={<LoginForm initialValues={initialValues} onSubmit={onSubmit} />}></Body>;
};

export default Login;
