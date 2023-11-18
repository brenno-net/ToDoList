import React, { useEffect, useState } from "react";
import ToDo from "../src/components/ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/HandleApi";
import Pomodoro from "./components/Pomodoro";
import { FaQuestion, FaBookOpen, FaPlus, FaRegArrowAltCircleUp } from 'react-icons/fa';
import Modal from './Modal';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("todo");

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

  const addOrUpdateToDo = () => {
    if (isUpdating) {
      updateToDo(toDoId, text, setToDo, setText, setIsUpdating);
    } else {
      addToDo(text, setText, setToDo);
    }
  };

  return (
    <div className="App">
      {/* Barra de navegação */}
      <div class="header">
        <div class="header__logo">
          <h1>Uni-List <FaBookOpen/></h1>
          

        </div>
        <div className="navbar" >

            <button className={currentPage === "todo" ? "button active" : "button"}
            onClick={() => setCurrentPage("todo")}>ToDo</button>
            <button className={currentPage === "pomodoro" ? "button active" : "button"}
            onClick={() => setCurrentPage("pomodoro")}>Pomodoro</button>
            
        </div>
        <div className="top" >
            <input
              type="text"
              placeholder="Digite sua tarefa aqui..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={46}
            />
            <div className="add" onClick={addOrUpdateToDo}>
              {isUpdating ? <FaRegArrowAltCircleUp/> : <FaPlus/>}
            </div>
          </div>
      </div>

      <div className="container">
      <div class="fab-container">
  <button className="open-button" onClick={handleOpenModal}>
    <FaQuestion />
        </button>
</div>
      {/* Restante do seu código */}

      {/* Renderização condicional das páginas com base na currentPage */}
      {currentPage === "todo" && (
        <div>
          

          <div className="mandatory">
            {toDo.map((item) => (
              <ToDo
                key={item._id}
                date={item.date}
                toDoId={item._id}
                text={item.text}
                isChecked={item.isChecked}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))}
          </div>
        </div>
      )}

      {currentPage === "pomodoro" && (
        <div className="pomodoro-container">
          <div className="pomodoro-box">
            <Pomodoro />

            
          </div>
          <div className="pomodoro-text-box">
            <div>
            O Método Pomodoro é uma técnica de produtividade baseada em intervalos de trabalho curtos, 
            geralmente de 25 minutos, seguidos por breves pausas de 5 minutos. Ajuda a manter o foco, 
            aumentar a eficiência e reduzir a procrastinação.
            </div>

          </div>
        </div>
      )}

<Modal show={showModal} handleClose={handleCloseModal}>
        <p>Sua mensagem aqui!</p>
      </Modal>
    </div>
    </div>
  );
}

export default App;
