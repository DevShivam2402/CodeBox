import React from "react";
import '../Home.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="header-container">
        <div className="brand-navbar">
          <NavLink className="brand-link" to="/">
            CODEBOX
          </NavLink>
        </div>
        <div className="navbar-links">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <NavLink to="/HomePage" className="nav-link">Home</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/Blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Challenges" className="nav-link">
                Challenges
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a href="/" className="nav-link">Spark</a>
            </li> */}
            <li className="nav-item">
              <NavLink to="/About" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;
