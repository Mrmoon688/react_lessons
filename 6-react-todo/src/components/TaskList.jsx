import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask, doneTask }) => {
  return (
    <div className=" ">
      <h3 className="font-bold font-serif text-xl mb-3">
        Task List ({tasks.length},Done {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el) => (
        <Task
          doneTask={doneTask}
          removeTask={removeTask}
          job={el}
          key={el.id}
        /> //todo: job is props
      ))}
    </div>
  );
};

export default TaskList;
