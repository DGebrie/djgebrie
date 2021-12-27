import "./App.css";
import React from "react";
// import { Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavBar1 from "./components/NavBar1";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* <div style={{ backgroundColor: "#D0D0D0" }}> */}
      <div style={{ padding: 20 }}>
        <div className="">
          <Router>
            <NavBar1 />
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
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
