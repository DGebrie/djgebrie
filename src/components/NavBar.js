import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
// import { Link } from "react-router-dom";

export default function NavBar() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <section id="header">
        {/* <div className="container-fluid"> */}
        <div className="fixed-top" style={{ padding: "" }}>
          <nav className="navbar navbar-expand-lg  ">
            {/* <div className="container"> */}

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ padding: "15px" }}
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" style={{ paddingLeft: 120 }}>
                  <a href="#" className="nav-link text-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item active">
                  <a href="#contact" className="nav-link text-secondary">
                    Contact
                  </a>
                </li>
                <li className="nav-item active">
                  <a
                    className="nav-item active col-md-auto"
                    style={{ paddingLeft: 300 }}
                  >
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
              </ul>
            </div>
            {/* </div> */}
          </nav>
        </div>
      </section>
    </>
  );
}
