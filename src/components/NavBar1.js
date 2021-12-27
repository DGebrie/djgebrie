import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function NavBar1() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">
                {/* NavBar does not utilize light/dark mode */}
                {theme === "dark" && (
                  <FiSun
                    onClick={() => {
                      setTheme("light");
                      document.body.style.backgroundColor = "white";
                      document.body.style.color = "#6c757d";
                    }}
                  />
                )}
                {theme === "light" && (
                  <FiMoon
                    onClick={() => {
                      setTheme("dark");
                      document.body.style.backgroundColor = "#282c36";
                      document.body.style.color = "#6c757d";
                    }}
                  />
                )}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
                {/* <span className="sr-only">(current)</span> */}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
