import React from "react";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      {/* <nav
        id="navbar-example2"
        class="sticky-top navbar navbar-light bg-light px-3"
      >
        <a class="navbar-brand" href="#">
          DG
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading3">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading4">
              Contact
            </a>
          </li>
        </ul>
      </nav> */}

      <section id="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <a href="#" className="navbar-brand">
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
                    <a
                      href="#scrollspyHeading2"
                      className="nav-link text-secondary"
                    >
                      Portfolio
                    </a>
                  </li>

                  <li className="nav-item active">
                    <a
                      href="#scrollspyHeading3"
                      className="nav-link text-secondary"
                    >
                      Skills
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
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
