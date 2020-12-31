import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ACTIONS } from '../actions/actions.js';
import logout from '../helpers/logout';

export const useAsync = (action) => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const history = useHistory();

  const execute = async (payload) => {
    setStatus('pending');

    fetch(`${process.env.REACT_APP_API_URL + action.url}`, {
      method: action.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: action.auth ? 'Bearer ' + sessionStorage.getItem('accessToken') : null
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.code === 'token_not_valid' && action.name !== 'REFRESH_TOKEN') {
          fetch(`${process.env.REACT_APP_API_URL + ACTIONS.REFRESH_TOKEN.url}`, {
            method: ACTIONS.REFRESH_TOKEN.method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh: sessionStorage.getItem('refreshToken') })
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.access) {
                // console.log('ACCESS GET');
                sessionStorage.setItem('accessToken', res.access);
                execute(payload);
              } else {
                logout(history);
              }
            })
            .catch((err) => console.log(err));
        } else if (res?.code === 'token_not_valid' && action.name === 'REFRESH_TOKEN') {
          logout(history);
        } else {
          setData(res);
          setStatus('success');
        }
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  };

  return [execute, status, error, data];
};
