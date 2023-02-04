import React from 'react'
import './Input.css'

export function Input() {
    return(
    <div  className='newtask'>
        <input 
             className="wrapper" 
            type="text" 
            name="tarefas" 
            id="tarefas"
            placeholder='Adicione uma nova tarefa'/>
    </div>
    )
}

