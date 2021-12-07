import React from "react";

// import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <section id="header">
        {/* <div className="container-fluid"> */}
        <div
          className="fixed-top"
          //  style={{ backgroundColor: "white" }}
        >
          <nav className="navbar navbar-expand-lg navbar-dark ">
            {/* <div className="container"> */}
            <a href="#" className="navbar-brand" rel="noopener noreferrer">
              Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-target="#navbarSupportedContent"
              data-toggle="collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
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
