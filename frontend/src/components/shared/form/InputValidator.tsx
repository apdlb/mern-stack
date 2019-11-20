import { WrappedFormUtils } from 'antd/lib/form/Form';
import React, { memo } from 'react';

import useValidators from '../../../hooks/useValidators';
import { IMetadataObj } from '../../../interfaces';

interface Props {
  form: WrappedFormUtils;
  field: string;
  valuePropName?: string;
  label: string | number | React.ReactNode;
  initialValue?: any;
  rules?: IMetadataObj[];
  validations?: string[];
  children: React.ReactNode;
}

const InputValidator: React.FunctionComponent<Props> = props => {
  const { form, field, valuePropName = 'value', label, initialValue, rules = [], validations, children } = props;
  const validators = useValidators();
  const { getFieldDecorator } = form;

  return (
    <>
      {getFieldDecorator(field, {
        valuePropName,
        initialValue,
        validateFirst: true,
        rules: [
          ...rules,
          {
            validator(rule: any, value: string, callback: Function) {
              if (validations) {
                for (const validation of validations) {
                  (validators as any)[validation](callback, value, label);
                }
              }
              callback();
            }
          }
        ]
      })(children)}
    </>
  );
};

export default memo(InputValidator);
