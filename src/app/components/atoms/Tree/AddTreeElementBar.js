import React, { useEffect, useState } from 'react';
import addIconSVG from '../../../../assets/icons/add-icon.svg';

export default function AddTreeElementBar({ type }) {
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
    <div className={`element dark ${type.toLowerCase()}`}>
      <span>Dodaj {getCopy(type)}</span>
      <span>
        <img src={addIconSVG} className="icon" />
      </span>
    </div>
  );
}
