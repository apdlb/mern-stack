import '../../styles/pages/login.less';

import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import LoginForm from '../../components/auth/LoginForm';
import Content from '../../components/layout/Content';
import { login, logout } from '../../redux/actions/AuthActions';

interface MatchParams {}
interface Props extends RouteComponentProps<MatchParams>, FormComponentProps {}

const Login: React.FC<Props> = props => {
  const { form } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    // If login is rendered, logout and clean local storage
    dispatch(logout());

    // To disabled submit button at the beginning.
    form.validateFields();
    // eslint-disable-next-line
  }, []);

  const onSubmit = (values: any) => {
    dispatch(login(values));
  };

  return (
    <>
      <Content body={<LoginForm form={form} onSubmit={onSubmit} />} />
    </>
  );
};

const WrappedLogin = Form.create<Props>({ name: 'login' })(Login);

export default withRouter(memo(WrappedLogin));
