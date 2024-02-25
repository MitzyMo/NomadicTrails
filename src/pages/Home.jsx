import React from "react";
import BrandName from "../components/Brand/BrandName";
import { Link } from "react-router-dom";
import "../assets/styles/styles.css";
import trollPrague from "../assets/media/PragueC.webp";
import venice from "../assets/media/Venice.webp";
import Florence from "../assets/media/Florence.webp";
import { MDBCarousel, MDBCarouselItem  } from "mdb-react-ui-kit";
import Bird from "../assets/media/Bird.webp";
import Deck from "../assets/media/Deck.webp";
import Contact from "../assets/media/Contact.webp";
import Monserrat from "../assets/media/Monserrat.webp";
import Logo from "../components/Brand/Logo";

const Home = () => {
  return (
    <>
      <BrandName />
      <section className="about section-padding prelative about-section1" id="about">
        <div>
          <div className="sectioner-header text-center">
            <h2>
              <Link alt="About-me" to={"/About"}>
                About Me
              </Link>
            </h2>
            <span className="line"></span>
          </div>
          <div className="about-content">
            <Logo size={300}/>
            <h1>Hi, I'm Mo the Traveler.</h1>
            <h2>
              <Link alt="About-me" to={"/About"}>
                My Story
              </Link>
            </h2>
            <p className="about-text">
              "Embrace the Unknown, Explore the Unseen, and Discover Your
              Journey."
            </p>
          </div>
        </div>
      </section>
      {/*VIDEOS */}
      <section className="prelative text-center" id="tips">
        <div className="section-padding video-overlay">
          <div className="sectioner-header text-center">
            <h2 id="travel">
              <Link alt="Travel-tips" to={"/Travel"}>
                Travel Tips
              </Link>
            </h2>
            <span className="line"></span>
          </div>
          <div className="container pt-2">
            <div className="row justify-content-center">
              <div className="col ">
                <div
                  className="card bg-transparent h-100"
                  style={{ width: "360px" }}
                >
                  <img className="w-100" src={trollPrague} />
                  <div className="card-body ">
                    <Link
                      id="sec2-travel-title-tip1"
                      alt="Travel-tips"
                      to={"/Travel"}
                    >
                      <h1 className=" text-white">Prague</h1>
                    </Link>
                    <Link
                      id="sec2-travel-text-tip1"
                      alt="Travel-tips"
                      to={"/Travel"}
                    >
                      <p className=" text-white">
                        Where history whispers through every charming street
                        corner. 🏰🇨🇿 #PragueMagic
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div
                  className="card bg-transparent h-100"
                  style={{ width: "360px" }}
                >
                  <img src={venice} alt="Venice" />
                  <div className="card-body">
                    <Link
                      id="sec2-travel-title-tip2"
                      alt="Travel-tips"
                      to={"/Travel"}
                    >
                      <h1 className=" text-white">Venice</h1>
                    </Link>
                    <Link
                      id="sec2-travel-text-tip2"
                      alt="Travel-tips"
                      to={"/Travel"}
                    >
                      <p className=" text-white">
                        A timeless maze of canals and dreams. 🚣‍♂️✨
                        #VenetianSplendor
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div
                  className="card bg-transparent h-100"
                  style={{ width: "360px" }}
                >
                  <img src={Florence} alt="Florence" />
                  <div className="card-body">
                    <Link
                      id="sec2-travel-title-tip3"
                      alt="Travel-tips"
                      to={"/Travel"}
                    >
                      <h1 className=" text-white">Florencia</h1>
                    </Link>
                    <Link
                      id="sec2-travel-text-tip3"
                      alt="Travel-tips"
                      to={"/Travel"}
                    >
                      <p className=" text-white">
                        Florence, where art, history, and beauty converge! 🇮🇹❤️
                        #FlorenceMagic
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GALLERY */}
      <section className="section-padding" id="gallery">
        <div className="sectioner-header text-center">
          <h2>
            <Link alt="Gallery" to={"/Gallery"}>
              Gallery
            </Link>
          </h2>
          <span className="line"></span>
        </div>

        <MDBCarousel showControls interval={3000}>
          <MDBCarouselItem itemId={1} interval={1000}>
            <img
              src={Bird}
              className="d-block w-75 mx-auto"
              alt="Bird"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img
              src={Deck}
              className="d-block w-75 mx-auto"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img
              src={Contact}
              className="d-block w-75 mx-auto"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img
              src={Monserrat}
              className="d-block w-75 mx-auto"
              alt="..."
            />
          </MDBCarouselItem>
        </MDBCarousel>
      </section>
       {/* CONTACT*/}
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectioner-header text-center">
                <h2>
                  <Link alt="Contact-me" to={"/Contact"}>
                    Ask Me Anything!
                  </Link>
                </h2>
                <span className="line"></span>
                <p>
                  Feel free to ask my any question about my travels, blog or if
                  you have any business inquires. Fill out the form below or
                  send me an email to
                  <span>
                    <Link href="mailto:motrav@gmail.com" data-action="email">
                      motrav@email.com
                    </Link>
                  </span>
                </p>
              </div>
              <div className="section-content">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-8">
                    <form id="contact_form" action="">
                      <div className="row">
                        <div className="col">
                          <input
                            type="text"
                            id="your_name"
                            className="form-input w-100"
                            name="full-name"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="col">
                          <input
                            type="email"
                            id="email"
                            className="form-input w-100"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        id="subject"
                        className="form-input w-100"
                        name="subject"
                        placeholder="Subject"
                      />
                      <textarea
                        className="form-input w-100"
                        id="message"
                        placeholder="Message"
                        name="message"
                      />
                      <div className="wrapper">
                        <button
                          aria-label="Submit"
                          className="btn-grad w-100 text-uppercase"
                          type="submit"
                          name="button"
                        >
                          <span>Submit</span>
                          <img
                            loading="lazy"
                            src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
                            height="32"
                            width="32"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="contact-info white">
                      <div className="contact-item media">
                        <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                        <div className="media-body">
                          <p className="text-uppercase">Address</p>
                          <p className="text-uppercase">Bogotá, Colombia</p>
                        </div>
                      </div>
                      <div className="contact-item media">
                        <i className="fa fa-mobile media-left media-right-margin"></i>
                        <div className="media-body">
                          <p className="text-uppercase">Phone</p>
                          <p className="text-uppercase">
                            <Link
                              className="text-white"
                              href="tel:+573118251493"
                            >
                              009900990099
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="contact-item media">
                        <i className="fa fa-envelope media-left media-right-margin"></i>
                        <div className="media-body">
                          <p className="text-uppercase">E-mail</p>
                          <p className="text-uppercase">
                            <Link
                              className="text-white"
                              href="mailto:motrav@gmail.com"
                            >
                              motrav@email.com
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
