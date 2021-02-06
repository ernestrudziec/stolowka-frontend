import React, { useContext, useEffect, useState } from 'react';
import addIconSVG from '../../../../assets/icons/add-icon.svg';
import { GlobalContext, TreeContext } from '../../../context/context';
import { MODALS } from '../../molecules/modals/modals';
import Tree from '../../organisms/Tree';

export default function AddTreeElementBar({ type, itemID }) {
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
  const treeContext = useContext(TreeContext);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        context.setModal(MODALS[`ADD_${type}`], itemID, treeContext.updateTree);
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
