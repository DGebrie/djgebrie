import React, { useState } from "react";
import About from "./About";
import Typical from "react-typical";
import "../App.css";

// import { FiSun, FiMoon } from "react-icons/fi";
// import Contact from "./Contact";
// import Portfolio from "./Portfolio";
// import Skills from "./Skills";

function HeroSection() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <div>
        <div class="row">
          <div style={{ padding: 150 }}>
            <div>
              <div className="">
                <h1 className="display-4 col text-secondary d-flex justify-content-center">
                  Dejen Gebrie
                </h1>
              </div>

              <div className="text-secondary d-flex justify-content-center">
                <Typical
                  steps={[
                    "Web Developer",
                    400,
                    "Full-Stack Software Engineer",
                    400,
                    "Frontend",
                    400,
                    "Backend",
                    400,
                  ]}
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
        </div>
      </div>
    </>
  );
}

export default HeroSection;
