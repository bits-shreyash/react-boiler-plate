import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import moment from "moment"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.authentication.auth?.expiration && moment(state.authentication.auth.expiration).isAfter(moment()))
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      isLoggedIn ?
        <Component {...props} />
        : <Redirect to="/" />
    )} />
  );
};

export default PrivateRoute;