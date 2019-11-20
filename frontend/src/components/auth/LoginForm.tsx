import { Button, Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';

import { formHasErrors } from '../../utils/helpers';
import FormItem from '../shared/form/FormItem';

interface Props extends FormComponentProps {
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const LoginForm: React.FC<Props> = props => {
  const { form, onSubmit } = props;
  const { getFieldsError } = form;

  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <div className="centred" style={{ height: '100%' }}>
              <Form className="grid-login-form" onSubmit={onSubmit} layout="vertical">
                <div className="grid-login-form-inputs">
                  <FormItem
                    form={form}
                    className="grid-login-form-input-email"
                    field="email"
                    label={translate('auth.labels.email')}
                    rules={[{ required: true, message: translate('validations.required', { input: translate('auth.labels.email') }) }]}
                    validations={['email']}
                  >
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={`${translate('auth.labels.email')}`} />
                  </FormItem>

                  <FormItem
                    form={form}
                    className="grid-login-form-input-password"
                    field="password"
                    label={translate('auth.labels.password')}
                    rules={[{ required: true, message: translate('validations.required', { input: translate('auth.labels.password') }) }]}
                  >
                    <Input.Password
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder={`${translate('auth.labels.password')}`}
                    />
                  </FormItem>
                </div>
                <div className="grid-login-form-buttons">
                  <Form.Item>
                    <Button htmlType="submit" type="primary" disabled={formHasErrors(getFieldsError())}>
                      {translate('auth.labels.login')}
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </>
        );
      }}
    </Translate>
  );
};

export default memo(LoginForm);
