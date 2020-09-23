import React from 'react';
import './App.css';
import Menu from "./Menu";
import Home from "./Home";
import Work from "./Work";
import Contact from "./Contact";
import Skills from "./Skills"

function App() {
  return (
    <div className="container">
      <Home />
      <Work />
      <Contact />
      <Skills />
      <Menu />
    </div>
  );
}

export default App;
