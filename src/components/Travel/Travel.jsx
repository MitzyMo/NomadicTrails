import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/media/PragueNight.webp";
import image2 from "../../assets/media/PragueTrol.webp";
import image3 from "../../assets/media/user.png";
import image4 from "../../assets/media/PragueBoat.webp";

const Travel = () => {
    return (
        <>
        <div className="container mt-5">
            <div className="row">
            <div className="col-lg-8">
                <article>
                <figure className="mb-4">
                    <img
                    loading="lazy"
                    className="img-fluid rounded"
                    src={image1}
                    alt="Prague"
                    />
                </figure>

                <section className="mb-5">
                    <h2 className="fw-bolder mb-4 mt-5">
                    The best day trips from Prague
                    </h2>
                    <p className="fs-5 mb-4">
                    Czechia's capital city is a fantastic sprawl of Gothic,
                    Renaissance and baroque buildings that line both banks of the
                    Vltava River. Millions come here every year to soak in the
                    atmosphere and architectural splendor, but with so many people
                    crowding the streets, the flavor of the country itself can get
                    lost.
                    </p>
                    <p className="fs-5 mb-4">
                    The surrounding countryside holds some of Czechia's most
                    important sights, from a church made of human bones to the
                    castle that once enshrined the Bohemian crown jewels. More
                    importantly, leaving the Prague tourist bubble even for a day
                    allows you to learn more about Czechs, their culture and
                    history. These are the best excursions from Prague within a
                    90-minute radius of the city limits.
                    </p>
                    <p className="fs-5 mb-4">
                    Still, it's useful to have a few money-saving tips to hand if
                    you want to stick to a budget. Here are some ways to cut your
                    costs when visiting Prague.
                    </p>
                    <h2 className="fw-bolder mb-5 mt-5">Highlights of Prague</h2>
                    <img
                    loading="lazy"
                    className="img-fluid rounded pb-4 mx-auto d-block"
                    src={image2}
                    alt="Prague"
                    />
                    <p className="fs-5 mb-4">
                    The city center is compact and the finest areas are mostly
                    pedestrianized, so Prague is best explored on foot; from
                    Wenceslas Square on one side of the city to Prague Castle on
                    the other is just a 30-minute stroll (walking via the Old
                    Town, across the river and through the Lesser Town).
                    </p>
                    <p className="fs-5 mb-4">
                    The first thing to do in Prague, therefore, is simply to
                    wander through the streets and magnificent squares, to revel
                    in the atmosphere, and to admire the stunning architecture all
                    around.
                    </p>
                </section>
                </article>

                <section className="mb-4">
                <div className="card mb-4">
                    <div className="card-header">Comments</div>
                    <div className="flex-shrink-0 pt-4 pb-2">
                    <img
                        loading="lazy"
                        className="rounded-circle"
                        src={image3}
                        alt="Commenter"
                    />
                    </div>
                    <div className="fw-bold">Commenter Name</div>
                    <div className="card-body">
                    Wow, this blog is a treasure trove of wanderlust-inspiring
                    stories and practical travel tips! I'm ready to pack my bags
                    and explore the world after reading just a few posts. Keep the
                    adventures coming! ✈️🌍 #TravelDreams
                    </div>
                </div>
                </section>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                <div className="card-header">Search</div>
                <div className="card-body">
                    <div className="input-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Enter search term..."
                        aria-label="Enter search term..."
                        aria-describedby="button-search"
                    />
                    <button
                        aria-label="Search"
                        className="btn btn-primary mb-3"
                        id="button-search"
                        type="button"
                    >
                        Go!
                    </button>
                    </div>
                </div>
                </div>

                <div className="card mb-4">
                <div className="card-header">Categories</div>
                <div className="card-body">
                    <div className="row">
                    <div className="col-sm-6">
                        <ul className="list-unstyled mb-0">
                        <li>
                            <Link to={""} style={{pointerEvents: "none"}}>
                            Europe
                            </Link>
                        </li>
                        <li>
                            <Link to={""} style={{pointerEvents: "none"}}>
                            Africa
                            </Link>
                        </li>
                        <li>
                            <Link to={""} style={{pointerEvents: "none"}}>
                            America
                            </Link>
                        </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <ul className="list-unstyled mb-0">
                        <li>
                            <Link to={""} style={{pointerEvents: "none"}}>
                            Traval
                            </Link>
                        </li>
                        <li>
                            <Link to={""} style={{pointerEvents: "none"}}>
                            Food
                            </Link>
                        </li>
                        <li>
                            <Link to={""} style={{pointerEvents: "none"}}>
                            Work
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

                <div className="card mb-4">
                <div className="card-header">Daily Photo</div>
                <div className="card-body">
                    <img
                    loading="lazy"
                    className="img-fluid rounded mx-auto d-block"
                    src={image4}
                    alt="Prague boat"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Travel;
