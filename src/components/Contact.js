import React from "react";

export default function Contact() {
  return (
    <div className="d-flex justify-content-center" id="contact">
      {/* <!--Section: Contact v.2--> */}
      <section class="mb-4 " style={{ padding: 150 }}>
        <h1 className="d-flex justify-content-center text-secondary">
          Contact
        </h1>
        <div class="row">
          {/* <!--Grid column--> */}

          <div class="text-secondary">
            <p class="text-center w-responsive mx-auto mb-5">
              Any questions? Don't hesitate to reach out and I will be sure to
              get back to you in a matter of hours.
            </p>
            <form
              name="contact-form"
              // action="mailto:dj.mebratu@gmail.com"
              // method="POST"
            >
              <div class="row">
                <div></div>
                <div class="col md-6">
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
              </div>

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

              <div class="row">
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
            </form>
            {/* <button type="button" class="text-center text-md-left btn btn-primary">
              Send
            </button> */}
            <div class="text-center text-md-left primary">
              <button
                href="mailto:dj.mebratu@gmail.com"
                class="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </button>
            </div>
          </div>
          {/* <div class="status"></div> */}
        </div>
      </section>
    </div>
  );
}
