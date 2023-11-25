import React from "react";
import './TaskItem.css';

function TaskItem(props) {
    return (
      <li className='TaskItem'>
        <p className={`TaskItem-p ${props.completed && 'TaskItem-p-completed'}`}>
          {props.text}</p>
        <button onClick={props.completar}>Completar</button>
        <button onClick={props.borrar}>Borrar</button>
      </li>
    );
};

export default TaskItem;