import React, { memo } from 'react';
import { connect } from 'react-redux';

interface Props {}

const Message: React.FC<Props> = () => {
  return <>Hola</>;
};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, {})(memo(Message));
