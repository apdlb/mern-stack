import { Button, Icon, Table } from 'antd';
import _ from 'lodash';
import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';
import { Link } from 'react-router-dom';

import { IPropsTable } from '../../interfaces';
import PATHS from '../../utils/paths';

interface Props {
  propsTable: IPropsTable;
  onClickDelete: Function;
}

const EntitiesList: React.FC<Props> = props => {
  const { propsTable, onClickDelete } = props;

  return (
    <Translate>
      {({ translate }) => {
        const columns = [
          {
            title: translate('entities.labels.field1'),
            dataIndex: 'field1',
            sorter: true
          },
          {
            title: translate('entities.labels.field2'),
            dataIndex: 'field2',
            sorter: true
          },
          {
            title: translate('entities.labels.field3'),
            dataIndex: 'field3',
            render: (field3: boolean) => <Icon type={field3 ? 'check' : 'close'} />
          },
          {
            title: translate('generic.labels.actions'),
            render: (record: any) => renderActions({ record, onClickDelete }),
            width: '10%',
            align: 'center' as const
          }
        ];

        return (
          <>
            <Table
              columns={columns}
              rowKey={(record: any) => record._id}
              dataSource={propsTable.data}
              pagination={propsTable.pagination}
              loading={propsTable.loading}
              onChange={propsTable.handleOnChange}
            />
            <Link to={PATHS.ENTITIES_NEW}>
              <Button className="float" type="primary" shape="circle" icon="plus" />
            </Link>
          </>
        );
      }}
    </Translate>
  );
};

const renderActions = ({ record, onClickDelete }: any) => {
  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <Link to={_.replace(PATHS.ENTITIES_ID, ':id', record._id)}>
              <Icon type="edit" title={translate('generic.labels.edit') as string} />
            </Link>
            <Button type="link" icon="delete" onClick={() => onClickDelete(record._id)} title={translate('generic.labels.delete') as string} />
          </>
        );
      }}
    </Translate>
  );
};

export default memo(EntitiesList);
