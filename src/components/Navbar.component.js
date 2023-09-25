import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-lg ">
      <Link to="/" className="navbar-brand">
        Fitfolio
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/create" className="nav-link">
              CreateExerciseLog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              CreateUser
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
