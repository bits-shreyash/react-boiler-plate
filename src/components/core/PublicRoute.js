import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn = true;
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (
      isLoggedIn && restricted ?
        <Redirect to="/posts" />
        : <Component {...props} />
    )} />
  );
};

export default PublicRoute;