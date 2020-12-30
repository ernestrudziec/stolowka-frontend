import { useHistory } from 'react-router';

import React from 'react';

export default function logout(history) {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');
  history.push('/');
}
