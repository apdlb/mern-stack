import '../../styles/pages/login.less';

import { Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import LoginForm from '../../components/auth/LoginForm';
import Content from '../../components/shared/layout/Content';
import { login, logout } from '../../redux/actions/authActions';

interface MatchParams {}
interface Props extends RouteComponentProps<MatchParams>, FormComponentProps {}

const LoginContainer: React.FC<Props> = props => {
  const { form } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    // If login is rendered, logout and clean local storage
    dispatch(logout());

    // To disabled submit button at the beginning.
    form.validateFields();
    // eslint-disable-next-line
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.validateFields((err: any, values: any) => {
      if (!err) {
        dispatch(login(values));
      }
    });
  };

  return (
    <>
      <Content body={<LoginForm form={form} onSubmit={onSubmit} />} />
    </>
  );
};

const WrappedLoginContainer = Form.create<Props>({ name: 'loginForm' })(LoginContainer);

export default withRouter(memo(WrappedLoginContainer));
