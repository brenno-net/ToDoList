import React from 'react';
import './Modal.css';
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';
import {FaPlus, FaRegArrowAltCircleUp, FaPlay, FaPause, FaHistory, FaMugHot} from 'react-icons/fa'

const Modal = ({ show, handleClose }) => {
  return (
    <div className={`modal ${show ? 'display-block' : 'display-none'}`}>
      <section className="modal-main">
        <p className="modal-message">
          <ul>
    <li>  <FaPlus/> para adicionar nova tarefa;</li>
    <li> <BiEdit/> Para editar o texto de sua tarefa;</li>
    <li><FaRegArrowAltCircleUp/> para salvar novamente sua tarefa;</li>
    <li><AiFillDelete/> Para deletar uma tarefa inserida;</li>
    <li><AiOutlineCheckCircle/> Para marcar e <AiFillCheckCircle/> para desmarcar sua tarefa como feita;</li>
    <li><FaPlay/> Para iniciar ou retomar o temporizador do tempo de estudo</li>
    <li><FaPause/> Para pausar o contador do tempo de estudo</li>
    <li><FaHistory/> Para resetar o temporizador para 25min</li>
    <li><FaMugHot/> Para iniciar o tempo de intervalo</li>
          </ul>
        </p>
        <button className="RoundButton" onClick={handleClose}>Fechar</button>
      </section>
    </div>
  );
};

export default Modal;
