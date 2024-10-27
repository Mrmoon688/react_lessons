import React, { useState } from "react";

import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  //FIXME: app useState(); 
  const [tasks, setTask] = useState([
    { id: 1, task: "Finish homework", isDone: false },
    { id: 2, task: "Grocery shopping", isDone: false },
    { id: 3, task: "Clean the garage", isDone: false },
    { id: 4, task: "Pay utility bills", isDone: false },
    { id: 5, task: "Call mom", isDone: false },
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
    </div>
  );
};

export default App;
