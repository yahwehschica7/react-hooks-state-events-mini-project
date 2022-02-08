import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [inputText, setInputText] = useState("")
  const [inputCategory, setInputCategory] = useState("Code")

  const renderOptions = () => {
    return categories.map(category => {
      return <option key={category}>{category}</option>
    })
  }

  const handleInput = (event) => {
    if (event.target.name === "text") {
     setInputText(event.target.value)
  } else {
     setInputCategory(event.target.value)
  }}

  return (
    <form onSubmit={(e) => onTaskFormSubmit(e, inputText, inputCategory)} className="new-task-form">
      <label>
        Details
        <input onChange={handleInput} type="text" name="text" value={inputText} />
      </label>
      <label>
        Category
        <select onChange={handleInput} name="category" value={inputCategory}>
          {renderOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
