import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
// import { Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="">
        <Router>
          <NavBar />
        </Router>
      </div>
      <div>
        <Router>
          <HeroSection />
        </Router>
      </div>
      <div>
        <Router>
          <Contact />
        </Router>
      </div>
      <div>
        <Router>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
