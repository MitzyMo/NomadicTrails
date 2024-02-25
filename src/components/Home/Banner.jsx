import React from "react";
import { Link } from "react-router-dom";
import zen from "../../assets/media/Zen.webp"
import wave from "../../assets/media/wave.svg"



const Banner = ({ className }) => {
  
    return (
        <>
      <section className={`banner ${className}`} id="home">
        <div className="banner-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-12 banner-content">
                <h2 className="banner-title">Hi! I'm Mo the Traveler</h2>
                <p className="banner-text">
                  Meet Mo, your friendly globetrotting companion, and join her
                  on an exciting journey around the world. Mo is not just any
                  traveler; she's a storyteller, adventurer, and explorer rolled
                  into one. In this captivating adventure, Mo will take you on a
                  voyage filled with intriguing tales, breathtaking landscapes,
                  and cultural encounters that will leave you inspired and
                  yearning for your own adventures.
                </p>
                <Link className="text-info" alt="About-me" to={'/About'}>MY STORY</Link>
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  alt="Pozos-Azules"
                  src={zen}
                  className="banner-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="svg-wave">
          <img
            className="svg-hero"
            src={wave}
            alt="wave"
            loading="lazy"
          />
        </span>
      </section>
        </>
    );
};

export default Banner;
