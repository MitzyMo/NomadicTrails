import React from "react";
import { Link } from "react-router-dom";

const Travel = () => {
    return (
        <>
        <div class="container mt-5">
            <div class="row">
            <div class="col-lg-8">
                <article>
                <header class="mb-4">
                    <h1 class="fw-bolder mb-1">
                    Valuable Advice for Solo Travelers!
                    </h1>

                    <div class="text-muted fst-italic mb-2">
                    Posted on October 1, 2023 by Mo the Traveler
                    </div>

                    <Link
                    class="badge bg-secondary text-decoration-none link-light"
                    href="#!"
                    >
                    Prague
                    </Link>
                    <Link
                    class="badge bg-secondary text-decoration-none link-light"
                    href="#!"
                    >
                    Music
                    </Link>
                </header>

                <figure class="mb-4">
                    <img
                    loading="lazy"
                    class="img-fluid rounded"
                    src="../Assets/Media/pexels-julius-silver-753337.webp"
                    alt="Prague"
                    />
                </figure>

                <section class="mb-5">
                    <h2 class="fw-bolder mb-4 mt-5">
                    The best day trips from Prague
                    </h2>
                    <p class="fs-5 mb-4">
                    Czechia's capital city is a fantastic sprawl of Gothic,
                    Renaissance and baroque buildings that line both banks of the
                    Vltava River. Millions come here every year to soak in the
                    atmosphere and architectural splendor, but with so many people
                    crowding the streets, the flavor of the country itself can get
                    lost.
                    </p>
                    <p class="fs-5 mb-4">
                    The surrounding countryside holds some of Czechia's most
                    important sights, from a church made of human bones to the
                    castle that once enshrined the Bohemian crown jewels. More
                    importantly, leaving the Prague tourist bubble even for a day
                    allows you to learn more about Czechs, their culture and
                    history. These are the best excursions from Prague within a
                    90-minute radius of the city limits.
                    </p>
                    <p class="fs-5 mb-4">
                    Still, it's useful to have a few money-saving tips to hand if
                    you want to stick to a budget. Here are some ways to cut your
                    costs when visiting Prague.
                    </p>
                    <h2 class="fw-bolder mb-5 mt-5">Highlights of Prague</h2>
                    <img
                    loading="lazy"
                    class="img-fluid rounded pb-4 mx-auto d-block"
                    src="../Assets/Media/pexels-jeffrey-czum-2346216.webp"
                    alt="Prague"
                    />
                    <p class="fs-5 mb-4">
                    The city center is compact and the finest areas are mostly
                    pedestrianized, so Prague is best explored on foot; from
                    Wenceslas Square on one side of the city to Prague Castle on
                    the other is just a 30-minute stroll (walking via the Old
                    Town, across the river and through the Lesser Town).
                    </p>
                    <p class="fs-5 mb-4">
                    The first thing to do in Prague, therefore, is simply to
                    wander through the streets and magnificent squares, to revel
                    in the atmosphere, and to admire the stunning architecture all
                    around.
                    </p>
                </section>
                </article>

                <section class="mb-4">
                <div class="card mb-4">
                    <div class="card-header">Comments</div>
                    <div class="flex-shrink-0 pt-4 pb-2">
                    <img
                        loading="lazy"
                        class="rounded-circle"
                        src="../Assets/Media/user.png"
                        alt="Commenter"
                    />
                    </div>
                    <div class="fw-bold">Commenter Name</div>
                    <div class="card-body">
                    Wow, this blog is a treasure trove of wanderlust-inspiring
                    stories and practical travel tips! I'm ready to pack my bags
                    and explore the world after reading just a few posts. Keep the
                    adventures coming! ✈️🌍 #TravelDreams
                    </div>
                </div>
                </section>
            </div>

            <div class="col-lg-4">
                <div class="card mb-4">
                <div class="card-header">Search</div>
                <div class="card-body">
                    <div class="input-group">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Enter search term..."
                        aria-label="Enter search term..."
                        aria-describedby="button-search"
                    />
                    <button
                        aria-label="Search"
                        class="btn btn-primary mb-3"
                        id="button-search"
                        type="button"
                    >
                        Go!
                    </button>
                    </div>
                </div>
                </div>

                <div class="card mb-4">
                <div class="card-header">Categories</div>
                <div class="card-body">
                    <div class="row">
                    <div class="col-sm-6">
                        <ul class="list-unstyled mb-0">
                        <li>
                            <Link href="#!" style="pointer-events: none">
                            Europe
                            </Link>
                        </li>
                        <li>
                            <Link href="#!" style="pointer-events: none">
                            Africa
                            </Link>
                        </li>
                        <li>
                            <Link href="#!" style="pointer-events: none">
                            America
                            </Link>
                        </li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <ul class="list-unstyled mb-0">
                        <li>
                            <Link href="#!" style="pointer-events: none">
                            Traval
                            </Link>
                        </li>
                        <li>
                            <Link href="#!" style="pointer-events: none">
                            Food
                            </Link>
                        </li>
                        <li>
                            <Link href="#!" style="pointer-events: none">
                            Work
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>

                <div class="card mb-4">
                <div class="card-header">Daily Photo</div>
                <div class="card-body">
                    <img
                    loading="lazy"
                    class="img-fluid rounded mx-auto d-block"
                    src="../Assets/Media/pexels-son-tung-tran-6478474.webp"
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
