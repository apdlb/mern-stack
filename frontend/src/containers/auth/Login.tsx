import '../../styles/pages/login.less';

import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import LoginForm from '../../components/auth/LoginForm';
import Content from '../../components/layout/Content';
import { login } from '../../redux/actions/AuthActions';

interface Props {}

const Login: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: any) => {
    dispatch(login(values));
  };

  const initialValues = {};

  return (
    <>
      <Content body={<LoginForm initialValues={initialValues} onSubmit={onSubmit} />} />
    </>
  );
};

export default memo(Login);
