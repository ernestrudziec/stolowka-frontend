import React from 'react';
import HAMBURGER_ICON from '../../../assets/icons/hamburger.svg';

export default function Hamburger({ toggleHeader, isOpen }) {
  return (
    <button onClick={toggleHeader} className="hamburger-wrapper">
      <img src={HAMBURGER_ICON} alt="hamburger" />
    </button>
  );
}
