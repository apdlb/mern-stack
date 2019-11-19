import { Divider, Layout } from 'antd';
import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Translate>
      {({ translate }) => {
        return (
          <>
            <Layout.Footer className="grid-footer">
              <Divider />
              MERN Template with Typescript ©2019 Created by Apaez
            </Layout.Footer>
          </>
        );
      }}
    </Translate>
  );
};

export default memo(Footer);
