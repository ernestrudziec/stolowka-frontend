import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ACTIONS } from '../actions/actions.js';
import logout from '../helpers/logout';

export const useAsync = (action, itemID) => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  let responseStatus = 400;

  const ENDPOINT = () => {
    if (action.url.includes(':id')) {
      return action.url.replace(':id', itemID);
    } else {
      return action.url;
    }
  };

  const history = useHistory();

  const execute = async (payload) => {
    setStatus('pending');

    let headers = {
      'Content-Type': 'application/json',
      Authorization: action.auth ? 'Bearer ' + sessionStorage.getItem('accessToken') : null
    };

    if (action.method === 'DELETE') {
      headers = {
        Authorization: action.auth ? 'Bearer ' + sessionStorage.getItem('accessToken') : null
      };
    }

    fetch(`${process.env.REACT_APP_API_URL + ENDPOINT()}`, {
      method: action.method,
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then((res) => {
        responseStatus = res.status;
        return res.json();
      })
      .then((res) => {
        if (res?.code === 'token_not_valid' && action.name !== 'REFRESH_TOKEN') {
          fetch(`${process.env.REACT_APP_API_URL + ACTIONS.REFRESH_TOKEN.url}`, {
            method: ACTIONS.REFRESH_TOKEN.method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh: sessionStorage.getItem('refreshToken') })
          })
            .then((res) => {
              responseStatus = res.status;
              return res.json();
            })
            .then((res) => {
              if (res.access) {
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
          if (responseStatus == 200) {
            setData(res);
            setStatus('success');
          } else if (res.detail) {
            setError(res.detail);
            setStatus('error');
          } else {
            setError('Ups! Coś poszło nie tak. Wystąpił nieznany błąd.');
            setStatus('error');
          }
        }
      })
      .catch((error) => {
        setError(error);
        setStatus('error');
      });
  };

  return [execute, status, error, data];
};
