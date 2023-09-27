import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import Navbar from "./components/Navbar.component";
import ExercisesList from "./components/CreateUser.component";
import create_exercise from "./components/CreateExercise.component";
import edit_exercise from "./components/EditExercise.component";
import create_user from "./components/CreateUser.component";

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* <h1> welcome</h1>; */}
        <Navbar />
        <Routes>
          <Route path="/" exact Component={ExercisesList} />
          <Route path="/edit/:id" Component={edit_exercise} />
          <Route path="/create" Component={create_exercise} />
          <Route path="/user" Component={create_user} />
        </Routes>
      </div>
    </Router>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
