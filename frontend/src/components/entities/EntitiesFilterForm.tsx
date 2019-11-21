import { Button, Collapse, Divider, Icon, Input, InputNumber } from 'antd';
import Form, { FormComponentProps } from 'antd/lib/form/Form';
import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';

import FormItem from '../shared/form/FormItem';

interface Props extends FormComponentProps {
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
  onReset: React.MouseEventHandler<HTMLElement>;
}

const EntitiesFormFilter: React.FC<Props> = props => {
  const { form, onSubmit, onReset } = props;

  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <Collapse bordered={false}>
              <Collapse.Panel
                key="filter"
                header={
                  <>
                    <Divider orientation="left">
                      <Icon type="filter" style={{ marginRight: '10px' }}></Icon>
                      {translate('generic.labels.filters')}
                    </Divider>
                  </>
                }
              >
                <Form className="grid-entities-filter-form" onSubmit={onSubmit} layout="vertical">
                  <div className="grid-entities-filter-form-inputs">
                    <FormItem
                      form={form}
                      className="grid-entities-filter-form-input-field1"
                      field="field1"
                      label={translate('entities.labels.field1')}
                    >
                      <Input placeholder={`${translate('entities.labels.field1')}`} />
                    </FormItem>

                    <FormItem
                      form={form}
                      className="grid-entities-filter-form-input-field2"
                      field="field2"
                      label={translate('entities.labels.field2')}
                      rules={[{ type: 'number', message: translate('validations.number', { input: translate('entities.labels.field2') }) }]}
                    >
                      <InputNumber placeholder={`${translate('entities.labels.field2')}`} />
                    </FormItem>
                  </div>
                  <div className="grid-entities-filter-form-buttons">
                    <Form.Item>
                      <Button htmlType="submit" type="primary">
                        {translate('generic.labels.filter')}
                      </Button>
                      <Button type="link" onClick={onReset}>
                        {translate('generic.labels.reset')}
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </Collapse.Panel>
            </Collapse>
            <Divider />
          </>
        );
      }}
    </Translate>
  );
};

export default memo(EntitiesFormFilter);
