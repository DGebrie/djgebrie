import React from "react";
import "../App.css";
import Typical from "react-typical";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import About from "./About";
import Skills from "./Skills";

function HeroSection() {
  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      ></div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <div class="row">
          <div style={{ padding: 200 }}>
            <div>
              <h1 className="display-4">Dejen Gebrie</h1>
              <div className="">
                <Typical
                  steps={["Software Engineer", 100]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
              <hr className="my-4" />
              <div className="lead">
                {" "}
                <About />
              </div>
            </div>
          </div>
          {/* 
          <div style={{ padding: 50 }}>
            <div className="row" id="scrollspyHeading1">
              <h4 className="ps-5">About Me</h4>

              <About />
            </div>
          </div> */}

          <div style={{ padding: 50 }}>
            <h4 className="ps-5" id="scrollspyHeading2">
              Portfolio
            </h4>
            <Portfolio />
          </div>

          <div style={{ padding: 50 }}>
            <h4 className="ps-5" id="scrollspyHeading3">
              Skills
            </h4>
            <Skills />
          </div>

          <div style={{ padding: 50 }}>
            <h4 className="ps-5" id="scrollspyHeading4">
              Contact
            </h4>

            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
