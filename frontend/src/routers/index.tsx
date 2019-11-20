import React, { memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LoginContainer from '../containers/auth/LoginContainer';
import HomeContainer from '../containers/home/HomeContainer';
import PATHS from '../utils/paths';
import AuthRouters from './AuthRouters';
import NoAuthRouters from './NoAuthRouters';

interface Props {}

const Routers: React.FC<Props> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <NoAuthRouters exact path={PATHS.LOGIN} children={<LoginContainer />} />
          <AuthRouters exact path={PATHS.HOME} children={<HomeContainer />} />

          <Route path="/" render={() => <Redirect to={PATHS.LOGIN} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default memo(Routers);
