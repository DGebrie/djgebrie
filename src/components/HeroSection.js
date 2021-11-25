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
          <div
            // className="d-flex justify-content-center"
            style={{ padding: 200 }}
          >
            <div>
              <h1 className="display-4">Dejen Gebrie</h1>
              <div className="">
                <Typical
                  steps={["Hello World", 300, ""]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
              <hr className="my-4" />
              <div className="lead">
                <About />
              </div>
            </div>
          </div>

          {/* <div className="mx-auto" style={{ padding: 50 }} id="scrollspyHeading2">
            <h4 className="" >
              Portfolio
            </h4>
            <Portfolio />
          </div>

          <div style={{ padding: 50 }} id="scrollspyHeading3">
            <h4 className="" >
              Skills
            </h4>
            <Skills />
          </div>
        </div> */}

          <div style={{ padding: 50 }} id="scrollspyHeading4">
            {/* <h4 className="" >
              Contact
            </h4> */}

            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
