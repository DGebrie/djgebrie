import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="d-flex justify-content-center">
      {/* <!--Section: Contact v.2--> */}
      <section class="mb-4">
        {/* <!--Section heading--> */}

        {/* <!--Section description--> */}

        <div class="row">
          {/* <!--Grid column--> */}

          <div class="col-md-9 mb-md-0 mb-5">
            <p class="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact me
              directly.
            </p>
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              {/* <!--Grid row--> */}
              <div class="row">
                {/* <!--Grid column--> */}
                <div></div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}

              {/* <!--Grid row--> */}
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              {/* <!--Grid row--> */}

              {/* <!--Grid row--> */}
              <div class="row">
                {/* <!--Grid column--> */}
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              {/* <!--Grid row--> */}
            </form>

            <div class="text-center text-md-left">
              <a
                class="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>

            <div class="col-md d-flex justify-content-center">
              <ul class="list-unstyled mb-0" style={{ padding: 10 }}>
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>Phoenix, AZ 85015 USA</p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>1(619)642-4443</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>dj.mebratu@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="status"></div>

          {/* <!--Grid column--> */}
        </div>

        {/* <!--Section: Contact v.2-->  */}

        <div className="justify-content-center">
          <a to="https://www.linkedin.com/dgebrie">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
            </svg>
          </a>

          <a to="https://www.github.com/linkedin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
