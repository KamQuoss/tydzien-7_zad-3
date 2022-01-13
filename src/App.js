import React from "react";
import "./styles.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Komunikacja z REST API</h1>
      <h2>Zadania 1-3</h2>
      <nav>
        <Link to="/users">Użytkownicy</Link> {" | "}
        <Link to="/tasks">Zadania</Link>
      </nav>
      <Outlet />
    </div>
  );
}
