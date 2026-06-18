import React from "react";
import ReactDOM from "react-dom/client";
import { TodoList } from "./components/TodoList.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TodoList />);