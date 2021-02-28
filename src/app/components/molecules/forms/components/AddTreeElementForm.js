import React from 'react';
import Input from '../../../atoms/Input';

export default function AddTreeElementForm({ type, register, handleSubmit, errors, onSubmit }) {
  let name = type.split('_')[1].toLowerCase();

  return (
    <div className="form secondary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name={name} register={register} placeholder={'Wpisz wartość...'} label="Nazwa:" errors={errors} />
        <button className="btn btn-orange" type="submit">
          Potwierdź
        </button>
      </form>
    </div>
  );
}
