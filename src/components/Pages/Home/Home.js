import React from "react";
import bannerRight from "../../../assets/images/banner-right-image.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home-container row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 ">
        <div className="home-left row-cols-sm-12 ">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide ms-5 "
            style={{ marginTop: "100px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active mb-5" data-bs-interval="10000">
                <h5>Welcome to Marketing Tix</h5>
                <h1>Build your Website Best is SEO or Marketing</h1>
                <p>
                  This is the first step when reaching out or responding to
                  customers. Using their name in the greeting will make your
                  response feel genuine .
                </p>
                <div className="d-flex flex-row mb-3">
                  <button className="btn btn-primary">Message Us Now</button>
                  <p>
                    <i></i> <small className="p-4">01733----09</small>
                  </p>
                </div>
              </div>
              <div className="carousel-item mb-5" data-bs-interval="2000">
                <h5>Online Marketing</h5>

                <h1>Get the best ideas for your website</h1>
                <p>
                  This is the first step when reaching out or responding to
                  customers. Using their name in the greeting will make your
                  response feel genuine .
                </p>
                <div className="d-flex flex-row mb-3">
                  <button className="btn btn-primary">Our Service</button>
                  <p>
                    <i></i> <small className="p-4">01733----09</small>
                  </p>
                </div>
              </div>
              <div className="carousel-item mb-5">
                <h5>Video Tutorial </h5>
                <h1>Watch our video for you project</h1>
                <p>
                  This is the first step when reaching out or responding to
                  customers. Using their name in the greeting will make your
                  response feel genuine .
                </p>
                <div className="d-flex flex-row mb-3">
                  <button className="btn btn-primary">Watch Video</button>
                  <p>
                    <i></i> <span className="p-4">01733----09</span>
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="home-right row-cols-sm-12">
          <img src={bannerRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
