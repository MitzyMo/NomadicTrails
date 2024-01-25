import React, { useState } from "react";
import "../../assets/styles/styles.css";

const NavBar = ({ size }) => {
  return (
    <>
    <nav className="navbar navbar-expand-xl sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" alt="Landing-Page" href="#">
            <img
              src="../../assets/media/Logo.webp"
              alt="logo"
              loading="lazy"
            />
          </a>
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
                <a alt="Landing-Page" className="nav-link" href="./index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  alt="About-me"
                  className="nav-link"
                  href="./Pages/About.html"
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a
                  alt="Travel-tips"
                  className="nav-link"
                  href="./Pages/travel.html"
                >
                  Travel Tips
                </a>
              </li>
              <li className="nav-item">
                <a
                  alt="Gallery"
                  className="nav-link"
                  href="./Pages/gallery.html"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  alt="Contact-me"
                  className="nav-link"
                  href="./Pages/contact.html"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
