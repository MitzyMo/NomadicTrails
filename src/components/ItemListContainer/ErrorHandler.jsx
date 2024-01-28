import React from "react";
import error404 from "../../assets/media/404.webp";
import { Link } from "react-router-dom";

const ErrorHandler = () => {
    return (
        <div className="container ">
        <div className="d-flex align-items-center justify-content-center vh-100 ">
            <Link to={"/"}>
            <img src={error404} alt="error 404" />
            </Link>
        </div>
        </div>
    );
};

export default ErrorHandler;
