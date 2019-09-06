import React from 'react';

import Footer from './Footer';
import Header from './Header';

const Body = ({ body }) => {
  return (
    <div>
      <Header />
      <div>{body}</div>
      <Footer />
    </div>
  );
};

export default Body;
