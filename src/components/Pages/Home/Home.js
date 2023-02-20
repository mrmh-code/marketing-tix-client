import React from "react";
import bannerRight from "../../../assets/images/banner-right-image.png";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import Footer from "../../RandomPages/Footer/Footer";
import Service from "../../RandomPages/Service/Service";
import About from "../../RandomPages/About/About";
import Portfolio from "../../RandomPages/Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      {/* Home section start */}
      <section>
        <div className="home-container row ">
          <div className="home-left col lg-5 sm-10 md-6 container-fluid ">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide ms-1 "
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
              <div class="carousel-inner ">
                <div class="carousel-item active mb-5" data-bs-interval="10000">
                  <h5>Welcome to Marketing Tix</h5>
                  <h1>
                    Build <span className="color-1">your Website</span> <br />
                    the best in <span className="color-2"> SEO </span>
                  </h1>
                  <br />
                  <p className="home-p">
                    This is the first step when reaching out or responding to
                    customers. Using their name in the greeting will make your
                    response feel genuine .
                  </p>
                  <div className="d-flex flex-row mb-2">
                    <button className="btn-blue">Message Us Now</button>
                    <p className="ms-5">
                    <i className="phn-icon"><FontAwesomeIcon icon={faPhone} ></FontAwesomeIcon></i>
                      <small className="p-2 number">01733----09</small>
                    </p>
                  </div>
                </div>
                <div className="carousel-item mb-5" data-bs-interval="2000">
                  <h5>Online Marketing</h5>

                  <h1>
                    {" "}
                    <span className="color-1">
                      Get the best ideas
                    </span> <br /> for your{" "}
                    <span className="color-2"> website </span>
                  </h1>
                  <br />
                  <p className="home-p">
                    This is the first step when reaching out or responding to
                    customers. Using their name in the greeting will make your
                    response feel genuine .
                  </p>
                  <div className="d-flex flex-row mb-3">
                    <button className="btn-blue">Our Service</button>
                    <p className="ms-5">
                    <i className="phn-icon"><FontAwesomeIcon icon={faPhone} ></FontAwesomeIcon></i> <small className="p-2 number">01733----09</small>
                    </p>
                  </div>
                </div>
                <div className="carousel-item mb-5">
                  <h5>Video Tutorial </h5>
                  <h1>
                    {" "}
                    <span className="color-1"> Watch our</span> video <br /> for
                    you <span className="color-2">project</span>
                  </h1>
                  <br />
                  <p className="home-p">
                    This is the first step when reaching out or responding to
                    customers. Using their name in the greeting will make your
                    response feel genuine .
                  </p>
                  <div className="d-flex flex-row mb-3">
                    <button className="btn-blue">Watch Video</button>
                    <p className="ms-5">
                    <i className="phn-icon"><FontAwesomeIcon icon={faPhone} ></FontAwesomeIcon></i><span className="p-2 number">01733----09</span>
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
      </section>


      {/* Home Section End  */}

      {/* Service Section  */}

      
      <section>{<Service />}</section>
      {/* Service section end  */}

      <section>{<About/>}</section>

      {/* Plane Table  */}
      <section>{<Portfolio/>}</section>

      {/* Footer  */}

      <section>{<Footer/>}</section>
    </div>
  );
};

export default Home;
