import React, { memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LoginContainer from '../containers/auth/LoginContainer';
import EntitiesContainer from '../containers/entities/EntitiesContainer';
import EntityContainer from '../containers/entities/EntityContainer';
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
          <AuthRouters exact path={PATHS.ENTITIES} children={<EntitiesContainer />} />
          <AuthRouters exact path={PATHS.ENTITIES_NEW} children={<EntityContainer />} />
          <AuthRouters path={PATHS.ENTITIES_ID} children={<EntityContainer />} />

          <Route path="/" render={() => <Redirect to={PATHS.LOGIN} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default memo(Routers);
