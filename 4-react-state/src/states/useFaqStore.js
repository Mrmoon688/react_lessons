import { create } from "zustand";

const useFaqStore = create((set) => ({
  questions: [
    {
      id: 1,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It's used with React to describe what the UI should look like.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What are React hooks?",
      answer:
        "React hooks are functions that let you use state and other React features in functional components.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is the purpose of the useState hook?",
      answer:
        "The useState hook is used to add state to functional components. It returns an array with the current state and a function to update it.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How do you pass data between components in React?",
      answer:
        "Data is passed between components using props. Props are arguments passed into React components, allowing data flow from parent to child components.",
      isOpen: false,
    },
    {
      id: 5,
      question: "What is the useEffect hook used for?",
      answer:
        "The useEffect hook lets you perform side effects in your function components. It’s similar to lifecycle methods in class components such as componentDidMount, componentDidUpdate, and componentWillUnmount.",
      isOpen: false,
    },
  ],
  setQuestions: (taskId) =>
    set((state) => ({
      questions: state.questions.map((el) =>
        el.id === taskId
          ? { ...el, isOpen: !el.isOpen }
          : { ...el, isOpen: false }
      ),
    })),
}));

export default useFaqStore;
