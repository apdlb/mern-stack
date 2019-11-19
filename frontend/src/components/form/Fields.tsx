import { Form, Input } from 'antd';
import React from 'react';
import { Translate } from 'react-localize-redux';

const formItemLayout = {};

const makeField = (Component: any) => (props: any) => {
  const { input, meta, children, hasFeedback, label, ...rest } = props;
  const hasError = meta.touched && meta.invalid;

  return (
    <Translate>
      {({ translate }) => {
        return (
          <div>
            <Form.Item
              {...formItemLayout}
              label={label}
              validateStatus={hasError ? 'error' : 'success'}
              hasFeedback={hasFeedback && hasError}
              help={hasError && translate(meta.error) ? translate(meta.error) : hasError && meta.error}
            >
              <Component {...input} {...rest} children={children} />
            </Form.Item>
          </div>
        );
      }}
    </Translate>
  );
};

export const InputField = makeField(Input);
export const InputPasswordField = makeField(Input.Password);

export default makeField;
