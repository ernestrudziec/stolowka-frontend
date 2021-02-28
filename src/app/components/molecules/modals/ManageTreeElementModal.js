import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext, TreeContext } from '../../../context/context';
import { useAsync } from '../../../Hooks/useAsync';
import { ACTIONS } from '../../../actions/actions';
import Form from '../../molecules/forms/Form';

export default function ManageTreeElementModal({ type, itemID }) {
  const [request, requestStatus, requestError, responseData] = useAsync(ACTIONS[type], itemID);
  const context = useContext(GlobalContext);

  const getCopy = (type) => {
    switch (type) {
      case 'ADD_CITY':
      case 'DELETE_CITY':
        return 'miejscowość';
      case 'ADD_UNIT':
      case 'DELETE_UNIT':
        return 'placówkę';
      case 'ADD_GROUP':
      case 'DELETE_GROUP':
        return 'grupę';
    }
  };

  useEffect(() => {
    if (requestStatus === 'success') {
      context.updateFunction.updateFunction();
      context.closeModal();
    }
  }, [requestStatus]);

  if (type.includes('ADD')) {
    //ADD ELEMENT OF THE TREE ------------------------------------------

    return (
      <>
        <h2>
          <span className="f-orange">Dodaj</span>
          {' ' + getCopy(type)}
        </h2>
        <Form request={request} type={type} itemID={itemID} />
      </>
    );
  } else {
    //DELETE ELEMENT OF THE TREE ----------------------------------------

    return (
      <>
        <h2>
          <span className="f-orange">Usuń</span>
          {' ' + getCopy(type)}
        </h2>
        <div className="buttons-container decide">
          <button onClick={() => request()} className="btn btn-orange">
            POTWIERDŹ
          </button>
          <button onClick={() => context.closeModal()} className="btn btn-orange empty">
            ANULUJ
          </button>
        </div>
      </>
    );
  }
}
