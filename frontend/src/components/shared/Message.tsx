import { message } from 'antd';
import React, { memo } from 'react';
import { Translate } from 'react-localize-redux';

import { IError } from '../../interfaces';

interface Props {
  error: IError;
}

const Message: React.FC<Props> = props => {
  const { error } = props;

  if (error?.details?.length) {
    for (const detail of error.details) {
      message.error(detail?.message);
    }
  } else {
    message.error(error?.message);
  }

  return (
    <Translate>
      {({ translate }) => {
        console.log(translate);
        return <>{translate('auth.labels.email')}</>;
      }}
    </Translate>
  );
};

export default memo(Message);
