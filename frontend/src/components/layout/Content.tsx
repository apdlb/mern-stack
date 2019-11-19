import { Layout } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import React, { memo } from 'react';

interface Props {
  body: React.ReactNode | FormComponentProps;
}

const Content: React.FC<Props> = ({ body }) => {
  return (
    <>
      <Layout.Content className="grid-content">{body}</Layout.Content>
    </>
  );
};

export default memo(Content);
