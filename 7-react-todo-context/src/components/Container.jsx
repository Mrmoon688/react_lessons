import React from "react";
import Heading from "./Heading";
import CreateTask from "./CreateTask";
import TaskList from "./Task";

const Container = () => {
  return (
    <div className="min-w-[1000px] min-h-[500px]">
      <Heading />
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default Container;
