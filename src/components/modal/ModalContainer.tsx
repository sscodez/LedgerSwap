'use client'

import React from 'react';
import Modal from './Modal';
import { useModal } from './ModalContext';

const ModalContainer: React.FC = () => {
  const { isOpen, closeModal, modalContent, modalTitle } = useModal();

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title={modalTitle}>
      {modalContent}
    </Modal>
  );
};

export default ModalContainer;
