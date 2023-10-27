import React from 'react'
import { useState, useEffect } from 'react'; 


import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';



const ToDo = ({text , updateMode, deleteToDo, toDoId}) =>{
    const [isChecked, setIsChecked] = useState(
        localStorage.getItem(`isChecked-${text}`) === 'true'
      );

      useEffect(() => {
        localStorage.setItem(`isChecked-${text}`, isChecked);
      }, [isChecked, text]);

      const handleCheck = () => {
        setIsChecked(!isChecked);
        localStorage.setItem(`isChecked-${toDoId}`, (!isChecked).toString());
      };
      
  
    return (   
        <div className={`todo ${isChecked ? 'completed' : ''}`}>
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className= 'icon' onClick={deleteToDo} />
                {isChecked ? (
                    <AiFillCheckCircle className="icon" onClick={handleCheck} />
                    ) : (   
                    <AiOutlineCheckCircle className="icon" onClick={handleCheck} />
                )}

            </div>

        </div>
    )
}

export default ToDo;