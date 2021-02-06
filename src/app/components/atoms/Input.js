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

export default function Input({ name, label, placeholder, register, errors }) {
  useEffect(() => {
    // console.log(errors);
  }, [errors]);

  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input name={name} placeholder={placeholder} ref={register({ required: true })} />
      {errors[name] ? <Error type={errors[name].type} /> : null}
    </div>
  );
}
