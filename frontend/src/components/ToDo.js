import React, { useState, useEffect } from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import ToDoModal from './ToDoModal';

const ToDo = ({ text, date, updateMode, deleteToDo, toDoId }) => {
  const [isChecked, setIsChecked] = useState(localStorage.getItem(`isChecked-${toDoId}`) === 'true');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(`isChecked-${toDoId}`, isChecked);
  }, [isChecked, toDoId]);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    localStorage.setItem(`isChecked-${toDoId}`, (!isChecked).toString());
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModalOnClick = () => {
    toggleModal();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const textDecorationStyle = {
    textDecoration: isChecked ? 'line-through' : 'none',
    cursor: 'pointer',
  };

  const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate);
    return dateObj.toLocaleDateString('pt-BR');
  };

  return (
    <section className="section">
      <div className={`todo ${isChecked ? 'completed' : ''}`}>
        <div className="text" style={textDecorationStyle} onClick={openModalOnClick}>
          {text}
        </div>
        <div className="date">{formatDate(date)}</div>
        <div className="icons">
          <BiEdit className="icon" onClick={updateMode} />
          <AiFillDelete className="icon" onClick={deleteToDo} />
          {isChecked ? (
            <AiFillCheckCircle className="icon" onClick={handleCheck} />
          ) : (
            <AiOutlineCheckCircle className="icon" onClick={handleCheck} />
          )}
        </div>
      </div>
      <ToDoModal show={showModal} onClose={closeModal} text={text} />
    </section>
  );
};

export default ToDo;
