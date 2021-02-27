import React, { useState, useEffect } from 'react';
import Hamburger from '../atoms/Hamburger';
import Logo from '../atoms/Logo';
import LOGOUT_ICON from '../../../assets/icons/logout.svg';
import CLOSE_ICON from '../../../assets/icons/close-icon.svg';
import { isMobile } from 'react-device-detect';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleHeader = () => {
    setIsOpened(true);
  };

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
      if (!isMobile) {
        document.body.style.paddingRight = '10px';
      }
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = '0px';
      }, 300);
    }
  }, [isOpened]);

  return (
    <>
      <div className={`overlay-sidenav ${isOpened ? '' : 'hidden'}`}></div>
      <div className={`sidenav ${isOpened ? '' : 'hide'}`}>
        <img className="close-btn" src={CLOSE_ICON} onClick={() => setIsOpened(false)} alt="close" />

        <button className="logout-button">
          Wyloguj się <img src={LOGOUT_ICON} alt="logout" />
        </button>
      </div>
      <header className="header">
        <div className="wrapper">
          <Logo dark />
          <Hamburger isOpen={isOpened} toggleHeader={toggleHeader} />
        </div>
        <div className="info-container">
          <h2>Panel administratora</h2>
          <p>Zalogowany jako: </p>
          <p>
            <strong>GMINA_MECINKA</strong>
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
