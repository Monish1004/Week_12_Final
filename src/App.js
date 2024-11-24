import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registration from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import "../src/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/register">Registration</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
