import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTasks }) {
  const tasksArray = tasks.map((tasks) => {
    return <Task 
      key={tasks.text} 
      text={tasks.text} 
      category={tasks.text}
      onDeleteTask={deleteTasks}
      />
      })


  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
