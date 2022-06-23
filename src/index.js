import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./Components/TodoList";
import All from "./Components/All";
import Remaining from "./Components/Remaining";
import Completed from "./Components/Completed";
import App from "./App";
import TasksProvider from "./TasksProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TasksProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="all" element={<All />} />
          <Route path="rests" element={<Remaining />} />
          <Route path="completed" element={<Completed />} />
          <Route index element={<TodoList />} />
          <Route
            path="*"
            element={
              <div style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </TasksProvider>
);
