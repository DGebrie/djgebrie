import "./App.css";
import NavBar from "./components/NavBar";
import React, { Switch } from "react";
// import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <div className="">
        {/* <Router> */}
        <NavBar />
        {/* </Router> */}
      </div>
      <div>
        <Router>
          <HeroSection />
        </Router>
      </div>
    </>
  );
}

export default App;
