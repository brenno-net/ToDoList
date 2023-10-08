import React, { useEffect, useState } from 'react';
import ToDo from '../src/components/ToDo';
import { getAllToDo, addToDo } from './utils/HandleApi';

function App() {

  const[toDo,setToDo] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  return (
    <div className="App">

      <div className="container">

        <h1>ToDoApp</h1>

        <div className="top">

          <input type="text" 
          placeholder="Adicionar Tarefa" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          />

          <div className="add" onClick={() => addToDo(text, setText, setToDo)}>Adicionar</div>

        </div>

        <div className="list">

          {toDo.map((item) => <ToDo key={item._id} text={item.text}/>)}
          

        </div>

      </div>

    </div>

  );

}

export default App;
