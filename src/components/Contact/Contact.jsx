import React from "react";

const Contact = () => {
    return (
        <>
        <section className="contact section-padding">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="sectioner-header text-center">
                    <h2>Ask Me Anything!</h2>
                    <span className="line"></span>
                    <p>
                    Feel free to ask my any question about my travels, blog or if
                    you have any business inquires. Fill out the form below or
                    send me an email to motrav@email.com
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
                            className="btn-grad mt-6 w-100 text-uppercase"
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
                                motrav@gmail.com
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

export default Contact;
