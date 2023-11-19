import React from 'react'
import { useState, useEffect } from 'react'

import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'

const ToDo = ({ text, date, updateMode, deleteToDo, toDoId }) => {
  const [isChecked, setIsChecked] = useState(localStorage.getItem(`isChecked-${toDoId}`) === 'true')

  useEffect(() => {
    localStorage.setItem(`isChecked-${toDoId}`, isChecked)
  }, [isChecked, toDoId])

  const handleCheck = () => {
    setIsChecked(!isChecked)
    localStorage.setItem(`isChecked-${toDoId}`, (!isChecked).toString())
  }

  const textDecorationStyle = {
    textDecoration: isChecked ? 'line-through' : 'none',
  }

  // Função para formatar a data no formato desejado (exemplo: DD/MM/YYYY)
  const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate)
    return dateObj.toLocaleDateString('pt-BR') // Formato brasileiro de data (DD/MM/YYYY)
  }

  return (
    <section class="section">
      <div className={`todo ${isChecked ? 'completed' : ''}`}>
        <div className="text" style={textDecorationStyle}>
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
    </section>
  )
}

export default ToDo
