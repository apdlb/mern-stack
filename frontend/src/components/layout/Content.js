import { Layout } from 'antd';
import React from 'react';

const Content = ({ body }) => {
  return <Layout.Content className="grid-content">{body}</Layout.Content>;
};

export default Content;
