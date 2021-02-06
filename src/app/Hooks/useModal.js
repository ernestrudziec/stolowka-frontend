import React, { useState } from 'react';

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState('');
  const [itemID, setItemID] = useState(null);
  const [updateFunction, setUpdateFunction] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setModal = (type, id, updateFunction) => {
    setCurrentModal(type);
    setIsModalOpen(true);

    if (updateFunction) {
      setUpdateFunction({ updateFunction });
    }

    if (id) {
      setItemID(id);
    }
  };

  return [isModalOpen, currentModal, closeModal, setModal, itemID, updateFunction];
}
