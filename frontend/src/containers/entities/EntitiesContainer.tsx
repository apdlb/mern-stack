import '../../styles/containers/entities.less';

import { Divider, Form, Modal } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { PaginationConfig } from 'antd/lib/table';
import _ from 'lodash';
import React, { memo, useEffect, useState } from 'react';
import { getTranslate, Translate } from 'react-localize-redux';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import EntitiesFilterForm from '../../components/entities/EntitiesFilterForm';
import EntitiesList from '../../components/entities/EntitiesList';
import Content from '../../components/shared/layout/Content';
import { cleanEntities, deleteEntity, listEntities, setListEntitiesParams } from '../../redux/actions/entityActions';

interface MatchParams {}
interface Props extends RouteComponentProps<MatchParams>, FormComponentProps {}

const EntitiesContainer: React.FC<Props> = props => {
  const { form } = props;
  const dispatch = useDispatch();
  const [loading] = useState(false);
  const localize = useSelector((state: any) => state.localize);
  const translate = getTranslate(localize);
  const entities = useSelector((state: any) => state.entities);

  useEffect(() => {
    dispatch(cleanEntities());
    handleOnResetFilter();
    // eslint-disable-next-line
  }, []);

  const loadEntities = (params?: any) => {
    dispatch(listEntities(params));
  };

  const handleOnSubmitFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      paginateEntitiesParams: { page, pageSize, sort, order, ...rest }
    } = entities;

    const params = { ...rest, ...props.form.getFieldsValue() };
    loadEntities(params);
    dispatch(setListEntitiesParams(params));
  };

  const handleOnResetFilter = () => {
    dispatch(cleanEntities());
    form.resetFields();
    loadEntities();
  };

  const handleOnTableChange = (pagination: PaginationConfig, filters: any, sorter: any) => {
    const { paginateEntitiesParams: params } = entities;

    params.page = pagination.current;
    params.pageSize = pagination.pageSize;

    if (!_.isEmpty(sorter)) {
      params.sort = sorter.field;
      params.order = sorter.order;
    }
    loadEntities(params);
    dispatch(setListEntitiesParams(params));
  };

  const deleteRecord = (id: string) => {
    const { paginateEntitiesParams: params } = entities;

    dispatch(deleteEntity(id));
    loadEntities(params);
  };

  const handleOnClickDelete = (id: string) => {
    Modal.confirm({
      title: translate('generic.labels.delete'),
      content: translate('entities.modals.delete'),
      okText: translate('generic.labels.yes'),
      cancelText: translate('generic.labels.no'),
      onOk: () => {
        return deleteRecord(id);
      },
      onCancel: () => {}
    });
  };

  const {
    paginateEntities: { docs, page, limit, totalDocs }
  } = entities;
  const pagination = {
    current: page,
    pageSize: limit,
    total: totalDocs
  };

  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <Content
              body={
                <>
                  <Divider orientation="left">{translate('nav.entities')}</Divider>
                  <EntitiesFilterForm form={form} onSubmit={handleOnSubmitFilter} onReset={handleOnResetFilter} />
                  <EntitiesList
                    propsTable={{
                      data: docs,
                      pagination,
                      loading,
                      handleOnChange: handleOnTableChange
                    }}
                    onClickDelete={handleOnClickDelete}
                  />
                </>
              }
            />
          </>
        );
      }}
    </Translate>
  );
};

const WrappedEntitiesContainer = Form.create<Props>({ name: 'entitiesFilter' })(EntitiesContainer);

export default withRouter(memo(WrappedEntitiesContainer));
