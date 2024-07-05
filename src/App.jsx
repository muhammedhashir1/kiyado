// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterLayout from "./components/RouterLayout";
import "./index.css";

const App = () => {
  return (
    <Router>
      <RouterLayout />
    </Router>
  );
};

export default App;
