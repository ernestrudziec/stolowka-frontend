import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ACTIONS } from '../actions/actions';
import Input from '../components/atoms/Input';
import { useAsync } from './useAsync';

export default function useFormCustom() {
  const { register, handleSubmit, watch, errors } = useForm();

  let requestData = {
    name: '',
    city: ''
  };

  const [request, requestStatus, requestError, responseData] = useAsync(ACTIONS.ADD_CITY, requestData);

  const [data, setData] = useState(null);

  const onSubmit = (data) => {
    console.log(data);

    request({
      name: 'Miejscowość',
      city: data.city
    });
  };

  const FormComponent = () => {
    return (
      <div className="form secondary">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="city" register={register} placeholder={'Wpisz wartość...'} label="Nazwa:" errors={errors} />
          <button className="btn btn-orange" type="submit">
            Potwierdź
          </button>
        </form>
      </div>
    );
  };

  return [FormComponent, requestStatus, data];
}
