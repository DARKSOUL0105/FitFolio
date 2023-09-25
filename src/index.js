import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import Navbar from "./components/Navbar.component";

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* <h1> welcome</h1>; */}
        <Navbar />
      </div>
    </Router>
  );
};

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
