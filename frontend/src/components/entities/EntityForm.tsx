import { Button, Checkbox, Input, InputNumber } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form/Form';
import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';

import { IMetadataObj } from '../../interfaces';
import { formHasErrors } from '../../utils/helpers';
import FormItem from '../shared/form/FormItem';

interface Props extends FormComponentProps {
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
  initialValues?: IMetadataObj;
}

const EntityForm: React.FC<Props> = props => {
  const { form, onSubmit, initialValues = {} } = props;
  const { getFieldsError } = form;

  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <Form className="grid-entity-form" onSubmit={onSubmit} layout="vertical">
              <div className="grid-entity-form-inputs">
                <FormItem
                  form={form}
                  className="grid-entity-form-input-field1"
                  field="field1"
                  label={translate('entities.labels.field1')}
                  initialValue={initialValues.field1}
                  rules={[{ required: true, message: translate('validations.required', { input: translate('entities.labels.field1') }) }]}
                >
                  <Input placeholder={`${translate('entities.labels.field1')}`} />
                </FormItem>

                <FormItem
                  form={form}
                  className="grid-entity-form-input-field2"
                  field="field2"
                  label={translate('entities.labels.field2')}
                  initialValue={initialValues.field2}
                  rules={[{ type: 'number', message: translate('validations.number', { input: translate('entities.labels.field2') }) }]}
                >
                  <InputNumber placeholder={`${translate('entities.labels.field2')}`} />
                </FormItem>

                <FormItem
                  form={form}
                  className="grid-entity-form-input-field3 form-item-checkbox"
                  field="field3"
                  valuePropName="checked"
                  label={translate('entities.labels.field3')}
                  initialValue={initialValues.field3}
                >
                  <Checkbox />
                </FormItem>
              </div>
              <div className="grid-entity-form-buttons">
                <Form.Item>
                  <Button htmlType="submit" type="primary" disabled={formHasErrors(getFieldsError())}>
                    {translate('generic.labels.save')}
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </>
        );
      }}
    </Translate>
  );
};

export default memo(EntityForm);
