import React, { memo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Home from '../../components/home/Home';
import Content from '../../components/shared/layout/Content';

interface MatchParams {}
interface Props extends RouteComponentProps<MatchParams> {}

const HomeContainer: React.FC<Props> = props => {
  return (
    <>
      <Content body={<Home />} />
    </>
  );
};

export default withRouter(memo(HomeContainer));
