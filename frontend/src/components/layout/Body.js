import React from 'react';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

const Body = ({ body }) => {
  return (
    <div className="grid-container">
      <Header />
      <SideBar />
      <Content body={body}></Content>
      <Footer />
    </div>
  );
};

export default Body;
