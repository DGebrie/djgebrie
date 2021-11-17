import React from "react";

export default function Portfolio() {
  return (
    <div class="container text-center my-3">
      <div class="row">
        {/* /// first card -- We love movies */}
        <div className="col-4">
          <div class="card">
            <div className="card-body">
              <h5 className="card-title">We Love Movies App</h5>
              <img
                src=""
                // alt="We Love Movies App"
                className="card-img-top d-flex justify-content-center"
              />
              <p class="card-text">Quick description of project</p>
            </div>

            <div class="card-body d-flex justify-content-center">
              <a
                href="https://github.com/DGebrie/we-love-movies"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link text-secondary"
              >
                Github link
              </a>
              <a href="#" class="card-link text-secondary">
                Deployed link
              </a>
            </div>
          </div>
        </div>

        {/* second card -- restaurants reservations app */}
        <div className="col-4">
          <div class="card">
            <div className="card-body">
              <h5 className="card-title">Reservations App</h5>
              <img
                src=""
                // alt="Reservations App"
                className="card-img-top d-flex justify-content-center"
              />
              <p class="card-text">Quick description of project</p>
            </div>

            <div class="card-body d-flex justify-content-center">
              <a
                href="https://github.com/DGebrie/reservation-restaurants.git"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link text-secondary"
              >
                Github link
              </a>
              <a href="#" class="card-link text-secondary">
                Deployed link
              </a>
            </div>
          </div>
        </div>

        {/* third card -- restaurants reservations app */}
        <div className="col-4">
          <div class="card">
            <div className="card-body">
              <h5 className="card-title">Pomodoro Timer App</h5>
              <img
                src=""
                // alt="Pomodoro App"
                className="card-img-top d-flex justify-content-center"
              />
              <p class="card-text">Quick description of project</p>
            </div>

            <div class="card-body d-flex justify-content-center">
              <a
                href="https://github.com/DGebrie/pomodoro-timer.git"
                class="card-link text-secondary"
              >
                Github link
              </a>
              <a href="#" class="card-link text-secondary">
                Deployed link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
