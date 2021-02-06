import React from 'react';
import PERSON_ICON from '../../../assets/AdminView/Desktop/person.svg';
import LIST_ICON from '../../../assets/AdminView/Desktop/list.svg';
import WARNING_ICON from '../../../assets/AdminView/Desktop/warning.svg';

export default function AdminDesktopView() {
  return (
    <div className="admin-desktop-view">
      <div className="container">
        <div className="item dark">
          WSZYSTKICH <strong>osób</strong>
          <span className="data">231</span>
        </div>
        <div className="item">
          WYGENERUJ <strong>HASŁO</strong>
        </div>
        <div className="item">
          <img src={LIST_ICON} />
          EDYTUJ <strong>JADŁOSPIS I DIETY</strong>
        </div>
        <div className="item dark">
          <img src={PERSON_ICON} />
          DODAJ <strong>UŻYTKOWNIKA</strong>
        </div>
        <div className="item dark">
          <strong>STAWKA</strong> ZA DZIEŃ
          <span className="data">7 zł</span>
        </div>
        <div className="item">
          <img src={WARNING_ICON} />
          ZOBACZ <strong>UWAGI</strong>
        </div>
      </div>
    </div>
  );
}
