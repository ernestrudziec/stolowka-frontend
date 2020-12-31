import { Switch, Route } from 'react-router-dom';
import useAuth from './app/Hooks/useAuth';
import PrivateRoute from './app/Routes/PrivateRoute';
import GuestRoute from './app/Routes/GuestRoute';
import DesktopView from './app/views/DesktopView';
import GuestView from './app/views/GuestView';
import { createContext, useEffect } from 'react';
import { GlobalContext } from './app/context/context';
import useModal from './app/Hooks/useModal';
import React, { useState } from 'react';
import Modal from './app/components/organisms/Modal';

export default function Root() {
  const [isModalOpen, currentModal, closeModal, setModal] = useModal();

  return (
    <>
      <GlobalContext.Provider value={{ closeModal, setModal, isModalOpen, currentModal }}>
        <Switch>
          <GuestRoute path="/" exact render={(props) => <GuestView />} />
          <PrivateRoute path="/pulpit" exact render={(props) => <DesktopView />} />
        </Switch>
        <Modal currentModal={currentModal} isModalOpen={isModalOpen} closeModal={closeModal} />
      </GlobalContext.Provider>
    </>
  );
}
