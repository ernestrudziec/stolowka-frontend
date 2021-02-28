import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ACTIONS } from '../../../actions/actions';
import Input from '../../../components/atoms/Input';
import { MODALS } from '../../../components/molecules/modals/modals';
import { useAsync } from '../../../Hooks/useAsync';
import AddTreeElementForm from './components/AddTreeElementForm';
import LoginForm from './components/LoginForm';
import { FORMS } from './forms';

export default function Form({ type, itemID, request, requestStatus, requestError }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const [data, setData] = useState(null);

  const onSubmit = (data) => {
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
      case FORMS.LOGIN_USER:
        request({
          username: data.username,
          password: data.password
        });
    }
  };

  const FormComponent = () => {
    switch (type) {
      case MODALS.ADD_CITY:
      case MODALS.ADD_UNIT:
      case MODALS.ADD_GROUP:
        return (
          <AddTreeElementForm
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            type={type}
            register={register}
            errors={errors}
          />
        );
        break;
      case FORMS.LOGIN_USER:
        return (
          <LoginForm
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            type={type}
            register={register}
            errors={errors}
            requestError={requestError}
            requestStatus={requestStatus}
          />
        );
      default:
        return null;
    }
  };

  return <FormComponent />;
}
