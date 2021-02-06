import React, { useContext, useEffect, useState } from 'react';
import expandIconSVG from '../../../../assets/icons/expand-icon.svg';
import expandDoubleIconSVG from '../../../../assets/icons/expand-double-icon.svg';
import removeIconSVG from '../../../../assets/icons/remove-icon.svg';
import infoIconSVG from '../../../../assets/icons/info-icon.svg';
import { GlobalContext, TreeContext } from '../../../context/context';
import { MODALS } from '../../molecules/modals/modals';
import Tree from '../../organisms/Tree';
import { updateLocale } from 'moment';

export default function TreeElementBar({ name, type, onClick, isOpened, itemID }) {
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

  useEffect(() => {
    // console.log(treeContext);
  }, []);

  return (
    <div onClick={onClick} className={`element ${type.toLowerCase()}`}>
      <span className={`name ${type === 'GROUP' ? 'group' : ''}`}>{name}</span>
      <span className={`icon-expand ${type === 'GROUP' ? 'group-icon' : ''}`}>
        <img
          src={type === 'CITY' ? expandDoubleIconSVG : type === 'GROUP' ? infoIconSVG : expandIconSVG}
          className={`icon  ${isOpened && type !== 'GROUP' ? 'active' : ''}`}
        />
      </span>

      <img
        src={removeIconSVG}
        onClick={(e) => {
          e.stopPropagation();
          context.setModal(MODALS[`DELETE_${type}`], itemID, treeContext.updateTree);
        }}
        className="icon remove"
      />
    </div>
  );
}
