import React, { useEffect, useState } from 'react';
import ModalInner from './ModalInner';
import { default as CloseIconSVG } from '../../../assets/icons/close-icon.svg';
import ReactModal from 'react-modal';
import { isMobile } from 'react-device-detect';

import useWindowSize from '../../Hooks/useWindowSize';
import { updateLocale } from 'moment';

export default function Modal({ isModalOpen, currentModal, closeModal, itemID, updateFunction }) {
  ReactModal.setAppElement('#root');

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      if (!isMobile) {
        document.body.style.paddingRight = '10px';
      }
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = '0px';
      }, 300);
    }
  }, [isModalOpen]);

  return (
    <ReactModal
      contentLabel="Modal"
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={{
        base: 'modal',
        afterOpen: 'modal_after-open',
        beforeClose: 'modal_before-close'
      }}
      overlayClassName={{
        base: 'overlay',
        afterOpen: 'overlay_after-open',
        beforeClose: 'overlay_before-close'
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={300}
    >
      <button className="close-btn" onClick={closeModal}>
        <img src={CloseIconSVG} />
      </button>
      <ModalInner currentModal={currentModal} itemID={itemID} updateFunction={updateFunction} />
    </ReactModal>
  );
}
