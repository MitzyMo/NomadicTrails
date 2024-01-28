import React, { useState } from "react";
import "../../assets/styles/styles.css";
import { Link } from "react-router-dom";
import Logo from "../Brand/Logo";

const NavBar = ({ size }) => {
  return (
    <>
      <nav className="navbar navbar-expand-xl sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" alt="Landing-Page" to={"/"}>
            <Logo size={40} alt="Mo's Logo" />
          </Link>
          <button
            aria-label="Menu"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link alt="Landing-Page" className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link alt="About-me" className="nav-link" to={"/About"}>
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link alt="Travel-tips" className="nav-link" to={"/Travel"}>
                  Travel Tips
                </Link>
              </li>
              <li className="nav-item">
                <Link alt="Gallery" className="nav-link" to={"/Gallery"}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  rel="stylesheet"
                  to={"/Store"}
                >
                  Store
                </Link>
              </li>
              <li className="nav-item">
                <Link alt="Contact-me" className="nav-link" to={"/Contact"}>
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
