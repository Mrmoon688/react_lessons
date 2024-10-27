// import React, { useState } from "react";

import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import useSWR, { useSWRConfig } from "swr";
import Task from "./components/Task";
import axios from "axios";
import SkeletonLoader from "./components/SkeletonLoader";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  const [sending, setSending] = useState(false);
  console.log(import.meta.env.VITE_BASE_URL);
  //FIXME: app useState();
  // const [tasks, setTask] = useState([]);
  //! server api data record
  // const { object} = useSWR("endpoint", fetcher); //object {data,error,isLoading}
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BASE_URL}/tasks`,
    fetcher
  );

  const { mutate } = useSWRConfig();

  const todoApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/tasks`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  //todo: addTask func
  const addTask = async (newTask) => {
    setSending(true);
    // await axios.post("http://localhost:5000/tasks", newTask, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    await todoApi.post("/", newTask);
    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`); //!revalidation
    setSending(false);
  };

  //todo: removeTask func
  const removeTask = async (id) => {
    await todoApi.delete(`/${id}`);
    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);
  };

  //todo: doneTask func
  const doneTask = async (id, currentState) => {
    await todoApi.patch(
      `/${id}`,
      {
        isDone: !currentState,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);
  };
  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} sending={sending} />
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <div className=" ">
            <h3 className="font-bold font-serif text-xl mb-3">
              Task List ({data.length},Done{" "}
              {data.filter((el) => el.isDone).length})
            </h3>
            {data.map((el) => (
              <Task
                doneTask={doneTask}
                removeTask={removeTask}
                job={el}
                key={el.id}
              /> //todo: job is props
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
