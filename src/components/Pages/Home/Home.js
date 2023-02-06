import React from "react";
import bannerRight from "../../../assets/images/banner-right-image.png";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home-container row ">
        <div className="home-left col lg-5 sm-10 md-6  ">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide ms-2 "
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
                <h1>Build <span className="color-1">your Website</span> <br/>the best in <span className="color-2"> SEO </span></h1><br/>
                <p className="home-p">
                  This is the first step when reaching out or responding to
                  customers. Using their name in the greeting will make your
                  response feel genuine .
                </p>
                <div className="d-flex flex-row mb-2">
                  <button className="btn-blue">Message Us Now</button>
                  <p>
                    <i className="fa fa-phone"></i> <small className="p-4 number">01733----09</small>
                  </p>
                </div>
              </div>
              <div className="carousel-item mb-5" data-bs-interval="2000">
                <h5>Online Marketing</h5>

                <h1>Get the best ideas <br/> for your website</h1><br/>
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
                <h1>Watch our video <br/> for you project</h1><br/>
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
            
            
          </div>
        </div>

        <div className="home-right col lg-7   ">
          <img src={bannerRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
