import React, { useEffect, useState } from 'react';
import ToDo from '../src/components/ToDo';
import { getAllToDo, addToDo, updateToDo, deleteToDo  } from './utils/HandleApi';


function App() {

  const [toDo,setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  


   

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

const updateMode  = (_id, text) => {
  setIsUpdating(true)
  setText(text)
  setToDoId(_id)
}

  return (
    <div className="App">

      <div className="container">

        <h1>Nome Do App</h1>

        <div className="top">

          <input type="text"
          placeholder="Adicionar Tarefa" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={46}
          />

          <div 
          className="add" 
          onClick={ isUpdating ? 
            () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) 
          : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Adicionar"}

          </div>

        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, setToDo)}/>)}
          

        </div>

      </div>

    </div>

  );

}

export default App;
