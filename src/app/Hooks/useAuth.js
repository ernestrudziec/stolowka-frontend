import React, { useEffect, useState } from 'react';
import { ACTIONS } from '../actions/actions';
import { useAsync } from './useAsync';
import { parseJWT } from '../helpers/parseJWT';
import moment from 'moment';
import { useHistory } from 'react-router';
import logout from '../helpers/logout';

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [authStatus, setAuthStatus] = useState('idle');

  const history = useHistory();

  const [refreshToken, refreshTokenStatus, refreshTokenError, refreshTokenData] = useAsync(ACTIONS.REFRESH_TOKEN, {
    refresh: sessionStorage.getItem('refreshToken')
  });

  useEffect(() => {
    if (refreshTokenStatus === 'success') {
      sessionStorage.setItem('accessToken', refreshTokenData.access);
      setAuthStatus('success');
      setIsAuth(true);
    }
  }, [refreshTokenStatus]);

  const execute = () => {
    setAuthStatus('pending');
    console.log('pending');

    if (sessionStorage.getItem('accessToken') && sessionStorage.getItem('accessToken') !== 'undefined') {
      const expirationDate = moment.unix(parseJWT(sessionStorage.getItem('accessToken')).exp);
      const currentTime = moment().add(5, 'seconds');

      console.log('time: ' + currentTime.format('HH:mm:ss') + ' - ' + 'exp: ' + expirationDate.format('HH:mm:ss'));

      if (moment(currentTime) < moment(expirationDate)) {
        setAuthStatus('success');
        setIsAuth(true);
        console.log('auth ok');
      } else {
        refreshToken();
        console.log('nope');
      }
    } else {
      setIsAuth(false);
      setAuthStatus('success');

      logout(history);
    }
  };

  return [execute, isAuth, authStatus];
}
