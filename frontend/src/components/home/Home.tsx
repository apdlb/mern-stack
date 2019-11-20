import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Translate>
      {({ translate }) => {
        return <></>;
      }}
    </Translate>
  );
};

export default memo(Home);
