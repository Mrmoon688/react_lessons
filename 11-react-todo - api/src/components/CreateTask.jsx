import React, { useState } from "react";
import { ripples } from "ldrs";
const CreateTask = ({ addTask, sending }) => {
  //FIXME: CreateTask component useState(); ONLY FOR CREATE TASK COMPONENT
  const [job, setJob] = useState("");
  const handleOnChange = (event) => {
    setJob(event.target.value);
  };
  ripples.register();
  const handleAddTaskBtn = () => {
    if (job.trim()) {
      const newTask = {
        task: job,
        isDone: false,
      };
      addTask(newTask);
      setJob("");
    } else {
      alert("Please Enter Task.");
    }
  };

  return (
    <div className="mb-3 flex shadow-md">
      <input
        type="text"
        className="disabled:opacity-50 border-2  p-2 flex-grow rounded-l-lg border-slate-500"
        value={job}
        onChange={handleOnChange}
        placeholder="Enter your new task"
        disabled={sending}
      />
      <button
        onClick={handleAddTaskBtn}
        className="disabled:opacity-50 border-2 rounded-r-lg border-slate-500 px-3 py-3 bg-slate-500 text-white"
        disabled={sending}
      >
        {sending ? (
          <l-ripples size="20" speed="2" color="white"></l-ripples> 
        ) : (
          "Add Task"
        )}
      </button>
    </div>
  );
};

export default CreateTask;
