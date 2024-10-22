import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
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
  return <TaskContext.Provider value={{tasks, addTask, removeTask, doneTask}}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
