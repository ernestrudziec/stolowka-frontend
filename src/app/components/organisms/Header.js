import React from 'react';
import Logo from '../atoms/Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <Logo dark />
      </div>
      <div className="info-container">
        <h2>Panel administratora</h2>
        <p>Zalogowany jako: </p>
        <p>
          <strong>GMINA_MECINKA</strong>
        </p>
      </div>
    </header>
  );
};

export default Header;
