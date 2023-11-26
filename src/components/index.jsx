import React, { useState, useEffect } from "react";
import FormInt from "./FormInt/FromInt";
import TaskList from "./TaskList/TaskList";
import TaskItem from "./TaskItem/TaskItem";

const Components = () => {
    const [inputData, setInputData] = useState("");
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [message, setMessage] = useState(""); // Nuevo estado para el mensaje

    useEffect(() => {
        setMessage("useEffect se ha ejecutado"); // Establecer el mensaje
        localStorage.setItem("tasks", JSON.stringify(tasks));

        // Crear un temporizador para eliminar el mensaje después de 5 segundos
        const timer = setTimeout(() => {
            setMessage("");
        }, 3000);

        // Limpiar el temporizador cuando el componente se desmonte o antes de que se ejecute el próximo efecto
        return () => clearTimeout(timer);
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTask({
            completed: false,
            id: Date.now(),
            text: inputData,
        });
        setInputData("");
    };

    const handleChange = (e) => setInputData(e.target.value);

    const handleAddTask = (addTask) => {
        setTasks([...tasks, addTask]);
    };

    const borrarTask = (text) => {
      const openTasks = [...tasks];
      const taskIndex = openTasks.findIndex(
        (task) => task.text === text
      );
      openTasks.splice(taskIndex, 1);
      setTasks(openTasks);
  }

  const completarTask = (text) => {
      const openTasks = [...tasks];
      const taskIndex = openTasks.findIndex(
        (task) => task.text === text && task.completed == false
      );
      openTasks[taskIndex].completed = true;
      setTasks(openTasks);
  }

    return (
        <div className="App-container">
            <p className="title">Ingrese una Tarea</p>
            <p>{message}</p> {/* Mostrar el mensaje en la pantalla */}
            <FormInt handleSubmit={handleSubmit} handleChange={handleChange} inputData={inputData} />
            <TaskList>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        text={task.text}
                        completed={task.completed}
                        borrar={() => borrarTask(task.text)}
                        completar={() => completarTask(task.text)}
                    />
                ))}
            </TaskList>
        </div>
    );
};

export default Components;
