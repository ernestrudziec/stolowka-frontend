import React, { useState } from 'react';
import CALENDAR_ICON from '../../../assets/NavigationBar/calendar.svg';
import DB_ICON from '../../../assets/NavigationBar/db.svg';
import HOME_ICON from '../../../assets/NavigationBar/home.svg';

const NavigationBar = ({ activeView, setActiveView }) => {
  return (
    <nav className="navigation-bar">
      <div className="nav-wrapper">
        <div className={`active-item active-${activeView}`}></div>
        <div onClick={() => setActiveView(1)} className={`item ${activeView == 1 ? 'active' : ''}`}>
          <img src={CALENDAR_ICON} />
          KALENDARZ
        </div>
        <div onClick={() => setActiveView(2)} className={`item ${activeView == 2 ? 'active' : ''}`}>
          <img src={HOME_ICON} />
          PULPIT
        </div>
        <div onClick={() => setActiveView(3)} className={`item ${activeView == 3 ? 'active' : ''}`}>
          <img src={DB_ICON} />
          DANE
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
