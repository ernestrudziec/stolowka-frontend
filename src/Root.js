import { Switch, Route, useLocation } from 'react-router-dom';
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
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Root() {
  const [isModalOpen, currentModal, closeModal, setModal, itemID, updateFunction] = useModal();
  const location = useLocation();

  return (
    <>
      <GlobalContext.Provider value={{ closeModal, setModal, isModalOpen, currentModal, itemID, updateFunction }}>
        <Switch>
          <GuestRoute path="/" exact render={(props) => <GuestView />} />
          <PrivateRoute path="/pulpit" exact render={(props) => <DesktopView />} />
        </Switch>
        <Modal
          currentModal={currentModal}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          itemID={itemID}
          updateFunction={updateFunction}
        />
      </GlobalContext.Provider>
    </>
  );
}
