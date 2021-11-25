import React, { Component } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // <div class="container text-center my-3">
    //   <div class="row">
    //     {/* /// first card -- We love movies */}
    //     <div className="col-4">
    //       <div class="card">
    //         <div className="card-body">
    //           <h5 className="card-title">We Love Movies App</h5>
    //           <img
    //             src=""
    //             // alt="We Love Movies App"
    //             className="card-img-top d-flex justify-content-center"
    //           />
    //           <p class="card-text">Quick description of project</p>
    //         </div>

    //         <div class="card-body d-flex justify-content-center">
    //           <a
    //             href="https://github.com/DGebrie/we-love-movies"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             class="card-link text-secondary"
    //           >
    //             Github link
    //           </a>
    //           <a href="#" class="card-link text-secondary">
    //             Deployed link
    //           </a>
    //         </div>
    //       </div>
    // </div>

    //     {/* second card -- restaurants reservations app */}
    //     <div className="col-4">
    //       <div class="card">
    //         <div className="card-body">
    //           <h5 className="card-title">Reservations App</h5>
    //           <img
    //             src=""
    //             // alt="Reservations App"
    //             className="card-img-top d-flex justify-content-center"
    //           />
    //           <p class="card-text">Quick description of project</p>
    //         </div>

    //         <div class="card-body d-flex justify-content-center">
    //           <a
    //             href="https://github.com/DGebrie/reservation-restaurants.git"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             class="card-link text-secondary"
    //           >
    //             Github link
    //           </a>
    //           <a href="#" class="card-link text-secondary">
    //             Deployed link
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     {/* third card -- restaurants reservations app */}
    //     <div className="col-4">
    //       <div class="card">
    //         <div className="card-body">
    //           <h5 className="card-title">Pomodoro Timer App</h5>
    //           <img
    //             src=""
    //             // alt="Pomodoro App"
    //             className="card-img-top d-flex justify-content-center"
    //           />
    //           <p class="card-text">Quick description of project</p>
    //         </div>

    //         <div class="card-body d-flex justify-content-center">
    //           <a
    //             href="https://github.com/DGebrie/pomodoro-timer.git"
    //             class="card-link text-secondary"
    //           >
    //             Github link
    //           </a>
    //           <a href="#" class="card-link text-secondary">
    //             q Deployed link
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Slider {...settings}>
        <div className="mx-auto">
          <div class="card">
            <div className="card-body">
              <div className="">
                <img src="" alt="Pomodoro App" className="" />
              </div>
              <div class="card-body d-flex justify-content-center">
                <h5 className="card-title">Pomodoro Timer App</h5>

                <p class="card-text">Quick description of project</p>
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
        <div>
          <div class="card">
            <div className="card-body d-flex align-items-center flex-column">
              <h5 className="card-title">We Love Movies</h5>

              <img
                src="images/movies.jpeg"
                alt="We Love Movies App"
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
        <div>
          <div class="card">
            <div
              className="card-body 
             
            "
            >
              <h5 className="card-title">Flashcard App</h5>
              <div className="">
                <img
                  src="images/FlashcardApp.jpg"
                  alt="Flashcard App"
                  className="card-img-top"
                  style={{ width: 500, height: 250 }}
                />
              </div>
              <p class="card-text col-6">Quick description of project</p>
            </div>
            <div class="card-body d-flex justify-content-center">
              <a
                href="https://github.com/DGebrie/flashcard.git"
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
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
