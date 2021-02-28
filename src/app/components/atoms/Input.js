import React, { useEffect } from 'react';

const Error = ({ type }) => {
  let copy = 'Wartośc nieprawidłowa';

  switch (type) {
    case 'required':
      copy = 'Pole wymagane';
      break;
    default:
      copy = 'Wartość nieprawidłowa';
      break;
  }

  return <span className="error">{copy}</span>;
};

export default function Input({ type, name, label, placeholder, register, errors }) {
  return (
    <div className={`input-wrapper ${type}`}>
      <label>{label}</label>
      <input
        type={name === 'password' ? name : 'text'}
        name={name}
        placeholder={placeholder}
        ref={register({ required: true })}
      />
      {errors[name] ? <Error type={errors[name].type} /> : null}
    </div>
  );
}
