import React, { useEffect } from 'react';
import Logo from '../components/atoms/Logo';
import { ReactComponent as PersonIcon } from '../../assets/GuestView/icon.svg';
import { ReactComponent as OrangeShape } from '../../assets/GuestView/orange-shape.svg';
import OrangeBackground from '../../assets/GuestView/bg-orange.jpeg';
import { useAsync } from '../Hooks/useAsync.js';
import { ACTIONS } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import { FORMS } from '../components/molecules/forms/forms';
import Form from '../components/molecules/forms/Form';
export default function GuestView() {
  const [login, loginStatus, loginError, loginData] = useAsync(ACTIONS.LOGIN_USER);

  const history = useHistory();

  useEffect(() => {
    if (loginStatus === 'success') {
      sessionStorage.setItem('accessToken', loginData.access);
      sessionStorage.setItem('refreshToken', loginData.refresh);
      console.log(loginData);
      history.push('/pulpit');
    }
  }, [loginStatus]);

  useEffect(() => {
    console.log(loginError);
  }, [loginError]);

  return (
    <div className="guest-view">
      <img className="bg-orange" src={OrangeBackground} alt="bg-orange" />
      <div className="container">
        <div className="dark-box">
          <Logo />
          <div className="wrapper-main">
            <div className="wrapper-top">
              <PersonIcon className="icon" />
              <p className="f-white bold">Logowanie do systemu</p>
            </div>
            <Form type={FORMS.LOGIN_USER} request={login} requestStatus={loginStatus} requestError={loginError} />
          </div>
        </div>
      </div>
    </div>
  );
}
