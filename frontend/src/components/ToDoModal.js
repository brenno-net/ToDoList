import React from 'react';
import './ToDoModal.css';
import {FaTimes} from 'react-icons/fa'

const Modal = ({ show, onClose, text }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">

        <p>{text}</p>
        <span className="close" onClick={onClose}>
        <FaTimes />
        </span>
      </div>
    </div>
  );
};

export default Modal;
