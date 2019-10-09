import { Layout } from 'antd';
import React from 'react';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Body = ({ body }) => {
  return (
    <Layout className="grid-container">
      <Header />
      <Content body={body}></Content>
      <Footer />
    </Layout>
  );
};

export default Body;
