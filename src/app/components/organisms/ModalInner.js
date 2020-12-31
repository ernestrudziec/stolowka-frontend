import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/context';
import ManageTreeElementModal from '../molecules/modals/ManageTreeElementModal';
import { MODALS } from '../molecules/modals/modals';

export default function ModalInner({ currentModal }) {
  let inner = <ManageTreeElementModal />;

  useEffect(() => {
    console.log(currentModal);
  }, []);

  switch (currentModal) {
    case MODALS.ADD_CITY:
    case MODALS.ADD_GROUP:
    case MODALS.ADD_UNIT:
      inner = <ManageTreeElementModal type={currentModal} />;
      break;
    default:
      inner = <h2 className="orange">404 - modal nie istnieje</h2>;
      break;
  }
  return <div className="modal-inner">{inner}</div>;
}
