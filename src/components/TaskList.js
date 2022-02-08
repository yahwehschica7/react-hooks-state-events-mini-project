import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTasks }) {
  const tasksArray = tasks.map((task) => {
    return <Task 
      key={task.text} 
      text={task.text} 
      category={task.text}
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
