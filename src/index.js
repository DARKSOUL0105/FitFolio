import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for the toast styles

// importing components
import Navbar from "./components/Navbar.component";
import ExercisesList from "./components/ExerciseList.component";
import CreateExercise from "./components/CreateExercise.component";
import EditExercise from "./components/EditExercise.component";
import CreateUser from "./components/CreateUser.component";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <ToastContainer /> {/* Add this line for the toast container */}
        <Routes>
          <Route path="/" element={<ExercisesList />} />{" "}
          <Route path="/edit/:id" element={<EditExercise />} />{" "}
          <Route path="/create" element={<CreateExercise />} />{" "}
          <Route path="/user" element={<CreateUser />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
