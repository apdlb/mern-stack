import Form, { WrappedFormUtils } from 'antd/lib/form/Form';
import React, { memo } from 'react';

import { IMetadataObj } from '../../../interfaces';
import { formItemHelp, formItemValidateStatus } from '../../../utils/helpers';
import InputValidator from './InputValidator';

interface Props {
  form: WrappedFormUtils;
  className?: string;
  field: string;
  valuePropName?: string;
  label: string | number | React.ReactNode;
  initialValue?: any;
  rules?: IMetadataObj[];
  validations?: string[];
  formItemProps?: any;
  children: React.ReactNode;
}

const FormItem: React.FunctionComponent<Props> = props => {
  const { form, className, field, valuePropName, label, initialValue, rules, validations, formItemProps, children } = props;

  return (
    <>
      <Form.Item
        className={className}
        label={label}
        validateStatus={formItemValidateStatus(form, field)}
        help={formItemHelp(form, field)}
        {...formItemProps}
      >
        <InputValidator
          form={form}
          field={field}
          valuePropName={valuePropName}
          label={label}
          initialValue={initialValue}
          rules={rules}
          validations={validations}
        >
          {children}
        </InputValidator>
      </Form.Item>
    </>
  );
};

export default memo(FormItem);
