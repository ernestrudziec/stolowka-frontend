import { useHistory } from 'react-router';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/context';

export default function logout(history) {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');
  history.push('/');
  if (sessionStorage.getItem('accessToken')) {
    window.location.reload();
  }
}
