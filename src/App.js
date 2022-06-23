import React from 'react';
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav >
          <Link to="/">Home</Link>
          <Link to="/all">All</Link>
          <Link to="/rests">Remaining Tasks</Link>
          <Link to="/completed">Completed Tasks</Link>
        </nav>
      </header>
      <h1>Todo Lists</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
