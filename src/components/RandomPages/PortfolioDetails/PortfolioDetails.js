import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioDetails.css";

const PortfolioDetails = ({ planData }) => {
  console.log(planData);
  const { Name, SEO, discount, price, project, spaceOfGb, _id } = planData;
  return (
    <div>
      <div class="col text-center tablePlan">
        <div class="card-body pt-5">
          <h3 className="mb-3">{Name}</h3>
          <p className="color-2">
            <del>${discount}/mo</del>
          </p>
          <h2 className="color-2 mt-0 mb-3">${price}</h2>
          <p>{project} Project</p>
          <p>{spaceOfGb} GB space</p>
          <p>{SEO} SEO checkups</p>
          <p>Basic Support</p>
          <Link to={`/cart/${_id}`} style={{ textDecoration: "none" }}>
            {" "}
            <button className="btn-blue"> Get Started </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
