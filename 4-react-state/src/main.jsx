import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShowMyName from "./ShowMyName.jsx";
import Faq from "./Faq.jsx";
import FaqSection from "./FaqSection.jsx";

createRoot(document.getElementById("root")).render(<FaqSection />);
