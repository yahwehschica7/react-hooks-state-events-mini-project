import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")
  // solution code which passes tests

  function handleSubmit (e) {
    e.preventDefault()
    onTaskFormSubmit( {text, category} )
    setText("")
    setCategory("Code")
  }


  // My code that didn't pass tests:
  // const renderOptions = () => {
  //   return categories.map(category => {
  //     return <option key={category}>{category}</option>
  //   })
  // }

  // const handleInput = (event) => {
  //   if (event.target.name === "text") {
  //    setInputText(event.target.value)
  // } else {
  //    setInputCategory(event.target.value)
  // }}

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
        type="text"  
        value={text}
        onChange={(e) => setText(e.target.value)}  
        />
      </label>
      <label>
        Category
        <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)} 
        >
          {categories.map((category) => (
          <option key={category}>
            {category}
          </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
