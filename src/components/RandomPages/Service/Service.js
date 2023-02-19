import React from "react";
import "./Service.css";
import serviceIMG1 from "../../../assets/images/service-icon-01.png";
import serviceIMG2 from "../../../assets/images/service-icon-02.png";
import serviceIMG3 from "../../../assets/images/service-icon-03.png";
const Service = () => {
  return (
    <div>
      <section className="services">
        <div className="service-banner">
            {/* Service Header  */}
          <h2 className="service-header">
            We <span className="color-2">Provide</span> The Best <br /> Service
            With
            <span className="color-1"> Our Tools</span>{" "}
          </h2>
            {/* Service Header End  */}

            {/* Start Service  */}

            
          <div className="row service-item">
            <div className="col-lg-3 col-sm-10 col-10  col-md-5 add-shadow">
              <h4>
                Optimizing your websites for <br /> Speed
              </h4>
              <img src={serviceIMG1} alt="" />
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, est.
              </p>
            </div>

            <div className="col-lg-3 col-sm-10 col-10 col-md-5 add-shadow">
              <h4>
                See The Strategy In The <br /> Market
              </h4>
              <img src={serviceIMG2} alt="" />
              <hr />
              <p>Get to know more about the topic in details</p>
            </div>

            <div className="col-lg-3 col-sm-10  col-10  col-md-5 add-shadow">
              <h4>
                Best Content Ideas for your <br /> pages
              </h4>
              <img src={serviceIMG3} alt="" />
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>

          {/* End Service  */}
        </div>
      </section>
    </div>
  );
};

export default Service;
