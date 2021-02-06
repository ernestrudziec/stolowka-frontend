import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ACTIONS } from '../actions/actions';
import Input from '../components/atoms/Input';
import { MODALS } from '../components/molecules/modals/modals';
import { useAsync } from './useAsync';

export default function useFormCustom(type, itemID) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [request, requestStatus, requestError, responseData] = useAsync(ACTIONS[type], itemID);
  const [data, setData] = useState(null);

  const onSubmit = (data) => {
    // console.log(data);
    // console.log(type);

    switch (type) {
      case MODALS.ADD_CITY:
        request({
          name: 'Miejscowość',
          city: data.city
        });
        break;
      case MODALS.ADD_UNIT:
        request({
          name: data.unit
        });
        break;
      case MODALS.ADD_GROUP:
        request({
          name: data.group
        });
        break;
    }
  };

  const AddTreeElementForm = ({ type }) => {
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
  };

  let form = <AddTreeElementForm type={type} />;

  const FormComponent = () => {
    return form;
  };

  return [FormComponent, requestStatus, data];
}
