import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/context';
import useFormCustom from '../../../Hooks/useForm';

export default function ManageTreeElementModal({ type }) {
  const [Form, formStatus, formData] = useFormCustom();

  const context = useContext(GlobalContext);

  const getCopy = (type) => {
    switch (type) {
      case 'ADD_CITY':
        return 'miejscowość';
      case 'ADD_UNIT':
        return 'placówkę';
      case 'ADD_GROUP':
        return 'grupę';
    }
  };

  useEffect(() => {
    console.log(formStatus);
    if (formStatus === 'success') {
      console.log('close!');
      context.closeModal();
    }
  }, [formStatus]);

  return (
    <>
      <h2>
        <span className="f-orange">Dodaj</span>
        {' ' + getCopy(type)}
      </h2>
      <Form />
    </>
  );
}
