import React from "react";
import "./TaskItem.css";

function TaskItem(props) {
    return (
        <li className="TaskItem">
            <p className={`TaskItem-p ${props.completed && "TaskItem-p-completed"}`}>{props.text}</p>
            <button className="button-task button-task-completed" onClick={props.completar}>
                Completar
            </button>
            <button className="button-task button-task-delete" onClick={props.borrar}>
                Borrar
            </button>
        </li>
    );
}

export default TaskItem;
