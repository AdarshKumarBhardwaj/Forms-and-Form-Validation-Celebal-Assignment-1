// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormComponent from "./Components/FormComponent";
import SuccessComponent from "./Components/SuccessComponent";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/success" element={<SuccessComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
