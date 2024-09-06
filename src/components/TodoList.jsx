import { useState } from "react"

function TodoList() {

  const [tasks, setTask] = useState(["Breakfast", "Play", "Lunch", "Ligo"]);
  const [newTask, setNewTask] = useState("");

  const handleChangeTask = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if(newTask.trim() !== "") {
      setTask(t => [...t, newTask]);
      setNewTask("")
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  const moveTaskUp = (index) => {
    if(index > 0) {

      const updatedTasks = [...tasks];

     [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];

     setTask(updatedTasks)

    }
    
  };

  const moveTaskBelow = (index) => {
    if(index < tasks.length - 1) {

      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];

      console.log(tasks.length);
      console.log(index)
 
      setTask(updatedTasks)
 

    }
  };


  return(
  <div>
    <h1>My TodoList App</h1>
    <input value={newTask} onChange={handleChangeTask} type="text" id="" />
    <button onClick={addTask} id="add-task">Add Task</button>


    <ol>
    {tasks.map((task, index) => <li key={index}>
                                  <span>{task}</span> 
                                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                                    <button onClick={() => moveTaskUp(index)}>⬆️</button>
                                    <button onClick={() => moveTaskBelow(index)}>⬇️</button>
                                </li>)}
    </ol>

  </div>)
}

export default TodoList