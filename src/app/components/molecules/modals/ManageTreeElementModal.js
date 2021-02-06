import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext, TreeContext } from '../../../context/context';
import { useAsync } from '../../../Hooks/useAsync';
import useFormCustom from '../../../Hooks/useForm';
import { ACTIONS } from '../../../actions/actions';

export default function ManageTreeElementModal({ type, itemID }) {
  const [Form, formStatus, formData] = useFormCustom(type, itemID);

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
    if (formStatus === 'success') {
      // console.log('success');
      context.updateFunction.updateFunction();
      context.closeModal();
    }
  }, [formStatus]);

  useEffect(() => {
    if (requestStatus === 'success') {
      console.log('success');
      context.updateFunction.updateFunction();
      context.closeModal();
    }
  }, [requestStatus]);

  if (type.includes('ADD')) {
    return (
      <>
        <h2>
          <span className="f-orange">Dodaj</span>
          {' ' + getCopy(type)}
        </h2>
        <Form />
      </>
    );
  } else {
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
