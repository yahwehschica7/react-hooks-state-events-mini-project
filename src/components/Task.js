import React from "react";

function Task({text, category, onDeleteTask }) {
  function deleteTasks() {
    onDeleteTask(text)
  }


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
        className="delete" 
        onClick={deleteTasks}>X</button>
    </div>
  );
}

export default Task;
