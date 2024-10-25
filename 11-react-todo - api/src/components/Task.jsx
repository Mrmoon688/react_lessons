import React from "react";

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  //todo;reuse job props from TaskList.jsx
  const handleRemoveTaskBtn = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      removeTask(id);
    }
  };
  const handleOnChange = () => {
    doneTask(id, isDone);
  };
  return (
    <div className="shadow border-2 rounded-md border-slate-500 px-3 py-2 mb-1 flex items-center  justify-between">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          className="size-4"
          checked={isDone}
          onChange={handleOnChange}
        />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <button
        onClick={handleRemoveTaskBtn}
        className=" bg-red-400 px-2 py-1 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
