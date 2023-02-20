import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logoHeader from "../../assets/images/logo.png";
import { AuthContext } from "../../Context/UseContext";

const Header = () => {
  let activeStyle = {
    color: "red",
  };

  const {users,logOut}=useContext(AuthContext)
 
  return (
    <nav className="navbar navbar-expand-xl bg-body-tertiary ">
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
              to="/register"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="nav-link"
            >
              {   users?.email? <p>Hi {users.email.slice(0,8)} <button className="btn btn-primary" onClick={logOut}>log Out</button></p>:
             <span> Register <span className="text-primary ">/ <Link style={{textDecoration:"none"}} to={'/login'}>Login</Link></span> 
            </span>
}
              
            </NavLink>
        
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
