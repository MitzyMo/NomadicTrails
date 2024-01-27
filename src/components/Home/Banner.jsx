import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/media/BrandCompendium.webp";

const divStyle = {
  width: "100%", // '%' unit, so we use a string
    margin: "0 auto",
    height: "400px",
};

const Banner = () => {
    return (
        <>
        <div
            className="p-5 text-center bg-image"
            style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            divStyle,
            }}
        >
            <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-dark">
                <h1 className="mb-3">Heading</h1>
                <h4 className="mb-3">Subheading</h4>
                <Link
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
                >
                Call to action
                </Link>
            </div>
            </div>
        </div>
        </>
    );
};

export default Banner;
