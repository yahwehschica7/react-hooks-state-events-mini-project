import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskNewState, setTaskNewState] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  // Correct code to pass tests 

  function handleAddTask(newTask) {
    setTaskNewState([...taskNewState, newTask])
  }

  function handleDeleteTask(deletedTaskText) {
      setTaskNewState(taskNewState.filter((task) => task.text !== deletedTaskText))
  }

  const visibleTasks = taskNewState.filter((task) => 
    selectedCategory === "All" || task.category === selectedCategory
  )

  // My code below that is failing tests: 
  // function deleteTask(text) {
  //   const newTaskArray = taskNewState.filter((task) => task.text !== text
  // )
  //   setTaskNewState(newTaskArray)
  // }

  // function handleSelectedCategory(newCategoryArray) {
  //   console.log("clicked category")
  //   setSelectedCategory(newCategoryArray)
  // }

  // const newCategoryArray = taskNewState.filter((task) => {
  //   // (task) => selectedCategory === "All" || task.category === category
  //   // )
  //   if (selectedCategory === "All") {
  //   return true
  // } else {
  //   return task.category === selectedCategory
  //   }
  // })

  // const onTaskFormSubmit = (event, text, category) => {
  //   event.preventDefault()
  //   setTaskNewState([...taskNewState, {text: text, category:category}])
  // }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        />
        <div className="tasks">
          <h5>Tasks</h5>
          <NewTaskForm 
            categories={CATEGORIES.filter(category => category !== "All")} 
            onTaskFormSubmit={handleAddTask}
          />
          <TaskList 
            tasks={visibleTasks}
            onDeleteTask={handleDeleteTask}
            />
       </div> 
    </div>
  );
}

export default App;
