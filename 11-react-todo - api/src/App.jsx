import React, { useEffect, useState } from "react";

import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import SkeletonLoader from "./components/skeletonLoader";

const App = () => {
  //FIXME: app useState();
  const [tasks, setTask] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const addTask = async (newTask) => {
    // console.log(newTask);
    setSending(true);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const data = await res.json();

    // setTask([...tasks, data]);
    fetchTask();
    setSending(false);
  };

  const removeTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await res.text();
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = async (id, currentState) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !currentState }),
    });
    const data = await res.json();
    console.log(data);
    setTask();
    tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el));
  };
  const fetchTask = async () => {
    setTaskLoading(true);
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTask(data);
    setTaskLoading(false);
  };

  useEffect(function () {
    // console.log("hello");
    fetchTask();
  }, []);
  return (
    <div className="p-10">
      <Heading />
      <CreateTask sending={sending} addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
      {taskLoading && <SkeletonLoader />}
    </div>
  );
};

export default App;
