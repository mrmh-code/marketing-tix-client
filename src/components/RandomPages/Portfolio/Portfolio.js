import React from "react";
import { useLoaderData } from "react-router-dom";
import PortfolioDetails from "../PortfolioDetails/PortfolioDetails";
import "./Portfolio.css";
const Portfolio = () => {
  const useLoader = useLoaderData();
  console.log(useLoader);
  return (
    <div>
      <section className="table-plan">
        <div className="text-center mt-5 mb-5">
          <h2>
            Select A Suitable <span className="color-1">Plan</span> For
            <br /> Your Next <span className="color-2">Projects</span>{" "}
          </h2>
        </div>

        <div className="mx-5 px-5 ">
          <div class="row row-cols-1 row-cols-md-3 g-5">
            {useLoader.map((plan) => (
              <PortfolioDetails
                key={plan.id}
                planData={plan}
              ></PortfolioDetails>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
