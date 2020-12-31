import React, { useState } from 'react';

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setModal = (type) => {
    setCurrentModal(type);
    setIsModalOpen(true);
  };

  return [isModalOpen, currentModal, closeModal, setModal];
}
