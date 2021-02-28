import React from 'react';
import Input from '../../../atoms/Input';
import Error from '../../../atoms/Error';
import { Switch } from 'react-router';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function LoginForm({ type, register, handleSubmit, errors, onSubmit, requestStatus, requestError }) {
  return (
    <div className="form primary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name={'username'} register={register} placeholder={'Wpisz login...'} label="Login:" errors={errors} />
        <Input name={'password'} register={register} placeholder={'Wpisz hasło'} label="Hasło:" errors={errors} />
        <CSSTransition in={requestStatus === 'error'} timeout={200} classNames={'fade'}>
          <Error isError={requestStatus === 'error'} text={requestError} />
        </CSSTransition>
        <button className="btn btn-orange" type="submit">
          Zaloguj się
        </button>
      </form>
    </div>
  );
}
