import React, { useEffect } from 'react';
import Logo from '../components/atoms/Logo';
import { ReactComponent as PersonIcon } from '../../assets/GuestView/icon.svg';
import { ReactComponent as OrangeShape } from '../../assets/GuestView/orange-shape.svg';
import OrangeBackground from '../../assets/GuestView/bg-orange.jpeg';
import { useAsync } from '../Hooks/useAsync.js';
import { ACTIONS } from '../actions/actions';
import { useHistory } from 'react-router-dom';

export default function GuestView() {
  const [login, loginStatus, loginError, loginData] = useAsync(ACTIONS.LOGIN_USER);

  const history = useHistory();

  useEffect(() => {
    if (loginStatus === 'success') {
      sessionStorage.setItem('accessToken', loginData.access);
      sessionStorage.setItem('refreshToken', loginData.refresh);

      history.push('/pulpit');
    }
  }, [loginStatus]);

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
            <div className="form-wrapper">
              <form>
                <div className="input-wrapper">
                  <label className="bold">NAZWA UŻYTKOWNIKA:</label>
                  <input className="primary" type="text" />
                </div>
                <div className="input-wrapper">
                  <label className="bold">HASŁO:</label>
                  <input className="primary" type="password" />
                </div>
                <button
                  className="btn btn-orange"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    login({
                      username: 'admin',
                      password: 'haselkomaselko'
                    });
                  }}
                >
                  ZALOGUJ SIĘ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
