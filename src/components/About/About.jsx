import React from "react";
import Logo from "../Brand/Logo";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about-section" id="hero">
        <div>
          <Logo size={300} className="mb-3" />
          <h1 className="mt-3">I'm Mo.</h1>
          <p className="pb-3">
            Meet Mo, your friendly globetrotting companion, and join her on an
            exciting journey around the world. Mo is not just any traveler;
            she's a storyteller, adventurer, and explorer rolled into one. In
            this captivating adventure, Mo will take you on a voyage filled with
            intriguing tales, breathtaking landscapes, and cultural encounters
            that will leave you inspired and yearning for your own adventures.
          </p>
        </div>
      </section>
      <section className="about-section" id="hero">
        <div className="results">
          <h3>Some of the Results I'm Proud of</h3>
          <div className="section-inner">
            <div className="section-inner2">
              <p className="about-data">20</p>
              <p className="about-label">Countries Visited</p>
            </div>
            <div className="section-inner2">
              <p className="about-data">150</p>
              <p className="about-label">Cities Visited</p>
            </div>
            <div className="section-inner2">
              <p className="about-data">80K +</p>
              <p className="about-label">Photos Taken</p>
            </div>
            <div className="section-inner2">
              <p className="about-data">50</p>
              <p className="about-label">Blog Articles</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section" id="hero">
        <div className="about-contact">
          <Link alt="Contact-me" to={'/Contact'} loading="lazy">
            <h3>Ask Me Anything!</h3>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
