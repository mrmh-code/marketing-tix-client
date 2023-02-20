import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartDetails = () => {
  const { discount, price, project, spaceOfGb, SEO, Name } = useLoaderData();

  const notify = () =>
    toast("Order successfully confirm !!!", { position: "top-center" });
    
  return (
    <div className="m-5">
      <div class="row row-cols-1 row-cols-md-2 g-5">
        <div
          class="col text-center tablePlan "
          style={{ width: "400px", textAlign: "center" }}
        >
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
          </div>
        </div>

        <div className="col">
          <h1 className="text-center">You can add Any plan</h1>
          <span className="text-center ms-5 ps-3 mb-5">
            {" "}
            <Link className="btn btn-primary" to={"/portfolio"}>
              Go Project
            </Link>{" "}
          </span>
          <button className="btn btn-success" onClick={notify}>
            Confirm Order
          </button>
          <ToastContainer transition={Slide} />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
