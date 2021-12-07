import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        class="text-center text-lg-start bg-light text-muted"
        style={{ padding: 60 }}
      >
        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Let's Connect
                </h6>
                <p></p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> */}
              {/* <!-- Links --> */}
              {/* <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Laravel
                  </a>
                </p>
              </div> */}
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> Phoenix, AZ, 85015, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  dj.mebratu@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> (619) 642-4443
                </p>
                <p>
                  <a href="#!" class="text-reset" style={{ padding: 10 }}>
                    LinkedIn
                  </a>
                  <a href="#!" class="text-reset">
                    Github
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div class="text-center p-4">© 2021 Copyright</div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}
