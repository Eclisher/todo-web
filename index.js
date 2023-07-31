import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleDeleteTask = (index) => {
    const updatedTasksList = tasksList.filter((_, i) => i !== index);
    setTasksList(updatedTasksList);
  };

  const handleUpdateTask = (index, updatedTask) => {
    const updatedTasksList = [...tasksList];
    updatedTasksList[index] = updatedTask;
    setTasksList(updatedTasksList);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasksList([...tasksList, task]);
      setTask("");
    }
  };

  return (
    <div className="contenue">
        <h2 className="titre">Todo List</h2>
        <div className="input">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Enter your 'TODO'"
            className=""
          />
          <button
            onClick={handleAddTask}
            className="ajout"
          >
            Add
          </button>
        </div>
        <ul>
          {tasksList.map((task, index) => (
            <li key={index} className="list_of_todo">
              <span className="">{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="delete_button"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  const updatedTask = prompt("Enter updated task:", task);
                  if (updatedTask !== null) {
                    handleUpdateTask(index, updatedTask);
                  }
                }}
                className="update_button"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
}
