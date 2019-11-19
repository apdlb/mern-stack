import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import useAuth from '../hooks/useAuth';
import PATHS from '../utils/paths';

interface Props extends RouteProps {
  auth: any;
}

const AuthRouters: React.FC<Props> = props => {
  const { auth, children, ...rest } = props;
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : (
          <Redirect to={PATHS.LOGIN} />
        )
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(memo(AuthRouters));
