import React from 'react';
import './App.css';
import Menu from "./Menu";
import Home from "./Home"
import Work from "./Work";
import ContactUs from "./ContactUs";
import Skills from "./Skills"

function App() {
  return (
    <div className="container">
      <Home />
      <Work />
      <ContactUs />
      <Skills />
      <Menu />
    </div>
  );
}

export default App;
