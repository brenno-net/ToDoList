import React, { useEffect, useState } from "react";
import ToDo from "../src/components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi";
import Pomodoro from "./components/Pomodoro";
import { FaQuestion, FaBookOpen } from 'react-icons/fa';
import Modal from './Modal';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">

<div class="fab-container">
  <button className="open-button" onClick={handleOpenModal}>
    <FaQuestion />
        </button>
</div>

      <h1>Uni-List <FaBookOpen/></h1>
      <h4>O aplicativo foi projetado para simplificar sua rotina, auxiliando na criação, edição e exclusão de tarefas e metas diárias. Desfrute de uma experiência fácil e eficiente de gerenciamento de atividades diárias, tudo ao alcance das suas mãos.</h4>
      <div className="top">
        <input
          type="text"
          placeholder="Digite sua tarefa aqui..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={46}
        />
        
        <div
          className="add"
          onClick={
            isUpdating
              ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)
          }
        >
          {isUpdating ? "Update" : "Adicionar"}
        </div>

        
      </div>

      <div className="container">
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              toDoId={item._id}
              text={item.text}
              isChecked={item.isChecked}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
        <div className="pomodoro-box">
          <Pomodoro />
        </div>
      </div>

      {/* Componente Modal */}
      <Modal show={showModal} handleClose={handleCloseModal}>
        <p>Sua mensagem aqui!</p>
      </Modal>
    </div>
  );
}

export default App;