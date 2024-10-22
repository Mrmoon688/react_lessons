import React from "react";
import useFaqStore from "./states/useFaqStore";

const Faq = ({ faq: { id, question, answer, isOpen }, toggleQueue }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => {
  //   console.log("Open FAQ");
  //   setOpen(true);
  // };
  const { setQuestions } = useFaqStore();
  const handleToggle = () => {
    console.log("Open FAQ");
    toggleQueue(id);
  };
  return (
    <div className="">
      <div
        onClick={handleToggle}
        className="flex justify-between items-center border border-black p-5 select-none active:scale-95 duration-300 hover:bg-slate-200"
      >
        <h1
          className={` text-xl ${isOpen === false ? "text-xl" : "font-bold"}`}
        >
          {question}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-300 ${
            isOpen === false ? "rotate-0" : "rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>

      <p
        className={`bg-blue-200 p-5 mx-2 ${isOpen === false ? "hidden " : ""}`}
      >
        {answer}
      </p>
    </div>
  );
};

export default Faq;
