import React, { useState } from "react";
import { lineWobble } from "ldrs";

const CreateTask = ({ addTask, sending }) => {
  //FIXME: CreateTask component useState(); ONLY FOR CREATE TASK COMPONENT
  const [job, setJob] = useState("");
  lineWobble.register();
  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    const newTask = {
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
        className="border-2  p-2 flex-grow disabled:opacity-50 rounded-l-lg border-slate-500"
        value={job}
        onChange={handleOnChange}
        placeholder="Enter your new task"
        disabled={sending}
      />
      <button
        onClick={handleAddTaskBtn}
        className="border-2 rounded-r-lg disabled:opacity-50 border-slate-500 px-3 py-2 bg-slate-500 text-white"
        disabled={sending}
      >
        {sending ? ( // Default values shown
          <l-line-wobble
            size="47"
            stroke="5"
            bg-opacity="0.1"
            speed="1.75"
            color="#37AFE1"
          ></l-line-wobble>
        ) : (
          "Add Task"
        )}
      </button>
    </div>
  );
};

export default CreateTask;
