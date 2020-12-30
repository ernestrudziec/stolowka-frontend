import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router';
import { Route } from 'react-router-dom';
import Preloader from '../components/atoms/Preloader';
import useAuth from '../Hooks/useAuth';

export default function PrivateRoute(props) {
  const [auth, isAuth, authStatus] = useAuth();

  useEffect(() => {
    auth();
  }, []);

  if (authStatus === 'success') {
    if (isAuth) {
      return <Route render={props.render} exact={props.exact} path={props.path} />;
    } else return <Redirect to="/" />;
  } else return <Preloader />;
}
