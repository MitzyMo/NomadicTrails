import React from "react";
import BrandName from "../Brand/BrandName";

const Home = () => {
    return (
        <>
        <BrandName />
        <section
            className="about section-padding prelative about-section1"
            id="about"
        >
            <div>
            <div className="sectioner-header text-center">
                <h2>
                <a alt="About-me" href="./Pages/About.html">
                    About Me
                </a>
                </h2>
                <span className="line"></span>
            </div>
            <div className="about-content">
                <img
                loading="lazy"
                alt="Mercy's-memoji"
                src="../../assets/media/Mercy.webp"
                className="profile-img about-section1--img"
                />
                <h1>Hi, I'm Mo the Traveler.</h1>
                <h2>
                <a alt="About-me" href="./Pages/About.html">
                    My Story
                </a>
                </h2>
                <p className="about-text">
                "Embrace the Unknown, Explore the Unseen, and Discover Your
                Journey."
                </p>
            </div>
            </div>
        </section>

        <section className="travel prelative text-center" id="tips">
            <div className="section-padding video-overlay">
            <div className="sectioner-header text-center">
                <h2 id="travel">
                <a alt="Travel-tips" href="./Pages/travel.html">
                    Travel Tips
                </a>
                </h2>
                <span className="line"></span>
            </div>
            <div className="container pt-2">
                <div className="sec2-travel-video">
                <a alt="Travel-tips" href="./Pages/travel.html">
                    <video
                    id="sec2-travel-vid-tip1"
                    src="../../assets/media/Prague.MP4"
                    autoPlay
                    loop
                    muted
                    ></video>
                </a>
                <a
                    id="sec2-travel-title-tip1"
                    alt="Travel-tips"
                    href="./Pages/travel.html"
                >
                    <h1>Prague</h1>
                </a>
                <a
                    id="sec2-travel-text-tip1"
                    alt="Travel-tips"
                    href="./Pages/travel.html"
                >
                    <p>
                    Where history whispers through every charming street corner.
                    🏰🇨🇿 #PragueMagic
                    </p>
                </a>
                <a alt="Travel-tips" href="./Pages/travel.html">
                    <video
                    id="sec2-travel-vid-tip2"
                    className="sec2-travel-response2"
                    src="../../assets/media/Venecia.MP4"
                    autoPlay
                    loop
                    muted
                    ></video>
                </a>
                <a
                    id="sec2-travel-title-tip2"
                    alt="Travel-tips"
                    href="./Pages/travel.html"
                >
                    <h1 className="sec2-travel-response2">Venice</h1>
                </a>
                <a
                    id="sec2-travel-text-tip2"
                    alt="Travel-tips"
                    href="./Pages/travel.html"
                >
                    <p className="sec2-travel-response2">
                    A timeless maze of canals and dreams. 🚣‍♂️✨ #VenetianSplendor
                    </p>
                </a>
                <a alt="Travel-tips" href="./Pages/travel.html">
                    <video
                    id="sec2-travel-vid-tip3"
                    className="sec2-travel-response3"
                    src="../../assets/media/Italy2.MP4"
                    autoPlay
                    loop
                    muted
                    ></video>
                </a>
                <a
                    id="sec2-travel-title-tip3"
                    alt="Travel-tips"
                    href="./Pages/travel.html"
                >
                    <h1 className="sec2-travel-response3">Florencia</h1>
                </a>
                <a
                    id="sec2-travel-text-tip3"
                    alt="Travel-tips"
                    href="./Pages/travel.html"
                >
                    <p className="sec2-travel-response3">
                    Florence, where art, history, and beauty converge! A city that
                    steals your heart with every cobblestone street and
                    Renaissance masterpiece. 🇮🇹❤️ #FlorenceMagic
                    </p>
                </a>
                </div>
            </div>
            </div>
        </section>

        <section className="section-padding" id="gallery">
            <div className="sectioner-header text-center">
            <h2>
                <a alt="Gallery" href="./Pages/gallery.html">
                Gallery
                </a>
            </h2>
            <span className="line"></span>
            </div>

            <div id="galleryC" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                aria-label="Slide1"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide-to="0"
                className="active"
                ></button>
                <button
                aria-label="Slide2"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide-to="1"
                ></button>
                <button
                aria-label="Slide3"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide-to="2"
                ></button>
                <button
                aria-label="Slide4"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide-to="3"
                ></button>
                <button
                aria-label="Slide5"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide-to="4"
                ></button>
                <button
                aria-label="Slide6"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide-to="5"
                ></button>
                <button
                aria-label="Slide7"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide-to="6"
                ></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                    <img
                    src="../../assets/media/Water.webp"
                    alt="Tominé"
                    loading="lazy"
                    />
                </div>
                </div>
                <div className="carousel-item">
                <div className="d-flex justify-content-center">
                    <img
                    loading="lazy"
                    className="carousel-img"
                    src="../../assets/media/Rest.webp"
                    alt="Bogotá"
                    />
                </div>
                </div>
                <div className="carousel-item">
                <div className="d-flex justify-content-center">
                    <img
                    src="../../assets/media/People.webp"
                    alt="Bogotá"
                    loading="lazy"
                    />
                </div>
                </div>
                <div className="carousel-item">
                <div className="d-flex justify-content-center">
                    <img
                    loading="lazy"
                    className="carousel-img"
                    src="../../assets/media/monument.webp"
                    alt="Bogotá"
                    />
                </div>
                </div>
                <div className="carousel-item">
                <div className="d-flex justify-content-center">
                    <img
                    src="../../assets/media/Mer.webp"
                    alt="Bogotá"
                    loading="lazy"
                    />
                </div>
                </div>
                <div className="carousel-item">
                <div className="d-flex justify-content-center">
                    <img
                    src="../../assets/media/graffiti.webp"
                    alt="Bogotá"
                    loading="lazy"
                    />
                </div>
                </div>
                <div className="carousel-item">
                <div className="d-flex justify-content-center">
                    <img
                    loading="lazy"
                    className="carousel-img"
                    src="../../assets/media/fade.webp"
                    alt="Bogotá"
                    />
                </div>
                </div>
            </div>

            <button
                aria-label="Previous"
                className="carousel-control-prev"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button
                aria-label="Next"
                className="carousel-control-next"
                type="button"
                data-bs-target="#galleryC"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>
            </div>
        </section>

        <section className="contact section-padding">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="sectioner-header text-center">
                    <h2>
                    <a alt="Contact-me" href="./Pages/contact.html">
                        Ask Me Anything!
                    </a>
                    </h2>
                    <span className="line"></span>
                    <p>
                    Feel free to ask my any question about my travels, blog or if
                    you have any business inquires. Fill out the form below or
                    send me an email to
                    <span>
                        <a href="mailto:motrav@gmail.com" data-action="email">
                        motrav@email.com
                        </a>
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
                        ></textarea>
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
                                <a className="text-white" href="tel:+573118251493">
                                009900990099
                                </a>
                            </p>
                            </div>
                        </div>
                        <div className="contact-item media">
                            <i className="fa fa-envelope media-left media-right-margin"></i>
                            <div className="media-body">
                            <p className="text-uppercase">E-mail</p>
                            <p className="text-uppercase">
                                <a
                                className="text-white"
                                href="mailto:motrav@gmail.com"
                                >
                                motrav@email.com
                                </a>
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
