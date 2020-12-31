import React, { useEffect, useState } from 'react';
import ModalInner from './ModalInner';
import closeIconSVG from '../../../assets/icons/close-icon.svg';
import ReactModal from 'react-modal';

export default function Modal({ isModalOpen, currentModal, closeModal }) {
  ReactModal.setAppElement('#root');

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '10px';
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = '0px';
      }, 200);
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
      closeTimeoutMS={500}
    >
      <button className="close-btn" onClick={closeModal}>
        <img src={closeIconSVG} alt="close" />
      </button>
      <ModalInner currentModal={currentModal} />
    </ReactModal>
  );
}
