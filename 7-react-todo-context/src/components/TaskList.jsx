import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../context/TaskContext";

const TaskList = () => {
  const { tasks,doneTask ,removeTask } = useContext(TaskContext);
  return (
    <div className=" ">
      <h3 className="font-bold font-serif text-xl mb-3">
        Task List ({tasks.length},Done {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el) => (
        <Task
          
          job={el}
          key={el.id}
        /> //todo: job is props
      ))}
    </div>
  );
};

export default TaskList;
