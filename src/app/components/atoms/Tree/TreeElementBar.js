import React, { useEffect, useState } from 'react';
import expandIconSVG from '../../../../assets/icons/expand-icon.svg';
import expandDoubleIconSVG from '../../../../assets/icons/expand-double-icon.svg';
import removeIconSVG from '../../../../assets/icons/remove-icon.svg';
import infoIconSVG from '../../../../assets/icons/info-icon.svg';

export default function TreeElementBar({ name, type, onClick, isOpened }) {
  const getCopy = () => {
    switch (type) {
      case 'CITY':
        return 'miejscowość';
      case 'UNIT':
        return 'placówkę';
      case 'GROUP':
        return 'grupę';
    }
  };

  return (
    <div onClick={onClick} className={`element ${type.toLowerCase()}`}>
      <span className={`name ${type === 'GROUP' ? 'group' : ''}`}>{name}</span>
      <span className={`icon-expand ${type === 'GROUP' ? 'group-icon' : ''}`}>
        <img
          src={type === 'CITY' ? expandDoubleIconSVG : type === 'GROUP' ? infoIconSVG : expandIconSVG}
          className={`icon  ${isOpened && type !== 'GROUP' ? 'active' : ''}`}
        />
      </span>

      <img src={removeIconSVG} className="icon remove" />
    </div>
  );
}
