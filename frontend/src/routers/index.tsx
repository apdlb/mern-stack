import React, { memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Login from '../containers/auth/Login';
import PATHS from '../utils/paths';
import NoAuthRouters from './NoAuthRouters';

interface Props {}

const Routers: React.FC<Props> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <NoAuthRouters exact path={PATHS.LOGIN} children={<Login />} />

          <Route path="/" render={() => <Redirect to={PATHS.LOGIN} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default memo(Routers);
