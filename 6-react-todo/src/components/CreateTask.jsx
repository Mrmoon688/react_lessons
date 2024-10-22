import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  //FIXME: CreateTask component useState(); ONLY FOR CREATE TASK COMPONENT
  const [job, setJob] = useState("");
  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };
    addTask(newTask);
    setJob("");
  };

  return (
    <div className="mb-3 flex shadow-md">
      <input
        type="text"
        className="border-2  p-2 flex-grow rounded-l-lg border-slate-500"
        value={job}
        onChange={handleOnChange}
        placeholder="Enter your new task"
      />
      <button
        onClick={handleAddTaskBtn}
        className="border-2 rounded-r-lg border-slate-500 px-3 py-2 bg-slate-500 text-white"
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
