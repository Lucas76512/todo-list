import React from 'react';
import './Button.css'
import plus from '../../assets/plus.svg'

interface ButtonProps {
   label: string;
}

export function Button ({label }:ButtonProps) {
   return(
    <div  className="newtask"> 
        <button className="button">{label}
             <p className='criar'>Criar</p> 
           <img src={plus} alt="plus" />
        </button>
    </div>
   )
}