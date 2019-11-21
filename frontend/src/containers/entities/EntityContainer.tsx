import '../../styles/containers/entity.less';

import { Form, PageHeader } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import _ from 'lodash';
import React, { memo, useEffect } from 'react';
import { Translate } from 'react-localize-redux';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory, useParams, withRouter } from 'react-router';

import EntityForm from '../../components/entities/EntityForm';
import Content from '../../components/shared/layout/Content';
import { createEntity, getEntity, updateEntity } from '../../redux/actions/entityActions';
import PATHS from '../../utils/paths';

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams>, FormComponentProps {}

const EntityContainer: React.FC<Props> = props => {
  const { form } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams() as any;
  const entities = useSelector((state: any) => state.entities);
  const { entity } = entities;

  useEffect(() => {
    if (params.id) {
      dispatch(getEntity(params.id));
    }

    // To disabled submit button at the beginning.
    form.validateFields();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // To re-render values on inputs
    form.resetFields();
    // To disabled submit button at the beginning.
    form.validateFields();
    // eslint-disable-next-line
  }, [entity]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.validateFields((err: any, values: any) => {
      if (!err) {
        const { id } = params;

        let call;
        if (id) {
          call = updateEntity(id, values);
        } else {
          call = createEntity(values);
        }

        dispatch(call);
        history.goBack();
      }
    });
  };

  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <Content
              body={
                <>
                  <PageHeader
                    title={_.isEmpty(entity) ? translate('entities.labels.newEntity') : translate('entities.labels.updateEntity')}
                    onBack={() => history.push(PATHS.ENTITIES)}
                  >
                    <EntityForm form={form} onSubmit={handleOnSubmit} initialValues={entity} />
                  </PageHeader>
                </>
              }
            />
          </>
        );
      }}
    </Translate>
  );
};

const WrappedEntityContainer = Form.create<Props>({ name: 'entityForm' })(EntityContainer);

export default withRouter(memo(WrappedEntityContainer));
