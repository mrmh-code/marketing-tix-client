import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoHeader from "../../assets/images/logo.png";
const Header = () => {
  let activeStyle = {
    color: "red",
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
      <div className="container-fluid">
        <img className="navbar-brand" src={logoHeader} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to=""
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link active"
            >
              Home
            </NavLink>

            <NavLink
              to="service"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              Service
            </NavLink>
            <NavLink
              to="about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              About
            </NavLink>

            <NavLink
              to="portfolio"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              Portfolio
            </NavLink>

            <NavLink
              to="videos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              Videos
            </NavLink>

            <NavLink
              to="contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              Contact Us
            </NavLink>

            <NavLink
              to="cart"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
