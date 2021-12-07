import React from "react";

export default function Contact() {
  return (
    <div className="d-flex justify-content-center">
      {/* <!--Section: Contact v.2--> */}
      <section class="mb-4">
        {/* <!--Section heading--> */}

        {/* <!--Section description--> */}

        <div class="row">
          {/* <!--Grid column--> */}

          <div class="">
            <p class="text-center w-responsive mx-auto mb-5">
              Any questions? Don't hesitate to reach out and I will be sure to
              get back to you in a matter of hours.
            </p>
            <form
              id="contact-form"
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
                href="mailto:dj.mebratu@gmail.com"
                class="btn btn-secondary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
          </div>
          <div class="status"></div>
        </div>
      </section>
    </div>
  );
}
