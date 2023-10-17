import React from 'react'
import { useState } from 'react'; // Importe 'useState


import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai';



const ToDo = ({text , updateMode, deleteToDo, checkToDo}) =>{
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    }
  
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