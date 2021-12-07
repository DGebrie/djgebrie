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
                <li>
                  {theme === "dark" && (
                    <FiSun
                      onClick={() => {
                        setTheme("light");
                        document.body.style.backgroundColor = "white";
                        document.body.style.color = "black";
                      }}
                    />
                  )}
                  {theme === "light" && (
                    <FiMoon
                      onClick={() => {
                        setTheme("dark");
                        document.body.style.backgroundColor = "black";
                        document.body.style.color = "white";
                      }}
                    />
                  )}
                </li>
                <li className="nav-item active">
                  <a href="#" className="nav-link text-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item active">
                  <a
                    href="#scrollspyHeading4"
                    className="nav-link text-secondary"
                  >
                    Contact
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
