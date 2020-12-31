import React, { useContext, useEffect, useState } from 'react';
import addIconSVG from '../../../../assets/icons/add-icon.svg';
import { GlobalContext } from '../../../context/context';
import { MODALS } from '../../molecules/modals/modals';

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

  const context = useContext(GlobalContext);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        context.setModal(MODALS[`ADD_${type}`]);
      }}
      className={`element dark ${type.toLowerCase()}`}
    >
      <span>Dodaj {getCopy(type)}</span>
      <span>
        <img src={addIconSVG} className="icon" />
      </span>
    </div>
  );
}
