import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';

import useAuth from '../hooks/useAuth';
import PATHS from '../utils/paths';

interface Props extends RouteProps {
  auth: any;
}

const NoAuthRouters: React.FC<Props> = props => {
  const { auth, children, ...rest } = props;
  const { isAuthenticated } = useAuth();

  return <Route {...rest} render={() => (!isAuthenticated ? children : <Redirect to={PATHS.HOME} />)} />;
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(memo(NoAuthRouters));
